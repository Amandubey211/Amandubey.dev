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
      process.env.RECIPIENT_EMAIL || "amandubey.dev@gmail.com";

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
      // host: "smtp-relay.brevo.com",
      // port: 587,
      // secure: false, // TLS is used
      // auth: {
      //   user: smtpEmail,
      //   pass: smtpPassword,
      // },
      // tls: {
      //   rejectUnauthorized: true,
      // },
      service: "gmail", // Use the built-in Gmail service
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: smtpEmail, // Your full Gmail address from .env
        pass: smtpPassword, // The App Password from .env
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
      subject: `🚀 New Message from ${sanitizedName}`,
      html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        /* Base styles */
        body {
          margin: 0;
          padding: 0;
          background-color: #f2f4f6;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .email-container {
          max-width: 600px;
          margin: 40px auto;
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          overflow: hidden;
        }
        .email-header {
          background: linear-gradient(135deg, #1f2937, #111827);
          color: #ffffff;
          padding: 40px;
          text-align: center;
        }
        .email-header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 600;
          letter-spacing: -0.5px;
        }
        .email-header p {
          margin: 10px 0 0;
          font-size: 16px;
          color: #a0aec0;
        }
        .email-content {
          padding: 30px 40px;
        }
        .content-block {
          margin-bottom: 25px;
        }
        .content-block strong {
          display: block;
          color: #4a5568;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .content-block p, .content-block pre {
          margin: 0;
          font-size: 16px;
          line-height: 1.6;
          color: #333;
        }
        .message-block {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 20px;
          white-space: pre-wrap;
          word-wrap: break-word;
          font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
          color: #1e293b;
        }
        .reply-button-container {
          text-align: center;
          margin-top: 30px;
        }
        .reply-button {
          display: inline-block;
          background: linear-gradient(135deg, #a3e635, #84cc16);
          color: #1f2937;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 8px;
          transition: transform 0.2s;
        }
        .email-footer {
          text-align: center;
          padding: 25px;
          font-size: 12px;
          color: #a0aec0;
          background-color: #f8fafc;
          border-top: 1px solid #e0e0e0;
        }
        a {
            color: #84cc16;
            text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <h1>New Portfolio Message</h1>
          <p>A new submission has arrived from your contact form.</p>
        </div>
        <div class="email-content">
          <div class="content-block">
            <strong>From</strong>
            <p>${sanitizedName}</p>
          </div>
          <div class="content-block">
            <strong>Sender's Email</strong>
            <p><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
          </div>
          <div class="content-block">
            <strong>Message</strong>
            <pre class="message-block">${sanitizedMessage}</pre>
          </div>
          <div class="reply-button-container">
            <a href="mailto:${sanitizedEmail}" class="reply-button">Reply to ${sanitizedName}</a>
          </div>
        </div>
        <div class="email-footer">
          <p>Sent via amandubey.vercel.app</p>
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
