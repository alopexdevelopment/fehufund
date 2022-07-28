const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

const options = {
    auth: {
        api_key: "TODO:// Generate new key"
    }
};

const mailer = nodemailer.createTransport(sgTransport(options));

const sendEmails = async (message) => {
    const usersEmail = {
        to: ["demut016@gmail.com"],
        from: "alopex.development@gmail.com",
        subject: message.subject,
        html: `<p>${ message.message }</p>`
    };

    return await mailer.sendMail(usersEmail).catch((err) => {
        console.log(`This is the error: ${err}`)
        return {error: true, type: err};
    });
}


exports.sendEmails = sendEmails;
