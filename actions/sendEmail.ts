"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/app/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const companyName = formData.get("companyName");
  const currentWebsiteUrl = formData.get("currentWebsiteUrl");

  //   simple serverside validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "c.p.ware@hotmail.com",
      subject: "Message from Contact Form",
      reply_to: senderEmail as string,
      html: `<p>You have a contact form submission</p><br>
      <p><strong>From: </strong> ${firstName} ${lastName}</p><br>
      <p><strong>Email: </strong> ${senderEmail}</p><br>
      <p><strong>Company: </strong> ${companyName}</p><br>
      <p><strong>Website: </strong> ${currentWebsiteUrl}</p><br>
      <p><strong>Message: </strong> ${message}</p><br>
      `,
      // text: message as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
