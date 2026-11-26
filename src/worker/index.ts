import { Hono } from "hono";
import { EmailMessage } from "cloudflare:email";

const FROM = "quotes@floridasunrinse.com";
const TO = "mservicioselites@gmail.com";

const app = new Hono<{ Bindings: Env }>();

const clean = (v: unknown, max = 500) => String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

app.post("/api/quote", async (c) => {
  const body = await c.req.json<Record<string, unknown>>().catch(() => null);
  if (!body) return c.json({ ok: false, error: "Invalid request." }, 400);
  // Honeypot: bots fill the hidden field; pretend success.
  if (clean(body._gotcha)) return c.json({ ok: true });

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  if (!name || phone.replace(/\D/g, "").length < 10) return c.json({ ok: false, error: "Enter your name and a valid phone number." }, 400);
  const email = clean(body.email, 200);
  const city = clean(body.city, 120);

  const lines = [
    ["Name", name], ["Phone", phone], ["Email", email || "(not provided)"],
    ["Address", clean(body.address, 300)], ["City", city], ["ZIP", clean(body.zipCode, 20)],
    ["Services", clean(body.services)], ["Property type", clean(body.propertyType)],
    ["Square footage", clean(body.squareFootage)], ["When", clean(body.urgency)],
  ].map(([k, v]) => `${k}: ${v}`);
  const message = String(body.message ?? "").trim().slice(0, 5000);
  const text = `New quote request from floridasunrinse.com\n\n${lines.join("\n")}\n\nMessage:\n${message || "(none)"}\n`;

  const subject = `Florida SunRinse estimate - ${name} - ${city}`;
  const raw = [
    `From: Florida SunRinse Website <${FROM}>`,
    `To: ${TO}`,
    ...(email && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ? [`Reply-To: ${email}`] : []),
    `Subject: =?UTF-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@floridasunrinse.com>`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    btoa(unescape(encodeURIComponent(text))).replace(/.{76}/g, "$&\r\n"),
  ].join("\r\n");

  try {
    await c.env.QUOTE_EMAIL.send(new EmailMessage(FROM, TO, raw));
  } catch (err) {
    console.error("send_email failed", err);
    return c.json({ ok: false, error: "We couldn't send your request. Please try again or call us." }, 502);
  }
  return c.json({ ok: true });
});

export default app;
