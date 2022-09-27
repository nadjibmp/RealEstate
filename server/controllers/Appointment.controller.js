const { query } = require("express");
const pool = require("../dbConfig/db.js");


const TakeAnAppointment = async (req, res) => {
    try {
        //Getting the date and the id listing 
        const { date, id_listing } = req.body;
        const { userId } = req.session.user;


        const result = await pool.query(`INSERT INTO public.appoinment(id_user, date_time, status, id_listing)
                                        VALUES($1, $2, $3, $4)`,
            [
                userId,
                date,
                false,
                id_listing
            ]);
        if (result) {
            if (result.rowCount > 0) {
                const result = await pool.query(`INSERT INTO public.notification( id_user, type, id_property, date_notif)
                VALUES($1, $2, $3, $4)`, [
                    userId,
                    "rdv",
                    id_listing,
                    new Date()

                ]);
                if (result) {
                    if (result.rowCount > 0) {
                        return res.status(200).json({ response: "ok" })
                    }
                    return res.status(400).json({ message: "erreur d'insertion du notification" });
                }
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "erreur d'insertion du notification" });
    }
}


/* Demande de visites */
const GetAllVisits = async (req, res) => {
    try {
        /* Get the id of the Rdv */
        const { userId } = req.session.user;

        const result = await pool.query(`SELECT a._id_appoinment, a.date_time, a.status, p.title  
                                        FROM public.appoinment a
                                        JOIN public.property p
                                            ON a.id_listing = _id_property
                                        WHERE p.id_user = $1 AND a.status = $2` , [userId, false]);
        if (result) {
            res.status(200).json({
                Message: "Ok",
                data: result.rows
            })
        }

    } catch (error) {
        console.log(error);
        res.status(401).json({
            Message: "Error",
            Error: error
        })
    }
}

const ValidateRdv = async (req, res) => {
    try {
        
        /* Get the id of the Rdv */
        const { userId } = req.session.user;
        const { data } = req.body;
        console.log(data._id_appoinment);
        const dateTime = data.date_time;
        const description = `Vous avez une Visite à ${dateTime.slice(11, 16)} a propos du bien ${data.title} `;
        console.log(description);
        const result = await pool.query(`UPDATE public.appoinment
                                        SET status=$1
                                        WHERE _id_appoinment = $2`, 
                                        [true, data._id_appoinment]);
        if (result) {
            const results = await pool.query(`
                INSERT INTO public.evenement(description, id_user, start_date, type)
                VALUES ($1, $2, $3, $4)
            `,[description, userId, data.date_time, "visite"]);

            if (results.rowCount > 0) {
                return res.status(200).json({ message: "Ok" });
            } else {
                return res.status(304).json({ message: "zero demande comfirmer !" });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({
            Message: "Error",
            Error: error
        })
    }
}


const DeleteRdv = async (req, res) => {
    try {
        /* Get the id of the Rdv */
        const { data } = req.body;
        const Result = await pool.query(`DELETE FROM public.appoinment
                                            WHERE _id_appoinment = $1`, [data]);
        if (Result) {
            console.log(Result);
            return res.status(200).json({ message: "Ok !" });
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({
            Message: "Error",
            Error: error
        })
    }
}


//TO-DO Add CheckIfListingIsMine controller here 

const CheckIfListingIsMine = async (req, res) => {
    try {
        const { userId } = req.session.user;
        const { id_listings } = req.query;

        const Result = await pool.query(
            `SELECT COUNT (_id_property) 
            FROM public.property 
            WHERE id_user = $1 AND _id_property = $2`, [userId, id_listings]
        );
        if(Result)
        {
            if(Result.rows[0].count == 1)
            {
                return res.status(200).json({ message: "Ok !", data:true });
            }
            return res.status(200).json({ message: "Ok !", data:false });
        }

    } catch (error) {
        console.log(error);
        res.status(401).json({
            Message: "Error",
            Error: error
        })
    }
}

const CheckIfRdvExist = async (req, res) => {
    try {
        const { userId } = req.session.user;
        const { id_listings } = req.query;
        console.log(userId, id_listings);
        const Result = await pool.query(
            `SELECT COUNT (_id_appoinment) 
            FROM public.appoinment 
            WHERE id_user = $1 AND id_listing = $2`, [userId, id_listings]
        );

        if(Result)
        {
            console.log(Result);
            if (Result.rows[0].count > 0)
            {
                return res.status(200).json({ message: true});
            }
            else {
                return res.status(200).json({ message: false});
            }
        }
    } catch (error) {
        res.status(401).json({
            Message: "Error",
            Error: error
        })
    }
}
module.exports = 
    { 
        TakeAnAppointment, 
        GetAllVisits, 
        ValidateRdv, 
        DeleteRdv, 
        CheckIfListingIsMine, 
        CheckIfRdvExist
    }