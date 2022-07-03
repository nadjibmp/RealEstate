const pool = require("../dbConfig/db");
const nodeMailer = require('nodemailer');

const SendFirstStepEmail = (req, res) => {
    try {
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
            to: "anadjib54@gmail.com", // list of receivers
            subject: "hello", // Subject line
            text: "hello nadjib", // plain text body
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
                else{
                    res.send(200);
                }
        });
    } catch (error) {

    }
}

module.exports = { SendFirstStepEmail };