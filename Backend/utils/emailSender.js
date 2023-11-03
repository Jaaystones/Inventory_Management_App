import nodemailer from "nodemailer";

const sendEmail = async (subject, message, send_to, sent_from,  reply_to) => {

    //create an email transporter instance
    const user= process.env.Email_User // generated sender mail user
    const pass= process.env.Email_Pass // generated
    const service= process.env.Email_Service // generated service
    const  host= process.env.Email_Host // generated host link
    const transporter = nodemailer.createTransport({
        service,
        host,
        port: 587,
        secure: false, 
        auth: {
            user,
            pass, 
        },
        tls: {
            rejectUnauthorized: false
        }
    });

     // Option for sending email
    const options = {
        from: sent_from,
        to: send_to,
        replyTo: reply_to,
        subject: subject,
        html: message,
    };

    // send mail with defined transport object
    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
          } else {
            console.log(info);
          }
        });
};

export default sendEmail;
