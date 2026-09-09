/** @format */

const API_KEY = import.meta.env.VITE_API_KEY;
const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

// HTML escape function to prevent XSS
const escapeHtml = (text: string): string => {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
};

export const Mailer = async (
  name: string,
  email: string,
  recipientEmail: string,
  header: string,
  text: string,
) => {
  try {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeHeader = escapeHtml(header);
    const safeText = escapeHtml(text);

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
          email: safeEmail,
          name: safeName,
        },
        subject: safeHeader || "Portfolio contact",
        htmlContent: `<p><strong>From:</strong> ${safeName} (${safeEmail})</p>\n<p>${safeText.replace(/\n/g, "<br>")}</p>`,
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