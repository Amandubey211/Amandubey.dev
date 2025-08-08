import { checkRateLimit } from "@/lib/rate-limit";
import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

// Simple email validation
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Sanitize input to prevent XSS attacks
const sanitizeInput = (input: string): string => {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<[^>]+>/g, "")
    .trim();
};

export async function POST(request: Request) {
  // 1. Apply Rate Limiting
  const rateLimitResult = await checkRateLimit(request);
  if (rateLimitResult instanceof NextResponse) {
    return rateLimitResult;
  }

  try {
    const body = await request.json();
    const { name, email, message } = body;

    // 2. Enhanced server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required and cannot be empty." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    if (name.trim().length > 100 || message.trim().length > 2000) {
      return NextResponse.json(
        { error: "Input is too long. Please keep your message concise." },
        { status: 400 }
      );
    }

    // 3. Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedMessage = sanitizeInput(message);

    // 4. Validate Environment Variables
    const smtpEmail = process.env.SMTP_EMAIL;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const recipientEmail =
      process.env.RECIPIENT_EMAIL || "amandubey8833@gmail.com";

    if (!smtpEmail || !smtpPassword) {
      console.error(
        "CRITICAL: Missing SMTP credentials in environment variables."
      );
      return NextResponse.json(
        {
          error:
            "Server configuration error. The service is temporarily unavailable.",
        },
        { status: 500 }
      );
    }

    // 5. Create and verify Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // TLS is used
      auth: {
        user: smtpEmail,
        pass: smtpPassword,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("SMTP Configuration Error:", verifyError);
      return NextResponse.json(
        { error: "Email service is currently down. Please try again later." },
        { status: 503 } // 503 Service Unavailable
      );
    }

    // 6. Define mail options with a professional HTML template
    const mailOptions = {
      from: `"Portfolio Contact Form" <${smtpEmail}>`,
      to: recipientEmail,
      replyTo: sanitizedEmail,
      subject: `🚀 New Contact Form Submission from ${sanitizedName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; margin: 0; padding: 20px; background-color: #f4f4f9; color: #333; }
            .container { max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 6px 18px rgba(0,0,0,0.07); overflow: hidden; border: 1px solid #e2e8f0; }
            .header { background: linear-gradient(135deg, #84cc16, #10b981); padding: 24px; text-align: center; }
            .header h1 { margin: 0; color: white; font-size: 28px; font-weight: 600; }
            .content { padding: 30px; }
            .content p { font-size: 16px; line-height: 1.7; }
            .info-block { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 20px; }
            .info-block strong { display: block; margin-bottom: 8px; color: #4a5568; font-size: 14px; }
            .message-block { white-space: pre-wrap; word-wrap: break-word; font-family: 'Courier New', Courier, monospace; background-color: #1e293b; color: #e2e8f0; padding: 20px; border-radius: 8px; }
            .footer { padding: 20px; text-align: center; font-size: 12px; color: #a0aec0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Message Received</h1>
            </div>
            <div class="content">
              <p>You've received a new message through your portfolio contact form.</p>
              <div class="info-block">
                <strong>From:</strong>
                <p>${sanitizedName}</p>
              </div>
              <div class="info-block">
                <strong>Email:</strong>
                <p><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
              </div>
              <div class="info-block">
                <strong>Message:</strong>
                <pre class="message-block">${sanitizedMessage}</pre>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from your portfolio contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 7. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Your message has been sent successfully!" },
      { status: 200, headers: rateLimitResult.headers }
    );
  } catch (error) {
    console.error("POST Request Error:", error);
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid request format." },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
