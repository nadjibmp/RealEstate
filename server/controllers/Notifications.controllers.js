const pool = require("../dbConfig/db");

const GetAllNotificationByUserId = (req, res) => {
    try {
        const { userId } = req.session.user;
        pool
            .query(` 
                SELECT  u.prenom, u.profile_pic, u.nom, n.id_user, n.type, p.title, n.date_notif
                FROM public.notification n 
                    JOIN public.property p
                        ON n.id_property = p._id_property
                    JOIN public.user u
                        ON n.id_user = u._id
                WHERE p.id_user = $1    
                `, [userId])
            .then(result => {
                return res.status(200).json({ response: "Ok", data: result.rows });
            })
            .catch(error => {
                console.log(error);
                return res.status(400).json({ response: "erreur" });
            })
    } catch (error) {
        return res.status(404).json({ response: "erreur interne" });
    }
}

const DeleteAllNotifications = (req, res) => {
    try {
        const { userId } = req.session.user;
        pool
            .query(`DELETE 
                    FROM public.notification n
                    USING public.property p
                    WHERE p.id_user = $1`, [userId])
            .then(result => {
                return res.status(200).json({ message: 'ok' })
            })
            .catch(error => {
                return res.status(401).json({ message: error });
            })
    } catch (error) {
        return res.status(400).json({ message: error });
    }

}

module.exports = { GetAllNotificationByUserId, DeleteAllNotifications }