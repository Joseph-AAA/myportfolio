
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const resend = new Resend(process.env.RESEND_API_KEY);



export async function POST(request: Request) {
  try {
        const redis = Redis.fromEnv();

    const ratelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, "20 m"),
      prefix: "portfolio-contact",
    });
    // Rate limiting: identify the request IP
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Allow up to 3 requests per IP per 20 minutes
  const { success, reset } = await ratelimit.limit(ip);

    if (!success) {
      const retryAfter = Math.max(
        1,
        Math.ceil((reset - Date.now()) / 1000)
      );

      return NextResponse.json(
        {
          error: "Too many submissions.",
          retryAfter,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfter),
          },
        }
      );
    }

    const body = await request.json();

    const { name, email, subject, message, website } = body;

    // Honeypot spam protection
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json(
        { message: "Your message has been sent successfully!" },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Normalize input
    const trimmedName = String(name).trim();
    const trimmedEmail = String(email).trim();
    const trimmedSubject = String(subject).trim();
    const trimmedMessage = String(message).trim();

    // Validate field lengths
    if (
      trimmedName.length > 100 ||
      trimmedEmail.length > 254 ||
      trimmedSubject.length > 150 ||
      trimmedMessage.length > 2000
    ) {
      return NextResponse.json(
        { error: "One or more fields exceed the allowed length." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_EMAIL;

    if (!recipient || !process.env.RESEND_API_KEY) {
      console.error("Contact email environment variables are missing.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    // Send email through Resend
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <portfolio@mycodeacademy.my>",
      to: recipient,
      replyTo: trimmedEmail,
      subject: `Portfolio Contact: ${trimmedSubject}`,
      text: `
      Name: ${trimmedName}
      Email: ${trimmedEmail}
      Subject: ${trimmedSubject}

      Message:
      ${trimmedMessage}
            `,
          });

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        { error: "Unable to send your message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
