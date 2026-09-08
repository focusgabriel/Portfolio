/** @format */

// import nodemailer from "nodemailer"
import apiInstance from "../config/brevo";


// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     // user: process.env.SMTP_USER,
//     // pass: process.env.SMTP_PASS,

//     user: "charlesuchendu750@gmail.com",
//     pass: "hmjjqezuergofswv"
//   },
// });

// export const sendMailer = (sender: string, subject: string, text: string) => {
//   try {
//       let mailOptions = {
//       from: sender,
//       to: "charlesuchendu750@gmail.com",
//       subject: subject,
//       text: text
//     }

//     transporter.sendMail(mailOptions, function (error:unknown, info:any) {
//     if (error ) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//     }
//   });
//   } catch (error) {
//     console.error("error occurred")
//     console.error(error)
//   }

// }

export const Mailer = async(
  name: string,
  email: string,
  recipientEmail: string,
  header: string,
  text: string,
) => {
  try {
    const verifiedSenderEmail =
      import.meta.env.VITE_BREVO_SENDER_EMAIL || "charlesuchendu750@gmail.com";

    await apiInstance.sendTransacEmail({
      sender: {
        name: "Portfolio Contact",
        email: verifiedSenderEmail,
      },
      to: [{ email: recipientEmail }],
      replyTo: {
        name: name,
        email: email,
      },
      subject: header,
      htmlContent: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p>${text}</p>
      `,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};