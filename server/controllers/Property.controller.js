const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../dbConfig/db.js");
var cookieParser = require("cookie-parser");

// in this controller you will find all the routed and methodes concernig the properties 
//get all properties or one by _id_property. 

const GetProperties = (req, res) => {
    // return res.status(200).json({
    //     message: req.method
    // });
    if (req.method=="GET")
    {
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
    else if (req.method=="POST")
    {
        if (req.body.id_property!= undefined){
            var id = req.body.id_property
            pool
            .query('SELECT title, description, date_publish, localisation_y, localisation_x, price, vues, status, nombre_chambre, feet, floor, " balcony", cupboard, pool, elevator, condition, plan_img_path, credit, location, id_user, "Wilaya", commune, annee_construction, garage, parking FROM public.property WHERE _id_property = $1;',[id])
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


module.exports = { GetProperties};