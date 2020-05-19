const nodeMailer = require("nodemailer");
const config = require("../config");

exports.sendEmail = (emailData) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: config.EMAIL_USERID,
      pass: config.EMAIL_PASSWORD,
    },
  });

  return transporter.sendMail(emailData);
};

// var api_key = config.MAILGUN_API_KEY;
// var domain = config.MAILGUN_API_DOMAIN;
// var mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

// mailgun.messages().send(emailData, function (error, body) {
//   if (error) {
//     console.log("SIGNUP EMAIL SENT ERROR", error);
//     return res.json({
//       message: error,
//     });
//   }
//   console.log("SIGNUP EMAIL SENT", body);
//   return res.json({
//     message: `Email has been sent to ${name}. Follow the instruction to activate your account`,
//   });
// });
