import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, role } = await req.json();

    if (!email || !role) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    // Setup transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587 || Number(process.env.EMAIL_PORT),
      secure: false, 
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to the user
    const confirmationEmail = {
      from: `"Waitlist Bot" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ You're on the Waitlist!",
      text: `Thanks for signing up as a ${role}. We'll be in touch soon.`,
      html: `<p>Hi there,</p>
             <p>Thanks for signing up as a <strong>${role}</strong> on our waitlist. We'll be in touch soon.</p>
             <p>— The Team #KEAgents</p>`,
    };

    // Email to admin (you)
    const adminNotification = {
      from: `"Waitlist Bot" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL, // your own email
      subject: `📥 New Waitlist Signup: ${role}`,
      text: `New waitlist signup:\nEmail: ${email}\nRole: ${role}\nTime: ${new Date().toISOString()}`,
      html: `<p><strong>New waitlist signup</strong></p>
             <p>Email: ${email}</p>
             <p>Role: ${role}</p>
             <p>Time: ${new Date().toISOString()}</p>`,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(confirmationEmail),
      transporter.sendMail(adminNotification),
    ]);

    console.log("Waitlist signup:", { email, role, at: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Error sending emails:", e);
    return NextResponse.json(
      { ok: false, error: "Email failed" },
      { status: 500 }
    );
  }
}
