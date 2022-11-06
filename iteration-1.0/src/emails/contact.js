// using Twilio SendGrid's v3 Node.js Library
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (email) => {
  sgMail.send({
    to: email,
    from: "contato@smartwill.com.br",
    subject: "Seu email foi cadastrado com sucesso",
    html: "<p>Obrigado pelo seu interesse em conhecer a plataforma SmartWill. Manteremos você informado(a) sobre as atualizações e novidades a respeito do projeto.</p><p>Atenciosamente,</p><p><strong>Equipe SmartWill</strong></p>",
  });
};

module.exports = sendEmail;
