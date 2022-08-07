const pool = require("../dbConfig/db");

const AddVue = async (req, res) => {
    try {

        const { userId } = req.session.user;
        const { id_property } = req.body.params;
        console.log(req);
        pool.query(`INSERT 
                    INTO public.vues(id_property, id_user, date)
                    VALUES($1, $2, $3)`, [id_property, userId, new Date()])
            .then(result => {
                res.status(200).json({ message: "ok" });
            })
            .catch(error => {
                console.log(error);
            })
    } catch (error) {
        return res.status(400).json({ message: error });
    }
}

const ShowVuesCount = (req, res) => {
    try {
        const { id } = req.query;
        console.log(id);
        pool.query(`SELECT COUNT (*) 
                    FROM public.vues
                    WHERE id_property = $1`,[id])
            .then(result => {
                res.status(200).json({message:'ok', data: result.rows[0].count})
            })
            .catch(error => {
                console.log(error);
                return res.status(401).json({ message: error });
            })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: error });
    }
}
module.exports = { AddVue, ShowVuesCount };