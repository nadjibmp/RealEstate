const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../dbConfig/db.js");
var cookieParser = require("cookie-parser");

// in this controller you will find all the controllers concernig the user 
//get informations, login, logout, etc. 

//Middleware for registration
const Register = (req, res, next) => {
    const {
        nom, prenom, email, tel, tell, naissance, sexe, status, nationalite, motdepass1 } = req.body.values;
    bcrypt
        .hash(motdepass1, 10)
        .then((hash) => {
            const newUser = pool
                .query(
                    "INSERT INTO public.user(nom, prenom, email, numtelephone, numfixe, naissance, sexe, motdepass, status, nationalite) VALUES($1, $2,  $3, $4, $5, $6, $7, $8, $9, $10) RETURNING _id",
                    [
                        nom,
                        prenom,
                        email,
                        tel,
                        tell,
                        naissance,
                        sexe,
                        hash,
                        status,
                        nationalite,
                    ]
                )
                .then((result) => {
                    return res
                        .status(201)
                        .json({ message: "Utilisateur créer avec succés !" });
                })
                .catch((err) => {
                    if (err.code === "23505") {
                        res
                            .status(401)
                            .json({ message: "Veuillez utiliser un autre e-mail !" });
                    } else {
                        res.status(401).json({ message: "erreur Interne 401" });
                    }
                });
        })
        .catch((err) => res.status(400).json({ err }));
};

//Middleware for Login
const Login = (req, res, next) => {
    const { email, motdepass } = req.body.values;
    pool
        .query("SELECT * FROM public.user WHERE email = $1", [email])
        .then((result) => {
            if (result.rowCount == 0) {
                return res.status(401).json({ message: "Votre Email est incorrect !" });
            } else {
                bcrypt
                    .compare(motdepass, result.rows[0].motdepass)
                    .then((valid) => {
                        if (!valid) {
                            return res
                                .status(401)
                                .json({ message: "Votre Email ou mot de pass est incorrect !" });
                        }
                        if (req.session.user) {
                            res.status(401).json({ message: "you are already loggedin  !" });
                        } else {
                            const token = jwt.sign(
                                { userId: result.rows[0]._id },
                                process.env.TOKEN,
                                { expiresIn: "24h" }
                            );
                            req.session.authenticated = true;
                            req.session.user = {
                                token,
                                userId: result.rows[0]._id,
                                email: result.rows[0].email,
                            };
                            res.status(200).json({
                                userId: result.rows[0]._id,
                                email: result.rows[0].email,
                                nom: result.rows[0].nom,
                                prenom: result.rows[0].prenom,
                                session: req.session,
                            });
                        }
                    })
                    .catch((error) => {
                        res.status(500).json({ message: "Mot de pass invalide !" });
                        console.log(error);
                    });
            }
        })
        .catch((error) => res.status(500).json({ message: "Mot de pass invalide " }));
};


//middleware for logout 
const Logout = (req, res) => {
    if (req.session.user) {
        res.clearCookie('user_session')
        req.session.destroy()
        return res.status(200).json({ message: "Déconnecté" })
    } else {
        console.log('already loggedout')
        res.status(500).json({ message: "vous êtes déjà déconnecté !" })
    }
}


//middleware to get info about the user 
const GetInformations = (req, res) => {
    const userId = req.body.userId
    pool
        .query("SELECT * FROM public.user WHERE _id = $1", [userId])
        .then(result => {
            if (result.rowCount == 0) {
                return res.status(401).json({ message: "Impossible de recuperer vos informations !" });
            } else {
                return res.status(200).json({
                    message: "voici votre informations ! ",
                    nom: result.rows[0].nom,
                    prenom: result.rows[0].prenom,
                    email: result.rows[0].email,
                    tel: result.rows[0].numtelephone,
                    naissance: result.rows[0].naissance,
                    sexe: result.rows[0].sexe
                });
            }
        })
        .catch(error => {
            console.log(error.message)
        })

}

//middleware to update info's user
const UpdateInformation = (req, res) => {
    const userId = req.session.user.userId
    const { nom, prenom, email, tel, naissance, sexe, motdepass1 } = req.body.information;
    if (motdepass1 == undefined) {
        pool
            .query("UPDATE public.user SET nom = $1, prenom = $2, email = $3, numtelephone= $4, naissance = $5, sexe = $6  WHERE _id = $7",
                [nom, prenom, email, tel, naissance, sexe, userId])
            .then(result => {
                return res
                    .status(201)
                    .json({ message: "Utilisateur mise à jour avec succés !" });
            })
            .catch(error => {
                res.status(401).json({ message: "erreur Interne 401" })
            })
    } else {
        bcrypt
            .hash(motdepass1, 10)
            .then((hash) => {
                pool
                    .query("UPDATE public.user SET nom = $1, prenom = $2, email = $3, numtelephone= $4, naissance = $5, sexe = $6, motdepass = $7  WHERE _id = $8",
                        [nom, prenom, email, tel, naissance, sexe, hash, userId])
                    .then(result => {
                        return res
                            .status(201)
                            .json({ message: "Utilisateur mise à jour avec succés !" });
                    })
                    .catch(error => {
                        res.status(401).json({ message: "erreur Interne 401" })
                    })
            })
            .catch((err) => {
                return res.status(400).json({ message: err });
            })
    }

}

module.exports = { Register, Login, Logout, GetInformations, UpdateInformation };
