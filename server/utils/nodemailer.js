const nodemailer = require("nodemailer");

function sendPaymentInitiationEmail(recipientEmail) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: recipientEmail,
    subject: "Payment Initiation Confirmation",
    text: "Dear recipient,\n\nYour request for payment has been successfully initiated. Please allow 2-3 business days for the payment to arrive.\n\nBest regards,\n[Collab]", // plaintext body
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
function sendMail(email, link) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: email,
    subject: "Reset Password",
    html: `<h1>Reset Your Password</h1>
    <p style="margin-bottom: 20px;">Click on the following link to reset your password:</p>
    <a style="background-color: #059669; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none;" href="${link}">Reset Password</a>
    <p style="margin-top: 20px;">The link will expire in 10 minutes.</p>
    <p>If you didn't request a password reset, please ignore this email.</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = { sendPaymentInitiationEmail, sendMail };
