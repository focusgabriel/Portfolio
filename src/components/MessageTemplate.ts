/** @format */

const API_KEY = import.meta.env.VITE_API_KEY;
const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export const Mailer = async (
  name: string,
  email: string,
  recipientEmail: string,
  header: string,
  text: string,
) => {
  try {
    console.log("Sending email with:", { name, email, recipientEmail, header, text });

    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Portfolio Contact",
          email: "charlesuchendu750@gmail.com",
        },
        to: [
          {
            email: recipientEmail,
            name: recipientEmail,
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: header || "Portfolio contact",
        htmlContent: `<p><strong>From:</strong> ${name} (${email})</p>\n<p>${text}</p>`,
      }),
    });

    const data = await response.json();
    console.log("Brevo response:", data);

    if (!response.ok) {
      throw new Error(`Brevo API error: ${response.status} ${JSON.stringify(data)}`);
    }

    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};