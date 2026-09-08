import { BrevoClient, Brevo } from "@getbrevo/brevo";

const apiKey = import.meta.env.VITE_API_KEY;

if (!apiKey) {
  throw new Error("Missing BREVO_API_KEY environment variable");
}

const brevoClient = new BrevoClient({
  apiKey,
});

const apiInstance: {
  sendTransacEmail: (
    request: Brevo.SendTransacEmailRequest
  ) => Promise<Brevo.SendTransacEmailResponse>;
} = {
  sendTransacEmail: (request) =>
    brevoClient.transactionalEmails.sendTransacEmail(request),
};

export default apiInstance;