const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (email) => {
    sgMail.send(email);
}

module.exports = { sendEmail }
