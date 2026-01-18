'use server';

import { Resend } from 'resend';

export async function sendContactEmail(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use a verified domain email in production
      to: ['user@example.com'], // The recipient of the contact form
      subject: 'New Contact Form Message',
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    console.log(data);
    return { success: true, messageId: data?.id };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to send email' };
  }
}