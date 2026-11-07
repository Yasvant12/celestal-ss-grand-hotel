import { Resend } from "resend";
import type { AnyEnquiryData } from "@/types";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendEnquiryEmail(data: AnyEnquiryData) {
  const recipient = process.env.HOTEL_ENQUIRY_EMAIL || "info@celestalssgrand.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Celestal SS Grand Hotel <onboarding@resend.dev>";

  const enquiryTitleMap: Record<string, string> = {
    room: "New Room & Suite Stay Enquiry",
    banquet: "New Grand Banquet Hall Booking Enquiry",
    wedding: "New Royal Wedding Celebration Enquiry",
    general: "New General Website Contact Inquiry",
  };

  const subject = `[Website Enquiry] ${enquiryTitleMap[data.type] || "New Guest Enquiry"} - ${data.name}`;

  // Build clean HTML email content
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF7F2; margin: 0; padding: 24px; color: #1c1c19; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e5e2dd; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background: #111827; color: #FAF7F2; padding: 24px 32px; border-bottom: 3px solid #7a5508; }
          .header h1 { margin: 0; font-size: 22px; color: #E8D3A2; letter-spacing: 0.05em; text-transform: uppercase; }
          .header p { margin: 6px 0 0; font-size: 13px; color: #e5e2dd; }
          .body { padding: 32px; }
          .badge { display: inline-block; background: #f0ede9; color: #7a5508; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 20px; }
          table { width: 100%; border-collapse: collapse; margin-top: 12px; }
          td { padding: 10px 12px; border-bottom: 1px solid #f0ede9; font-size: 14px; }
          td.label { width: 35%; color: #4f4538; font-weight: 600; }
          td.value { color: #1c1c19; }
          .footer { background: #f6f3ee; padding: 16px 32px; font-size: 12px; color: #4f4538; text-align: center; border-top: 1px solid #e5e2dd; }
          .message-box { background: #FAF7F2; border-left: 3px solid #7a5508; padding: 12px 16px; margin-top: 16px; border-radius: 0 4px 4px 0; font-style: italic; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Celestal SS Grand Hotel</h1>
            <p>Kursi Road, Lucknow • Website Enquiry Desk</p>
          </div>
          <div class="body">
            <span class="badge">${enquiryTitleMap[data.type] || "Website Enquiry"}</span>
            <table>
              <tr>
                <td class="label">Guest Name:</td>
                <td class="value"><strong>${data.name}</strong></td>
              </tr>
              <tr>
                <td class="label">Phone Number:</td>
                <td class="value"><a href="tel:${data.phone}" style="color: #7a5508; text-decoration: none; font-weight: 600;">${data.phone}</a></td>
              </tr>
              ${data.email ? `<tr>
                <td class="label">Email Address:</td>
                <td class="value"><a href="mailto:${data.email}" style="color: #7a5508; text-decoration: none;">${data.email}</a></td>
              </tr>` : ""}
              ${"roomsCount" in data && data.roomsCount ? `<tr><td class="label">Rooms Required:</td><td class="value">${data.roomsCount}</td></tr>` : ""}
              ${"checkInDate" in data ? `<tr><td class="label">Check-In Date:</td><td class="value">${data.checkInDate}</td></tr>` : ""}
              ${"checkOutDate" in data ? `<tr><td class="label">Check-Out Date:</td><td class="value">${data.checkOutDate}</td></tr>` : ""}
              ${"eventDate" in data ? `<tr><td class="label">Event Date:</td><td class="value">${data.eventDate}</td></tr>` : ""}
              ${"weddingDate" in data ? `<tr><td class="label">Wedding Date:</td><td class="value">${data.weddingDate}</td></tr>` : ""}
              ${"eventType" in data ? `<tr><td class="label">Occasion / Event:</td><td class="value">${data.eventType}</td></tr>` : ""}
              ${"guestsCount" in data ? `<tr><td class="label">Guest Capacity:</td><td class="value">${data.guestsCount}</td></tr>` : ""}
              ${"foodRequirements" in data && data.foodRequirements ? `<tr><td class="label">Catering Preference:</td><td class="value">${data.foodRequirements}</td></tr>` : ""}
              ${"approximateBudget" in data && data.approximateBudget ? `<tr><td class="label">Approximate Budget:</td><td class="value">${data.approximateBudget}</td></tr>` : ""}
              ${"roomsRequired" in data && data.roomsRequired ? `<tr><td class="label">Rooms Required:</td><td class="value">${data.roomsRequired}</td></tr>` : ""}
              ${"subject" in data ? `<tr><td class="label">Subject:</td><td class="value">${data.subject}</td></tr>` : ""}
            </table>

            ${("message" in data && data.message) || ("functionDetails" in data && data.functionDetails) || ("roomRequirements" in data && data.roomRequirements) || ("additionalRequirements" in data && data.additionalRequirements) ? `
              <div style="margin-top: 24px;">
                <span class="label" style="font-size: 13px; font-weight: 600; color: #4f4538;">Special Notes &amp; Requests:</span>
                <div class="message-box">
                  ${("message" in data && data.message) || ("functionDetails" in data && data.functionDetails) || ("roomRequirements" in data && data.roomRequirements) || ("additionalRequirements" in data && data.additionalRequirements) || ""}
                </div>
              </div>
            ` : ""}
          </div>
          <div class="footer">
            Submitted from the Celestal SS Grand Hotel website on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST.
          </div>
        </div>
      </body>
    </html>
  `;

  if (!resend) {
    // In development or when API key is not yet provided, log the email cleanly
    console.info("=================================================");
    console.info("[ENQUIRY RECEIVED - DEV SIMULATION MODE]");
    console.info(`To: ${recipient}`);
    console.info(`Subject: ${subject}`);
    console.info("Payload:", JSON.stringify(data, null, 2));
    console.info("=================================================");
    return { success: true, simulated: true };
  }

  try {
    const { data: resendData, error } = await resend.emails.send({
      from: fromEmail,
      to: [recipient],
      ...(data.email ? { replyTo: data.email } : {}),
      subject: subject,
      html: htmlContent,
    });

    if (error) {
      console.error("[Resend Error]:", error);
      throw new Error(error.message);
    }

    return { success: true, id: resendData?.id };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to deliver email";
    console.error("[Email Dispatch Exception]:", message);
    throw new Error(message);
  }
}
