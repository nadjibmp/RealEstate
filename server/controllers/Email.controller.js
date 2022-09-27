const pool = require("../dbConfig/db");
const nodeMailer = require('nodemailer');
const bcrypt = require("bcrypt");

const SendFirstStepEmail = (req, res) => {
    try {
        const { digits } = req.body;
        const { email } = req.body.email;

        console.log(digits);
        console.log(email);
        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'anadjib53@gmail.com',
                pass: 'fupwhiwlhqivldwa'
            }
        });
        let mailOptions = {
            from: 'anadjib53@gmail.com', // sender address
            to: `${email}`, // list of receivers
            subject: `Réinitialiser le mot de passe`, // Subject line
            text: `${digits}`, // plain text body
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            else {
                res.status(200).json({ Message: "Email Envoyé avec Succée !" })
            }
        });
    } catch (error) {

    }
}

const CheckEmailIExist = (req, res) => {
    try {
        const { email } = req.body.email;
        pool
            .query(`SELECT COUNT (*)
                    FROM public.user
                    WHERE email = $1`, [email])
            .then(result => {
                res.status(200).json({ message: "ok", data: result.rows[0].count });
            })
            .catch(error => {
                console.log(error);
                return res.status(401).json({ response: "erreur interne", data: error });
            })
    } catch (error) {
        return res.status(404).json({ response: "erreur interne", data: error });
    }
}

const ResetPassword = (req, res) => {
    try {
        const { email } = req.body;
        const { password } = req.body;
        bcrypt
            .hash(password, 10)
            .then((hash) => {
                pool
                    .query(`UPDATE public.user
                            SET motdepass = $1
                            WHERE email = $2`, [hash, email])
                    .then(result => {
                        return res.status(200).json({ response: "Mise à jour avec succée"});

                    })
                    .catch(error => {
                        return res.status(402).json({reponse: error});
                    })
            })
            .catch(error => {
                return res.status(401).json({ response: "erreur interne", data: error });
            })

    } catch (error) {
        console.log(error);
        return res.status(404).json({ response: "erreur interne", data: error });
    }
}
module.exports = { SendFirstStepEmail, CheckEmailIExist, ResetPassword };