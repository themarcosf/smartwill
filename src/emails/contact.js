// using Twilio SendGrid's v3 Node.js Library
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

sgMail.send({
  to: "marcosaurelio.adm@gmail.com",
  from: "contato@smartwill.com.br",
  subject: "teste",
  text: "teste",
});

const msg = {
  to: "marcosaurelio.adm@gmail.com",
  from: "contato@smartwill.com.br",
  subject: "Email cadastrado com sucesso",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

sgMail.send(msg);
