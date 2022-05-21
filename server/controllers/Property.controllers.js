const pool = require("../dbConfig/db.js");
const multer = require('multer');
const path = require('path');


// in this controller you will find all the routed and methodes concernig the properties 


//get all properties or one by _id_property. 
const GetProperties = (req, res) => {
    // return res.status(200).json({
    //     message: req.method
    // });
    if (req.method == "GET") {
        pool
            .query('SELECT title, description, date_publish, localisation_y, localisation_x, price, vues, status, nombre_chambre, feet, floor, " balcony", cupboard, pool, elevator, condition, plan_img_path, credit, location, id_user, "Wilaya", commune, annee_construction, garage, parking FROM public.property;')
            .then(result => {
                if (result.rowCount == 0 || result == undefined) {
                    return res.status(404).json({ message: "There is no properties" });
                } else {
                    return res.status(200).json({
                        message: "There is some properties found",
                        properties: result.rows,
                    });
                }
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    else if (req.method == "POST") {
        if (req.body.id_property != undefined) {
            var id = req.body.id_property
            pool
                .query('SELECT title, description, date_publish, localisation_y, localisation_x, price, vues, status, nombre_chambre, feet, floor, " balcony", cupboard, pool, elevator, condition, plan_img_path, credit, location, id_user, "Wilaya", commune, annee_construction, garage, parking FROM public.property WHERE _id_property = $1;', [id])
                .then(result => {
                    if (result.rowCount == 0 || result == undefined) {
                        return res.status(404).json({ message: "There is no properties" });
                    } else {
                        return res.status(200).json({
                            message: "There is some properties found",
                            properties: result.rows,
                        });
                    }
                })
                .catch(error => {
                    console.log(error.message)
                })

        }
        else {
            return res.status(403).json({
                message: "Movaise Requette"
            });

        }

    }
    else {
        return res.status(403).json({
            message: "Permission Non Accordée"
        });
    }

}

//Insert annonce....
const storage = multer.diskStorage({
    destination: path.join("./images"),
    filename: function (req, file, cb) {
        imageName = Date.now() + path.extname(file.originalname);
        cb(null, imageName);
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 3000000 },
}).any("Myfile");


const AddListing = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
        } else {
            //Gather information from request...
            const categorie = req.body.data[0]; //string 50
            const typeBien = req.body.data[1]; //string 50
            const superficieBien = parseFloat(req.body.data[2]); // real
            const superficieTerrain = parseFloat(req.body.data[3]); // double
            const etages = req.body.data[4] != "" ? parseInt(req.body.data[4]) : 0; // integer
            const nombrePiece = parseInt(req.body.data[5]); //integer
            const papier = req.body.data[6]; //string 100
            const anneeConstruction = req.body.data[7]; //date
            const description = req.body.data[8];//string 512
            const prix = parseInt(req.body.data[9]); //integer
            const wilaya = req.body.data[10]; //string 50
            const commune = req.body.data[11]; //string 50 
            const adresse = req.body.data[12]; //string 512 

            const suppliments = req.body.data[13].split(','); //bool
            const jardin = !suppliments.includes("jardin") ? false : true;
            const piscince = !suppliments.includes("piscine") ? false : true;
            const ascenseur = !suppliments.includes("ascensseur") ? false : true;
            const garage = !suppliments.includes("parkingGarage") ? false : true;
            const terasse = !suppliments.includes("terasse") ? false : true;

            const conditionPaiment = req.body.data[14].split(',');; //boolean
            const promesse = !conditionPaiment.includes("Promesse de vente") ? false : true;
            const paimentTranche = !conditionPaiment.includes("Paiment par tranche") ? false : true;
            const creditBancaire = !conditionPaiment.includes("Crédit bancaire possible") ? false : true;

            const lat = parseFloat(req.body.lat); //real 
            const lng = parseFloat(req.body.lng); // real
            const UserId = parseInt(req.body.UserId); //int
            const title = `${typeBien} ${superficieBien} m² à ${categorie} à ${wilaya} ${commune} `; // string 255

            //Creating new date to add it in db later
            var today = new Date();
            const date_publish = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

            //Get the image path of the plan 
            let plan_img_path = "";
            req.files.forEach(element => {
                if (element.fieldname === "myPlan") {
                    plan_img_path = element.path;
                }
            });

            pool
                .query("INSERT INTO public.property(title, description, date_publish, localisation_y, localisation_x, price, categorie, nombre_chambre, feet, pool, elevator, plan_img_path, jardin, id_user, wilaya, commune, annee_construction, garage, terasse,  feetterrain, adresse, papier, typebien, nbetages, promesse_vente, paiment_tranche, credit_bancaire) VALUES($1, $2,  $3, $4, $5, $6, $7, $8, $9, $10, $11, $12,  $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27 ) RETURNING _id_property",
                    [
                        title, description, date_publish,
                        lng, lat, prix, categorie,
                        nombrePiece, superficieBien, piscince,
                        garage, plan_img_path, jardin,
                        UserId, wilaya, commune,
                        anneeConstruction, ascenseur,
                        terasse, superficieTerrain,
                        adresse, papier, typeBien,
                        etages, promesse, paimentTranche,
                        creditBancaire,
                    ]
                )
                .then((result) => {
                    //Insert images into db..

                    //get id property of from the last inserted
                    const idProperty = result.rows[0]._id_property;

                    //make string that contain all the paths of images
                    let imgUrl = "";
                    if (req.files.length > 0) {
                        for (let index = 0; index < req.files.length; index++) {
                            imgUrl += req.files[index].path;
                            if (index < req.files.length - 1) { imgUrl += "," }
                        }
                    }
                    pool
                        .query("INSERT INTO public.property_img(image_desc, img_url, id_property) VALUES($1, $2,  $3)",
                            [
                                title, imgUrl, idProperty
                            ])
                        .then((response) => {
                            return res.status(200).json({message : "Annonce crée avec succée !"});
                        })
                })
                .catch((err) => {
                    console.log(err);
                    return result
                        .status(400)
                        .json({
                            message: err,
                            result: "Un problème est survenu!"
                        });
                });
        }
    });
};

module.exports = { AddListing, upload, GetProperties };