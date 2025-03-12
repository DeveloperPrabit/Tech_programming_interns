const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    pool: true,
    // host: "mail.techprogramming.org",
    host: "mail.techprogramming.org",
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        // user: "admin@techprogramming.org",
        pass: process.env.SMTP_PASS
        // pass: "Prabit@123"
    },
})
const sendMail = async ({ email, subject, htmlMsg }) => {
    const { messageId } = await transporter.sendMail({
        from: '"Nabin "<adhiainabin2060@gmail.com>',
        to: email,
        subject,
        html: htmlMsg,
    });
    return messageId;

};


module.exports = { sendMail };

// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     secure: process.env.SMTP_PORT == 465, // Use true for 465, false for 587
//     auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//     },
// });

// transporter.verify((error, success) => {
//     if (error) {
//         console.error("SMTP Connection Error:", error);
//     } else {
//         console.log("SMTP Connected Successfully!");
//     }
// });