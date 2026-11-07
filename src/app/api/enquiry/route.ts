import { NextRequest, NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validation";
import { sendEnquiryEmail } from "@/lib/email";

// Simple in-memory rate limiting to prevent spam
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string, limit = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.expiresAt) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + windowMs });
    return false;
  }

  if (entry.count >= limit) {
    return true;
  }

  entry.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown-ip";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many enquiries submitted. Please wait a minute or call our concierge desk directly.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Check honeypot for bot traffic
    if (body.honeypot && body.honeypot.trim().length > 0) {
      // Silently pretend success to deceive bot scripts without sending email
      return NextResponse.json({
        success: true,
        message: "Thank you for reaching out! Our team will contact you shortly.",
      });
    }

    // Validate payload with Zod
    const validationResult = enquirySchema.safeParse(body);

    if (!validationResult.success) {
      const formattedErrors = validationResult.error.format();
      return NextResponse.json(
        {
          success: false,
          message: "Please fill out all required fields properly.",
          errors: formattedErrors,
        },
        { status: 400 }
      );
    }

    const enquiryData = validationResult.data;

    // Dispatch email
    await sendEnquiryEmail(enquiryData);

    return NextResponse.json({
      success: true,
      message:
        "Thank you for contacting Celestal SS Grand Hotel. Your enquiry has been received.",
    });
  } catch (error: unknown) {
    console.error("[API /api/enquiry Error]:", error);
    const message =
      error instanceof Error ? error.message : "Internal server error occurred while processing your enquiry.";

    return NextResponse.json(
      {
        success: false,
        message: "We encountered a temporary issue dispatching your enquiry. Please call us directly at +91 9115202115 or +91 9115202555.",
        error: message,
      },
      { status: 500 }
    );
  }
}

