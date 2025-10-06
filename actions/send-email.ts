"use server";

import { sendMail } from "@/lib/email";
import { formSchema } from "@/lib/schema";
import z from "zod";

export const sendContactEmail = async (values: z.infer<typeof formSchema>) => {
  const { error, success, data } = formSchema.safeParse(values);

  if (!success) {
    return {
      error: "Validation failed!",
      issues: error.issues,
    };
  }

  const { name, email, message } = data;

  const html = `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f7; padding: 30px;">
      <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
        <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 8px;">
          📩 New Contact Message
        </h2>
        <p style="font-size: 16px; margin: 16px 0;">
          <strong>Name:</strong> ${name}
        </p>
        <p style="font-size: 16px; margin: 16px 0;">
          <strong>Email:</strong> ${email}
        </p>
        <div style="margin-top: 24px; padding: 16px; background: #f9fafb; border-left: 4px solid #4f46e5; border-radius: 4px;">
          <p style="font-size: 16px; color: #111; line-height: 1.6;">
            ${message}
          </p>
        </div>
      </div>
      <p style="text-align: center; margin-top: 16px; color: #888; font-size: 14px;">
        This message was sent from your website contact form.
      </p>
    </div>
  `;

  try {
    const emailResult = await sendMail({
      to: process.env.EMAIL_USER ?? "hello@demoladevop.com",
      subject: `New message from ${name}`,
      html,
      replyTo: email,
    });

    console.log("Email sent successfully:", emailResult.messageId);

    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      success: false,
      error:
        "Failed to send email! Please contact me directly via email or phone.",
    };
  }
};
