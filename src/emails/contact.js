//API key provided by SendGrid
const sendgridApiKey = "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";

// using Twilio SendGrid's v3 Node.js Library
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(sendgridApiKey);

sgMail.send({
    to: "marcosaurelio.adm@gmail.com",
    from: "contato@smartwill.com.br",
    subject: "teste",
    text: "teste"
});


const msg = {
  to: "marcosaurelio.adm@gmail.com",
  from: "contato@smartwill.com.br",
  subject: 'Email cadastrado com sucesso',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail.send(msg);