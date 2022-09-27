const { query } = require("express");
const pool = require("../dbConfig/db.js");

const GetAllEvents = async (req, res) => {
    try {


        /* Get the id of the Rdv */
        const { userId } = req.session.user;

        const Result = await pool.query('SELECT * FROM public.evenement WHERE id_user = $1', [userId]);
        if (Result) {
            return res.status(200).json({ response: "ok", data: Result.rows })
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: error });
    }
}

const AddEvenet = async (req, res) => {
    try {

        /* Get the id of the Rdv */
        const { userId } = req.session.user;
        const { title } = req.body.values;
        const { dateDebut, dateFin } = req.body;
        const Result = await pool.query(`INSERT INTO public.evenement (description, start_date, type, date_end, id_user)
                                        VALUES($1, $2, $3, $4, $5)`, [title, dateDebut, "event", dateFin, userId]);
        if(Result)
        {
            if(Result.rowCount > 0)
                return res.status(200).json({ response: "ok"})
            return res.status(401).sjon({response: "error"})
        }

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: error });
    }
}
module.exports = { GetAllEvents, AddEvenet }