import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, contactTime, reachBy, needs, budget } = body;

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // use this until you verify a domain
      to: process.env.YOUR_EMAIL!,
      subject: `New enquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd"><strong>Name</strong></td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd"><strong>Company</strong></td><td style="padding:8px;border:1px solid #ddd">${company}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd"><strong>Best way to reach</strong></td><td style="padding:8px;border:1px solid #ddd">${reachBy}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd"><strong>Preferred contact time</strong></td><td style="padding:8px;border:1px solid #ddd">${contactTime}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd"><strong>Needs</strong></td><td style="padding:8px;border:1px solid #ddd">${needs}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd"><strong>Budget</strong></td><td style="padding:8px;border:1px solid #ddd">${budget}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
