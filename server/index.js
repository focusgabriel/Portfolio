/** @format */

import "dotenv/config";
import express from "express";
import cors from "cors";
import brevo from "@getbrevo/brevo";

const PORT = process.env.PORT || 4000;
const API_KEY = process.env.BREVO_API_KEY;

if (!API_KEY) {
  console.error("Missing BREVO_API_KEY in server environment");
  process.exit(1);
}

const defaultClient = brevo.ApiClient.instance;
defaultClient.authentications["api-key"].apiKey = API_KEY;

const transactionalEmailsApi = new brevo.TransactionalEmailsApi();
const app = express();

app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.send("Backend is alive");
});

app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, recipientEmail, header, text } = req.body;

    if (!name || !email || !recipientEmail || !text) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const verifiedSenderEmail =
      process.env.BREVO_SENDER_EMAIL || "no-reply@example.com";

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

    const resp = await transactionalEmailsApi.sendTransacEmail(request);
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
