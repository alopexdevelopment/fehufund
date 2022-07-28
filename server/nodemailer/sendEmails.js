const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

const options = {
    auth: {
        api_key: "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"
    }
};

const mailer = nodemailer.createTransport(sgTransport(options));

const sendEmails = async (message) => {
    const usersEmail = {
        to: ["alopex.development@gmail.com", "demut016@gmail.com"],
        from: "erik.x.asland@gmail.com",
        subject: message.subject,
        html: `<p>${ message.message }</p>`
    };

    return await mailer.sendMail(usersEmail).catch((err) => {
        console.log(`This is the error: ${err}`)
        return {error: true, type: err};
    });
}


exports.sendEmails = sendEmails;