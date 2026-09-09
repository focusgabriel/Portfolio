/** @format */

import dotenv from "dotenv"
import express from "express";
import cors from "cors";
import { BrevoClient } from "@getbrevo/brevo";

dotenv.config();
console.log(process.env.BREVO_API_KEY)

const PORT = process.env.PORT || 5051;
const API_KEY = process.env.BREVO_API_KEY;

console.log(API_KEY);


if (!API_KEY) {
  console.error("Missing BREVO_API_KEY in server environment");
  process.exit(1);
}

const brevoClient = new BrevoClient({ apiKey: API_KEY });
const app = express();
app.use(cors({
  origin: "*"
}));
app.use(express.json());

app.get("/health", async(req, res) => {
  try{
    if(API_KEY){
      res.send("Backend is alive");
    }
  } catch {
    res.send("Backend is dead")
  }
})
app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, recipientEmail, header, text, senderName } = req.body;

    if (!name || !email || !recipientEmail || !text) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log(process.env.BREVO_SENDER_EMAIL);

    const verifiedSenderEmail = "charlesuchendu750@gmail.com";

    const request = {
      sender: {
        name: "Portfolio Contact",
        email: verifiedSenderEmail,
      },
      to: [{ email: recipientEmail }],
      replyTo: { name, email },
      subject: header || "Portfolio contact",
      htmlContent: `<p><strong>From:</strong> ${name} (${email})</p>\n<p>${text}</p>`,
    };

    console.log("Sending email request:", JSON.stringify(request, null, 2));
    const resp =
      await brevoClient.transactionalEmails.sendTransacEmail(request);
    console.log("Brevo response:", JSON.stringify(resp, null, 2));
    return res.json({ ok: true, data: resp });
  } catch (err) {
    console.error("Server error sending email:", err);
    return res
      .status(500)
      .json({ error: "Failed to send email", details: String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
