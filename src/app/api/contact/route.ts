import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fname, lname, name, email, phone, message, service } = body;

    const senderName = name || `${fname || ""} ${lname || ""}`.trim() || "Anonymous";

    if (!email && !phone) {
      return NextResponse.json(
        { error: "Please provide at least an email or phone number." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@greenbooks.ae";

    // SMTP Configuration from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE !== "false"; // default true for port 465

    if (smtpUser && smtpPass) {
      const isGmail = smtpHost?.includes("gmail") || smtpUser?.toLowerCase().includes("@gmail.com");

      const transporter = isGmail
        ? nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          })
        : nodemailer.createTransport({
            host: smtpHost || "mail.greenbooks.ae",
            port: smtpPort,
            secure: smtpSecure,
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
            tls: {
              rejectUnauthorized: false,
            },
          });

      const mailOptions = {
        from: `"Green Books Website" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: email || smtpUser,
        subject: `New Client Inquiry from ${senderName}${service ? ` - ${service}` : ""}`,
        text: `
New Inquiry from Green Books Website

Full Name: ${senderName}
Email: ${email || "Not provided"}
Phone: ${phone || "Not provided"}
Service: ${service || "General Inquiry"}

Message:
${message || "No message provided"}
        `.trim(),
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; color: #1f2937;">
            <div style="background-color: #2E3880; padding: 24px; text-align: center; border-bottom: 4px solid #00A82B;">
              <h2 style="color: #ffffff; margin: 0; font-size: 22px;">New Website Inquiry</h2>
              <p style="color: #93c5fd; margin: 6px 0 0; font-size: 14px;">Green Books Accounting & Tax Services</p>
            </div>
            
            <div style="padding: 24px; background-color: #ffffff;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #4b5563; width: 140px; border-bottom: 1px solid #f3f4f6;">Full Name:</td>
                  <td style="padding: 10px 0; color: #111827; border-bottom: 1px solid #f3f4f6;">${senderName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #4b5563; border-bottom: 1px solid #f3f4f6;">Email:</td>
                  <td style="padding: 10px 0; color: #111827; border-bottom: 1px solid #f3f4f6;">
                    <a href="mailto:${email}" style="color: #00A82B; text-decoration: none;">${email || "Not provided"}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #4b5563; border-bottom: 1px solid #f3f4f6;">Phone Number:</td>
                  <td style="padding: 10px 0; color: #111827; border-bottom: 1px solid #f3f4f6;">
                    <a href="tel:${phone}" style="color: #2E3880; text-decoration: none; font-weight: 600;">${phone || "Not provided"}</a>
                    ${phone ? `&nbsp;(<a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" target="_blank" style="color: #00A82B; text-decoration: underline;">Open in WhatsApp</a>)` : ""}
                  </td>
                </tr>
                ${service ? `
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #4b5563; border-bottom: 1px solid #f3f4f6;">Service Requested:</td>
                  <td style="padding: 10px 0; color: #111827; border-bottom: 1px solid #f3f4f6;">${service}</td>
                </tr>` : ""}
              </table>

              <div style="margin-top: 20px;">
                <p style="font-weight: bold; color: #4b5563; margin-bottom: 8px;">Message:</p>
                <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">
                  ${message || "No message entered."}
                </div>
              </div>
            </div>

            <div style="background-color: #f3f4f6; padding: 16px; text-align: center; font-size: 12px; color: #6b7280;">
              This inquiry was submitted from greenbooks.ae. Direct reply will go to ${email || "sender"}.
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true, message: "Email sent successfully." });
    } else {
      // SMTP is not yet set in .env.local
      console.warn("SMTP settings are not configured in environment variables. Simulated submission for:", {
        senderName,
        email,
        phone,
        message,
        recipientEmail,
      });

      return NextResponse.json({
        success: true,
        smtpConfigured: false,
        message: "Inquiry received. (To send real emails, please configure SMTP credentials in .env.local)",
      });
    }
  } catch (error: unknown) {
    console.error("Error sending contact email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to send email", details: errorMessage },
      { status: 500 }
    );
  }
}
