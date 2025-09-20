import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  const mailer = process.env.RESEND_EMAIL_ADDRESS || fromEmail; // doğru isimlendirme

  console.log(email, subject, message);

  try {
    const data = await resend.emails.send({
      from: `YourName <yourname@resend.dev>`,
      to: mailer,
      subject: subject,
      html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
            .header { background-color: #0073e6; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { padding: 20px; }
            .content h2 { font-size: 20px; color: #333333; }
            .content p { font-size: 16px; color: #666666; line-height: 1.6; }
            .footer { padding: 20px; text-align: center; font-size: 14px; color: #888888; }
            .button { display: inline-block; padding: 10px 20px; background-color: #0073e6; color: #ffffff; text-decoration: none; border-radius: 5px; font-size: 16px; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Message from ${email}</h1>
            </div>
            <div class="content">
              <h2>${subject}</h2>
              <p>${message}</p>
              <p>Thank you for getting in touch. We will get back to you soon.</p>
              <a href="mailto:${email}" class="button">Reply to ${email}</a>
            </div>
            <div class="footer">
              <p>&copy; 2024 Kagan Mamak. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
