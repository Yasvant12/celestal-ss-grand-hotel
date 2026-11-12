const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const HOTEL_NAME = "Celestial SS Grand Hotel";

export interface Web3FormsEnquiry {
  category: string;
  sourcePage: string;
  name: string;
  phone: string;
  email?: string;
  fields: Record<string, string>;
  botcheck?: string;
}

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

export async function submitWeb3FormsEnquiry(enquiry: Web3FormsEnquiry) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey || accessKey === "YOUR_ACCESS_KEY") {
    throw new Error("The enquiry email service is not configured yet. Please contact the hotel directly.");
  }

  const name = enquiry.name.trim();
  const phone = enquiry.phone.replace(/\D/g, "");
  const email = enquiry.email?.trim() ?? "";

  if (name.length < 2) {
    throw new Error("Please enter your name (at least 2 characters).");
  }
  if (!/^\d{10}$/.test(phone)) {
    throw new Error("Please enter a valid 10-digit mobile number.");
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Please enter a valid email address.");
  }

  const submittedAt = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());
  const message = Object.entries(enquiry.fields)
    .map(([label, value]) => `${label}: ${value.trim() || "Not specified"}`)
    .join("\n");
  const subjectCategory = enquiry.category.replace(/\s+enquiry$/i, "").trim();

  const payload = {
    access_key: accessKey,
    subject: `New ${subjectCategory} Enquiry – ${HOTEL_NAME} (${enquiry.sourcePage})`,
    from_name: `${HOTEL_NAME} Website`,
    name,
    ...(email ? { email, replyto: email } : {}),
    "Mobile Number": phone,
    "Enquiry Category": enquiry.category,
    "Source Page": enquiry.sourcePage,
    "Submission Date & Time": `${submittedAt} IST`,
    ...enquiry.fields,
    message,
    botcheck: enquiry.botcheck ? "on" : "",
  };

  let response: Response;
  try {
    response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      throw new Error("We couldn't connect to the enquiry service. Please check your connection and try again.");
    }
    throw error;
  }

  let result: Web3FormsResponse;
  try {
    result = (await response.json()) as Web3FormsResponse;
  } catch {
    throw new Error("The email service returned an unexpected response. Please try again.");
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message || "We couldn't send your enquiry. Please try again.");
  }
}
