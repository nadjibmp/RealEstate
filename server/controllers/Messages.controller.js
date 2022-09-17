const pool = require("../dbConfig/db.js");


//Sending the first message from the listing page....
const AddFirstMessage = (req, res) => {
    try {
        const { message, time, receiverID, roomId } = req.body;
        const { userId } = req.session.user;
        let receiver;
        //Getting the id of the receiver of the message
        pool
            .query(`SELECT id_user
                    FROM public.property
                    WHERE _id_property = $1
                    `, [receiverID])
            .then(result => {
                receiver = result.rows[0].id_user;
                //INSERT the message in the message table 
                pool
                    .query(`
                    INSERT INTO message(user_id, message, time, room_id)
                    VALUES ($1, $2, $3, $4)
                    `, [userId, message, time, roomId])
                    .then(result => {
                        //INSERT the participants of the conversation if didn't exist
                        pool
                            .query(`SELECT id_participant
                                    FROM participants
                                    WHERE room_id = $1`, [roomId])
                            .then(result => {
                                if (result.rowCount < 2) {
                                    pool
                                        .query(`INSERT INTO participants(user_id, room_id)
                                                VALUES ($1, $2),($3, $4)`,
                                            [receiver, roomId, userId, roomId])
                                        .then(result => {
                                            return res.status(200).json({ message: 'Participants Inserted with success' })
                                        })
                                        .catch(error => {
                                            return res.status(401).json({ message: error });
                                        })
                                } else {
                                    return res.status(200).json({ message: 'Message Inserted with success' });
                                }
                            })
                            .catch(error => {
                                return res.status(401).json({ message: error });
                            })
                    })
                    .catch(error => {
                        return res.status(401).json({ message: error });
                    })
            })
    } catch (error) {
        return res.status(401).json({ message: error });
    }
}

//Getting Room id for the users if exist
//If not Create new one 

const GetRoomId = (req, res) => {
    try {

        const idMessageSender = req.query.id_user;
        const id_listing = req.query.id_listing;

        pool
            .query(`
                    SELECT id_user
                    FROM public.property
                    WHERE _id_property = $1
                    `, [id_listing])
            .then(result => {
                if (result.length > 0) {
                    const idMessageReceiver = result.rows[0].id_user;
                    let expectedRoomId = `${idMessageSender}${idMessageReceiver}`;
                    pool
                        .query(`
                            SELECT id
                            FROM public.room
                            WHERE room.room_id = $1 
                            `, [parseInt(expectedRoomId)])
                        .then(result => {
                            result.rows.length > 0 ?
                                res.status(200).json({ message: 'ok', data: result.rows[0].id })
                                :
                                pool
                                    .query(`INSERT  INTO public.room (room_id)
                                    VALUES ($1) RETURNING id`, [parseInt(expectedRoomId)])
                                    .then(result => {
                                        return res.status(200).json({ message: 'ok', data: result.rows[0].id });
                                    })
                                    .catch(error => {
                                        console.log(error);
                                        return res.status(401).json({ message: error });
                                    })
                        })
                        .catch(error => {
                            console.log(error);
                            return res.status(401).json({ message: error });
                        })
                }
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


//Getting all the messages per user
const GetAllMessagesAvailable = async (req, res) => {
    if (req.session != undefined) {
        const { userId } = req.session.user;

        try {
            const result = await pool.query(`
                                                    SELECT(u.profile_pic, u.nom, u.prenom, m.message, m.time, r.room_id)
                                                    FROM public.user u
                                                    INNER JOIN public.message m
                                                        ON u._id = m.user_id
                                                    INNER JOIN public.room r
                                                        ON m.room_id = r.id
                                                    Where CAST(r.room_id as varchar) like $1 
                                                        OR CAST(r.room_id as varchar) like $2
                                            `, [userId + "%", "%" + userId]);
            if (result) {
                res.status(200).json({
                    message: "ok",
                    data: result.rows,
                })
            }
            else res.status(401).json({
                message: error
            })
        } catch (error) {
            //handle error here
            console.log(error);
            res.status(400).json({
                message: error
            })
        }
    }
}

module.exports = { AddFirstMessage, GetRoomId, GetAllMessagesAvailable }