import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "Rensespesialisten <booking@rensespesialisten.no>";
const TO = process.env.BOOKING_TO;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(request: NextRequest) {
  if (!TO) {
    return Response.json({ error: "Server is not configured" }, { status: 500 });
  }

  let body: { name?: unknown; email?: unknown; message?: unknown; website?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.length > 0) {
    return Response.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length > 200) {
    return Response.json({ error: "Ugyldig navn" }, { status: 400 });
  }
  if (!isEmail(email) || email.length > 200) {
    return Response.json({ error: "Ugyldig e-post" }, { status: 400 });
  }
  if (!message || message.length > 5000) {
    return Response.json({ error: "Ugyldig melding" }, { status: 400 });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  const subject = `Ny forespørsel fra ${name}`;
  const text = `Navn: ${name}\nE-post: ${email}\n\n${message}\n\n— Sendt fra rensespesialisten.no`;
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; color: #0f172a;">
      <h2 style="margin: 0 0 16px; font-size: 18px;">Ny forespørsel fra rensespesialisten.no</h2>
      <p style="margin: 0 0 8px;"><strong>Navn:</strong> ${safeName}</p>
      <p style="margin: 0 0 16px;"><strong>E-post:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <div style="border-left: 3px solid #047857; padding: 4px 0 4px 14px; color: #334155;">${safeMessage}</div>
      <p style="margin: 24px 0 0; font-size: 12px; color: #64748b;">Klikk «Svar» for å svare direkte til kunden.</p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("Resend error", error);
    return Response.json({ error: "Kunne ikke sende e-post" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
