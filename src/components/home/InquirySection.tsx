"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { HOTEL_INFO } from "@/lib/constants";

export function InquirySection() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    event_type: "wedding",
    guests: "150-350",
    event_date: "",
    catering: "inhouse-royal",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Prepare payload matching the Zod schema in src/lib/validation.ts
    const payload = {
      type: "banquet" as const,
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim() || "guest@celestalssgrand.com", // fallback if guest does not input email
      eventDate: formData.event_date,
      eventType: formData.event_type,
      guestsCount: formData.guests,
      foodRequirements: formData.catering,
      message: formData.message.trim(),
      honeypot: formData.honeypot,
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Unable to send your request. Please try calling directly.");
      }

      setStatus("success");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission failed. Please call our concierge desk.";
      setErrorMessage(msg);
      setStatus("error");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      event_type: "wedding",
      guests: "150-350",
      event_date: "",
      catering: "inhouse-royal",
      message: "",
      honeypot: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section className="w-full py-space-3xl bg-surface-container-low" id="inquiry-form-section">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-surface-container-highest/60"
        >
          {/* Left Column: Highlights & Direct Lines */}
          <div className="lg:col-span-5 bg-noir-charcoal text-surface-ivory p-space-xl flex flex-col justify-between gap-space-xl">
            <div className="flex flex-col gap-space-md">
              <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-gold-light">
                Direct Concierge Desk
              </span>
              <h3 className="font-headline-md text-headline-md text-surface-ivory">
                Why Celebrate at Celestal SS Grand Hotel?
              </h3>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-surface-container-highest">
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-gold-light text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    <strong>Prime Central Ashiyana Hub:</strong> Easily accessible on Sector-M, minutes from VIP road and Kanpur Highway.
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-gold-light text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    <strong>Complete All-In-One Venue:</strong> Open lawn, air-conditioned banquet hall, plus 50+ luxury stay rooms in one campus.
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-gold-light text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    <strong>Custom Themes &amp; Decor:</strong> Dedicated in-house florist, lighting designers, and Jaimala concept artists.
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-gold-light text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    <strong>Gourmet Multi-Cuisine Feast:</strong> Highly rated banquet catering with segregated veg &amp; non-veg culinary stations.
                  </span>
                </li>
              </ul>
            </div>

            {/* Direct Calling Boxes */}
            <div className="pt-space-md flex flex-col gap-space-sm bg-surface-ivory/5 p-space-md rounded-lg border border-surface-ivory/10">
              <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-gold-light tracking-wider">
                Direct Booking Lines
              </span>
              <div className="flex flex-col gap-1.5 font-label-button text-label-button">
                <a
                  className="text-surface-ivory hover:text-gold-light flex items-center gap-2 transition-colors"
                  href={`tel:${HOTEL_INFO.phones.primary}`}
                >
                  <span className="material-symbols-outlined text-gold-light text-[18px]">call</span>
                  <span>{HOTEL_INFO.phones.primary} (Front Desk &amp; Banquets)</span>
                </a>
                <a
                  className="text-surface-ivory hover:text-gold-light flex items-center gap-2 transition-colors"
                  href={`tel:${HOTEL_INFO.phones.weddingDesk}`}
                >
                  <span className="material-symbols-outlined text-gold-light text-[18px]">call</span>
                  <span>{HOTEL_INFO.phones.weddingDesk} (Wedding Event Desk)</span>
                </a>
                <a
                  className="text-surface-ivory hover:text-gold-light flex items-center gap-2 transition-colors"
                  href={`tel:${HOTEL_INFO.phones.lawnsCatering}`}
                >
                  <span className="material-symbols-outlined text-gold-light text-[18px]">call</span>
                  <span>{HOTEL_INFO.phones.lawnsCatering} (Lawns &amp; Catering)</span>
                </a>
                <a
                  className="text-surface-container-highest hover:text-gold-light flex items-center gap-2 transition-colors pt-1"
                  href={`mailto:${HOTEL_INFO.email}`}
                >
                  <span className="material-symbols-outlined text-gold-light text-[18px]">mail</span>
                  <span>{HOTEL_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Query Form */}
          <div className="lg:col-span-7 p-space-xl flex flex-col justify-center">
            <div className="max-w-xl mx-auto w-full">
              <div className="mb-space-md">
                <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-primary">
                  Reserve Your Preferred Dates
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Request Proposal &amp; Custom Tariff
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Fill out your celebration details below. Our senior event concierge will connect within 30 minutes with venue layouts and customized per-plate packages.
                </p>
              </div>

              {/* Success Message Banner */}
              {status === "success" ? (
                <div className="bg-surface-champagne p-space-lg rounded-xl border border-primary/20 space-y-4 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary text-on-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px]">check</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our senior event planner has received your enquiry for <strong>{formData.event_date || "your proposed dates"}</strong> and will contact you at <strong>{formData.phone}</strong> within 30 minutes.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-label-button text-label-button uppercase hover:bg-gold-deep transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form className="space-y-space-md" id="celestal-query-form" onSubmit={handleSubmit}>
                  {/* Honeypot field (hidden from real users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="form-honeypot">Leave empty</label>
                    <input
                      id="form-honeypot"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Error Notification */}
                  {status === "error" && (
                    <div className="p-3.5 rounded-lg bg-error-container text-on-error-container text-body-sm font-medium flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">error</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1">
                      <label className="font-label-compact text-label-compact font-semibold text-on-surface" htmlFor="full-name">
                        Full Name <span className="text-error">*</span>
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all"
                        id="full-name"
                        name="name"
                        placeholder="e.g. Rajesh Singhania"
                        required
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1">
                      <label className="font-label-compact text-label-compact font-semibold text-on-surface" htmlFor="phone-number">
                        Phone Number (10 Digits) <span className="text-error">*</span>
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all"
                        id="phone-number"
                        name="phone"
                        pattern="[0-9]{10}"
                        placeholder="e.g. 7054250911"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    {/* Event Occasion */}
                    <div className="flex flex-col gap-1">
                      <label className="font-label-compact text-label-compact font-semibold text-on-surface" htmlFor="form-event-type">
                        Event Type <span className="text-error">*</span>
                      </label>
                      <select
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all"
                        id="form-event-type"
                        name="event_type"
                        required
                        value={formData.event_type}
                        onChange={handleChange}
                      >
                        <option value="wedding">Grand Wedding &amp; Reception</option>
                        <option value="mehendi">Mehendi &amp; Sangeet</option>
                        <option value="banquet">Indoor Banquet Function</option>
                        <option value="lawn">Celebration Lawn Party</option>
                        <option value="corporate">Corporate Gala / Conference</option>
                        <option value="stay">Bulk Room Booking (Wedding Stay)</option>
                      </select>
                    </div>

                    {/* Expected Guests */}
                    <div className="flex flex-col gap-1">
                      <label className="font-label-compact text-label-compact font-semibold text-on-surface" htmlFor="form-guests">
                        Expected Guest Count <span className="text-error">*</span>
                      </label>
                      <select
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all"
                        id="form-guests"
                        name="guests"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                      >
                        <option value="50-150">50 - 150 Guests (Intimate Gathering)</option>
                        <option value="150-350">150 - 350 Guests (Banquet Hall)</option>
                        <option value="350-700">350 - 700 Guests (Banquet + Lawn)</option>
                        <option value="700-1200">700 - 1,200+ Guests (Mega Wedding)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    {/* Event Date */}
                    <div className="flex flex-col gap-1">
                      <label className="font-label-compact text-label-compact font-semibold text-on-surface" htmlFor="form-date">
                        Proposed Event Date <span className="text-error">*</span>
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all"
                        id="form-date"
                        name="event_date"
                        required
                        type="date"
                        value={formData.event_date}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Catering Preference */}
                    <div className="flex flex-col gap-1">
                      <label className="font-label-compact text-label-compact font-semibold text-on-surface" htmlFor="form-catering">
                        Catering Requirement
                      </label>
                      <select
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all"
                        id="form-catering"
                        name="catering"
                        value={formData.catering}
                        onChange={handleChange}
                      >
                        <option value="inhouse-royal">Celestal SS Grand Hotel Signature Catering</option>
                        <option value="pure-veg">Pure Vegetarian Royal Thali / Buffet</option>
                        <option value="multicuisine">North Indian, Mughlai &amp; Chinese Fusion</option>
                        <option value="lawn-only">Venue Only (Require Consultation)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Special Requests */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-compact text-label-compact font-semibold text-on-surface" htmlFor="form-message">
                      Special Requests (Stage decor, Rooms count, Jaimala theme)
                    </label>
                    <textarea
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all"
                      id="form-message"
                      name="message"
                      placeholder="Tell us about your theme, number of required guest stay rooms, or special musical/pyro requests..."
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      className="w-full py-3.5 px-6 rounded-xl bg-primary text-on-primary font-label-button text-label-button uppercase tracking-wider hover:bg-gold-deep shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01]"
                      type="submit"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? (
                        <>
                          <span>Transmitting Enquiry...</span>
                          <span className="material-symbols-outlined text-[18px] animate-spin">
                            progress_activity
                          </span>
                        </>
                      ) : (
                        <>
                          <span>Request Proposal &amp; Date Availability</span>
                          <span className="material-symbols-outlined text-[18px]">send</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

