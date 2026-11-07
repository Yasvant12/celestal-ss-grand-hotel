"use client";

import { useState, useEffect } from "react";
import { HOTEL_INFO } from "@/lib/constants";
import { SERVICES_DATA } from "./servicesData";

interface ServicesEnquirySectionProps {
  selectedServiceTitle?: string;
  onServiceSelectChange?: (title: string) => void;
}

export function ServicesEnquirySection({
  selectedServiceTitle,
  onServiceSelectChange,
}: ServicesEnquirySectionProps) {
  const [minDate, setMinDate] = useState<string>("");

  useEffect(() => {
    // Avoid SSR hydration mismatch in Next.js 16
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceInterest: selectedServiceTitle || "Dining Experience",
    eventDate: "",
    guestsCount: "",
    specialRequests: "",
    honeypot: "",
  });

  // Sync when selectedServiceTitle changes from modal
  useEffect(() => {
    if (selectedServiceTitle) {
      setFormData((prev) => ({ ...prev, serviceInterest: selectedServiceTitle }));
    }
  }, [selectedServiceTitle]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "serviceInterest" && onServiceSelectChange) {
      onServiceSelectChange(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone number (must be 10 digits)
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      setSubmitStatus("error");
      setStatusMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "general",
          name: formData.name.trim(),
          phone: cleanPhone,
          email: formData.email.trim(),
          subject: `[Service Inquiry] ${formData.serviceInterest}`,
          message: `Service Selected: ${formData.serviceInterest}\nTentative Event Date: ${
            formData.eventDate || "Not specified"
          }\nExpected Guests: ${
            formData.guestsCount || "Not specified"
          }\n\nSpecial Requests:\n${
            formData.specialRequests || "None provided"
          }`,
          honeypot: formData.honeypot,
        }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitStatus("success");
        setStatusMessage(
          "Thank you! Your enquiry has been routed to our Senior Event Director. We will contact you within 30 minutes."
        );
        setFormData({
          name: "",
          phone: "",
          email: "",
          serviceInterest: "Dining Experience",
          eventDate: "",
          guestsCount: "",
          specialRequests: "",
          honeypot: "",
        });
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          resData.message ||
            "Unable to submit enquiry at this time. Please reach our concierge directly at +91 7054250911."
        );
      }
    } catch (err: unknown) {
      setSubmitStatus("error");
      setStatusMessage(
        "Network connection issue. Please call our concierge desk directly at +91 7054250911."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="w-full bg-[#F5EFEB] py-16 sm:py-20 md:py-24 relative border-t border-stone-200"
      id="services-enquiry-section"
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="font-eyebrow-luxury text-eyebrow-luxury text-[#7a5508] uppercase tracking-[0.25em] block mb-2">
            Tailored Coordination
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#111827] font-serif mb-2 leading-tight">
            Enquire About Our Services
          </h2>
          <p className="font-body-md text-stone-600 text-sm sm:text-base leading-relaxed">
            Share your celebration vision with our hospitality directors. We will tailor bespoke arrangements, menus, and scenography for your event.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Left Column: Direct Hotline & Celestal Guarantee */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            {/* Direct Hotline Box */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200/80 shadow-sm">
              <span className="font-eyebrow-luxury text-[10px] text-[#7a5508] uppercase tracking-widest block mb-2 font-semibold">
                Direct Coordination Hotline
              </span>
              <h3 className="font-headline-sm text-lg sm:text-xl text-[#111827] font-serif mb-2">
                Speak Directly With Concierge
              </h3>
              <p className="font-body-sm text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                For instant date blocks, urgent celebratory queries, or private walkthrough tours with our Senior Event Directors.
              </p>

              {/* Phone Action */}
              <a
                href={`tel:${HOTEL_INFO.phones.primary}`}
                className="flex items-center gap-3 p-3.5 sm:p-4 rounded-lg bg-[#FAF7F2] hover:bg-stone-100 transition-colors group mb-4 border border-stone-200/70"
              >
                <div className="w-10 h-10 rounded-full bg-[#7a5508] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    call
                  </span>
                </div>
                <div>
                  <span className="font-label-compact text-xs text-stone-500 block">
                    Senior Event Manager
                  </span>
                  <span className="font-headline-sm text-base sm:text-lg text-[#111827] font-semibold group-hover:text-[#7a5508] transition-colors">
                    {HOTEL_INFO.phones.primary}
                  </span>
                </div>
              </a>

              {/* WhatsApp Action */}
              <a
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:brightness-105 text-white font-label-button text-xs uppercase tracking-wider rounded-lg transition-all shadow-sm font-semibold"
              >
                <span className="material-symbols-outlined text-[18px]">
                  chat
                </span>
                <span>Chat with Senior Event Manager</span>
              </a>
            </div>

            {/* Celestal Guarantee Banner */}
            <div className="bg-[#111827] text-[#FAF7F2] p-6 sm:p-8 rounded-xl shadow-md border border-[#B38728]/30">
              <div className="flex items-center gap-2 text-[#E8D3A2] mb-2">
                <span className="material-symbols-outlined text-[20px] text-[#B38728]">
                  verified
                </span>
                <span className="font-eyebrow-luxury text-[10px] tracking-widest uppercase font-semibold">
                  The Celestal Guarantee
                </span>
              </div>
              <h4 className="font-headline-sm text-base sm:text-lg text-white font-serif mb-2">
                Turnkey Integrity &amp; Pure Focus
              </h4>
              <p className="font-body-sm text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 font-light">
                Every detail verified by certified hospitality professionals with strict SLA adherence and guaranteed backup systems on-site.
              </p>

              {/* Credentials Grid */}
              <div className="grid grid-cols-2 gap-3 text-stone-300 font-label-compact text-xs">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#B38728]">
                    check_circle
                  </span>
                  <span>Dual Power Backup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#B38728]">
                    check_circle
                  </span>
                  <span>Dedicated Preparation Suites</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#B38728]">
                    check_circle
                  </span>
                  <span>In-House Culinary Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#B38728]">
                    check_circle
                  </span>
                  <span>Licensed AV Infrastructure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 rounded-xl border border-stone-200/80 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot field for anti-spam */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block font-label-compact text-xs uppercase text-stone-800 font-semibold mb-1.5">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Vikram Singhania"
                    className="w-full px-3.5 py-2.5 rounded bg-[#FAF7F2] border border-stone-300 text-stone-900 font-body-sm text-sm focus:bg-white focus:border-[#7a5508] focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block font-label-compact text-xs uppercase text-stone-800 font-semibold mb-1.5">
                    Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10 Digits (e.g. 9876543210)"
                    className="w-full px-3.5 py-2.5 rounded bg-[#FAF7F2] border border-stone-300 text-stone-900 font-body-sm text-sm focus:bg-white focus:border-[#7a5508] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email & Service Interest */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block font-label-compact text-xs uppercase text-stone-800 font-semibold mb-1.5">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vikram@example.com"
                    className="w-full px-3.5 py-2.5 rounded bg-[#FAF7F2] border border-stone-300 text-stone-900 font-body-sm text-sm focus:bg-white focus:border-[#7a5508] focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block font-label-compact text-xs uppercase text-stone-800 font-semibold mb-1.5">
                    Select Service Interest <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="serviceInterest"
                    required
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded bg-[#FAF7F2] border border-stone-300 text-stone-900 font-body-sm text-sm focus:bg-white focus:border-[#7a5508] focus:outline-none transition-all"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title} ({srv.category.split(" ")[0]})
                      </option>
                    ))}
                    <option value="All Comprehensive Services">
                      All Comprehensive Celebration Services
                    </option>
                  </select>
                </div>
              </div>

              {/* Event Date & Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block font-label-compact text-xs uppercase text-stone-800 font-semibold mb-1.5">
                    Tentative Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    min={minDate}
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded bg-[#FAF7F2] border border-stone-300 text-stone-900 font-body-sm text-sm focus:bg-white focus:border-[#7a5508] focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block font-label-compact text-xs uppercase text-stone-800 font-semibold mb-1.5">
                    Expected Guest Count
                  </label>
                  <input
                    type="number"
                    name="guestsCount"
                    min="10"
                    value={formData.guestsCount}
                    onChange={handleChange}
                    placeholder="e.g. 250"
                    className="w-full px-3.5 py-2.5 rounded bg-[#FAF7F2] border border-stone-300 text-stone-900 font-body-sm text-sm focus:bg-white focus:border-[#7a5508] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block font-label-compact text-xs uppercase text-stone-800 font-semibold mb-1.5">
                  Special Requests / Vision
                </label>
                <textarea
                  name="specialRequests"
                  rows={3}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Tell us about specific theme preferences, dietary custom requirements, timing details, or suite blocks needed..."
                  className="w-full px-3.5 py-2.5 rounded bg-[#FAF7F2] border border-stone-300 text-stone-900 font-body-sm text-sm focus:bg-white focus:border-[#7a5508] focus:outline-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#7a5508] hover:bg-[#7B5719] disabled:opacity-60 text-white font-label-button text-xs uppercase tracking-wider rounded transition-all shadow-md flex items-center justify-center gap-2 font-semibold cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Service Enquiry</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </>
                )}
              </button>

              {/* Dynamic Feedback Message */}
              {submitStatus === "success" && (
                <div className="p-3.5 rounded bg-[#e8f5e9] border border-emerald-300 text-emerald-800 text-xs font-semibold leading-relaxed flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-emerald-600">
                    check_circle
                  </span>
                  <span>{statusMessage}</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-3.5 rounded bg-[#ffebee] border border-red-300 text-red-800 text-xs font-semibold leading-relaxed flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-red-600">
                    error
                  </span>
                  <span>{statusMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

