const nodemailer = require("nodemailer");

function sendPaymentInitiationEmail(recipientEmail) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: recipientEmail,
    subject: "Payment Initiation Confirmation",
    text: "Dear recipient,\n\nYour request for payment has been successfully initiated. Please allow 2-3 business days for the payment to arrive.\n\nBest regards,\n[Your Name]", // plaintext body
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = sendPaymentInitiationEmail;
