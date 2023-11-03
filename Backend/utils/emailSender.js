import nodemailer from "nodemailer";

const sendEmail = async (subject, message, send_to, sent_from,  reply_to) => {

    //create an email transporter instance
    user= process.env.EMAIL_USER, // generated sender mail user
    pass= process.env.EMAIL_PASS
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_HOST,
        host: process.env.EMAIL_HOST,
        port: 587,
        secure: false, 
        auth: {
            user: process.env.EMAIL_USER, // generated sender mail user
            pass: process.env.EMAIL_PASS, // generated sender mail password
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
