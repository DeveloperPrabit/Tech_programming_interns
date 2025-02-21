const nodemailer=require('nodemailer');

const transporter = nodemailer.createTransport({
  host:"smpt.gmail.com",
  port:465,
  secure:true,
    auth:{
        user:process.env.SMPT_USER,
        pass:process.env.SMPT_PASS
    },
})
const sendMail= async(email,subject,htmlMsg)=>{
    const {messageId}= await transporter.sendMail({
        from:'"Nabin "<adhiainabin2060@gmail.com>',
        to:email,
        subject,
        htmlMsg,
    });
    return messageId;

};


module.exports={sendMail};