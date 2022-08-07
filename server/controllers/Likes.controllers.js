const pool = require("../dbConfig/db.js");


const PostLike = (req, res) => {
    try {
        const { id } = req.body;
        const { userId } = req.session.user;

        if (req.method == "POST") {
            pool
                .query(`INSERT INTO public.Likes(id_user, id_property, date) VALUES($1, $2, $3)`,
                    [
                        userId,
                        id,
                        new Date()
                    ])
                .then(result => {
                    res.status(200).json({ message: "ok" });
                })
                .catch(error => {
                    res.status(400).json({ Message: "error interne" });
                })
        }
        else
            if (req.method == "DELETE") {
                pool
                    .query('DELETE FROM public.Likes WHERE id_user = $1 AND id_property = $2',
                        [userId, id])
                    .then(() => {
                        res.status(200).json({ message: "ok" });
                    })
                    .catch(error => {
                        res.status(400).json({ Message: error });
                    })
            }
    } catch (error) {
        res.status(404).json({ Message: "error interne" });
    }
}

const GetLikeCount = (req, res) => {
    try {
        const { id } = req.query;
        pool
            .query(`SELECT COUNT (*) 
                    FROM public.likes
                    WHERE id_property = $1`, [id])
            .then(result => {
                return res.status(200).json({ response: "Ok", data: result.rows[0].count });
            })
            .catch(error => {
                return res.status(400).json({ response: "erreur" });
            })

    } catch (error) {
        return res.status(404).json({ response: "erreur interne" });
    }
}

const GetLikeState = (req, res) => {

    try {
        const { id } = req.query;

        pool
            .query(`SELECT COUNT(*)
                    FROM public.likes
                    WHERE id_property = $1`, [
                id
            ])
            .then(result => {
                return res.status(200).json({ response: "Ok", data: result.rows[0].count });
            })
            .catch(error => {
                return res.status(400).json({ response: "erreur" });
            })
    } catch (error) {
        return res.status(404).json({ response: "erreur interne" });
    }
}


const GetAllPropertyILike = (req, res) => {
    try {
        const { userId } = req.session.user;
        pool
            .query(`SELECT(p.title, p.adresse, p.price, p.vues, p.date_publish, p.categorie, pi.img_url)
                    FROM public.property p
                        INNER JOIN property_img pi
                            ON p._id_property = pi.id_property
                        INNER JOIN public.likes l
                            ON p._id_property = l.id_property
                    Where l.id_user = $1`, [userId])
            .then(result => {
                const tempArray = [];
                (result.rows).forEach(element => {
                    tempArray.push((element.row).split(","));
                });
                return res.status(200).json({ message: "Ok", data: tempArray });
            })
            .catch(error => {
                return res.status(401).json({ message: "erreur !" });
            })
    } catch (error) {
        return res.status(404).json({ response: "erreur interne" });
    }
}
module.exports = { PostLike, GetLikeCount, GetLikeState, GetAllPropertyILike };