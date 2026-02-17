"use server";

import { Resend } from "resend";
import ContactAdminEmail from "@/emails/ContactAdminEmail";
import ContactClientEmail from "@/emails/ContactClientEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message: string;
} | null;

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const vehicle = formData.get("vehicle") as string;
  const vehicleYear = (formData.get("vehicleYear") as string) || "";
  const glass = formData.get("glass") as string;
  const insurance = formData.get("insurance") as string;
  const location = formData.get("location") as string;
  const city = formData.get("city") as string;
  const address = (formData.get("address") as string) || "";
  const message = (formData.get("message") as string) || "";

  if (
    !name ||
    !email ||
    !phone ||
    !vehicle ||
    !glass ||
    !insurance ||
    !location ||
    !city
  ) {
    return {
      success: false,
      message: "Veuillez remplir tous les champs obligatoires.",
    };
  }

  const emailTo = process.env.CONTACT_EMAIL_TO!;
  const emailFrom = process.env.CONTACT_EMAIL_FROM!;

  try {
    await Promise.all([
      resend.emails.send({
        from: `Eden Glass <${emailFrom}>`,
        to: emailTo,
        replyTo: email,
        subject: `Nouveau devis – ${name} – ${glass}`,
        react: ContactAdminEmail({
          name,
          email,
          phone,
          vehicle,
          vehicleYear,
          glass,
          insurance,
          location,
          city,
          address,
          message,
        }),
      }),
      resend.emails.send({
        from: `Eden Glass <${emailFrom}>`,
        to: email,
        subject: "Eden Glass – Votre demande de devis a bien été reçue",
        react: ContactClientEmail({
          name,
          vehicle,
          vehicleYear,
          glass,
          insurance,
          location,
          city,
          address,
        }),
      }),
    ]);

    return {
      success: true,
      message:
        "Votre demande a bien été envoyée ! Nous vous recontactons sous 24h.",
    };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return {
      success: false,
      message:
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous appeler au 07 49 57 14 80.",
    };
  }
}
