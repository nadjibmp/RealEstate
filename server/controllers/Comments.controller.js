const pool = require("../dbConfig/db");

const postComments = (req, res) => {
    try {
        const { userId } = req.session.user;
        const message = req.body[0];
        const id_property = req.body[1];
        const date = new Date();

        pool
            .query(`INSERT INTO public.messages(description, id_user, id_property, date_publish)
                    VALUES($1, $2, $3, $4)`, [
                message,
                userId,
                id_property,
                date
            ])
            .then(result => {
                pool
                    .query(`INSERT INTO public.notification( id_user, type, id_property, date_notif)
                            VALUES($1, $2, $3, $4)`, 
                            [
                                userId,
                                "commenté", 
                                id_property,
                                date
                            ])
                    .then(result => {
                        return res.status(200).json({ response: "ok" });
                    })
                    .catch(error => {
                        return res.status(400).json({ response: error });
                    })

            })
            .catch(error => {
                console.log(error);
                return res.status(400).json({ response: error });
            })
    } catch (error) {
        return res.status(401).json({ message: "erreur !" });
    }
}


const GetAllCommentsByIdProperty = (req, res) => {
    const idProperty = req.query.id_user;
    pool
        .query(`SELECT m.description, m.date_publish, u.nom, u.prenom 
                FROM public.messages m
                JOIN public.user u
                    ON m.id_user = u._id
                WHERE id_property = $1`, [idProperty])
        .then(result => {
            return res.status(200).json({ response: "ok", data: result.rows });
        })
        .catch(error => {
            return res.status(401).json({ message: error });
        })
}

const GetLastComments = (req, res) => {
    const { userId } = req.session.user;
    pool
        .query(`SELECT  m.description, m.date_publish, p.title,m.id_user, u.nom, u.prenom
                FROM public.messages m
                    JOIN public.property p
                    ON m.id_property = p._id_property
                    JOIN public.user u 
                    ON p.id_user = u._id
                WHERE p.id_user =  $1`, [userId])
        .then(result => {
            console.log(result.rows);
            return res.status(200).json({ message: "ok", data: result.rows })
        })
        .catch(error => {
            return res.status(401).json({ message: error });
        })
}
module.exports = {
    postComments,
    GetAllCommentsByIdProperty,
    GetLastComments,
}