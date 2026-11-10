"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";
import { submitWeb3FormsEnquiry } from "@/lib/web3forms";

interface BanquetEnquirySectionProps {
  initialVenue?: string;
  initialEventType?: string;
}

export function BanquetEnquirySection({
  initialVenue = "First Floor Grand Astor (5,250 sq ft)",
  initialEventType = "",
}: BanquetEnquirySectionProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState(initialEventType);
  const [eventDate, setEventDate] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [venuePreference, setVenuePreference] = useState(initialVenue);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [minDate, setMinDate] = useState<string | undefined>(undefined);

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!fullName.trim() || fullName.trim().length < 2) {
      setError("Please enter your full name (minimum 2 characters).");
      return;
    }
    if (!eventType) {
      setError("Please select the occasion type.");
      return;
    }
    if (!eventDate) {
      setError("Please select your preferred celebration date.");
      return;
    }
    if (!guestCount) {
      setError("Please select expected guest count.");
      return;
    }

    setLoading(true);

    try {
      await submitWeb3FormsEnquiry({
        category: eventType,
        sourcePage: "Banquet",
        name: fullName,
        phone,
        email,
        botcheck: honeypot,
        fields: {
          "Event Type": eventType,
          "Event Date": eventDate,
          "Number of Guests": guestCount,
          "Preferred Venue": venuePreference,
          "Special Requirements": message,
        },
      });
      setSuccess(true);
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit enquiry. Please try again or call our desk."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24 scroll-mt-28" id="enquiry-section">
      <div className="site-container">
        <div className="bg-noir-charcoal text-on-primary rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 border border-surface-container/20">
          {/* Left Side: Consultation Narrative & Direct Concierge Details */}
          <div className="lg:col-span-5 p-8 sm:p-10 lg:p-14 bg-noir-charcoal relative flex flex-col justify-between gap-10">
            {/* Subtle Decorative Accent Overlay */}
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-6 h-[2px] bg-primary-fixed-dim" />
                <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-[0.24em] text-primary-fixed-dim">
                  Event Reservation &amp; Consultation
                </span>
              </div>

              <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-primary">
                Let&apos;s Make Your Event <span className="italic font-normal text-primary-fixed-dim">Memorable</span>
              </h2>

              <p className="font-body-md text-body-md text-secondary-fixed leading-relaxed">
                Share your celebration vision with our hospitality team. We will guide you through bespoke floor configurations, curated gourmet menus, and guaranteed date availability.
              </p>

              {/* Direct Contact Details */}
              <div className="mt-4 flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-container/10 flex items-center justify-center text-primary-fixed-dim shrink-0 border border-white/5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-eyebrow-luxury text-[10px] uppercase text-secondary-fixed tracking-wider font-bold">
                      Direct Banquet Desk
                    </span>
                    <a
                      href={`tel:${HOTEL_INFO.phones.primary}`}
                      className="font-title-editorial text-base text-on-primary hover:text-primary-fixed-dim transition-colors"
                    >
                      {HOTEL_INFO.phones.primary}
                    </a>
                    <a
                      href={`tel:${HOTEL_INFO.phones.weddingDesk}`}
                      className="font-body-sm text-body-sm text-secondary-fixed hover:text-primary-fixed-dim transition-colors"
                    >
                      {HOTEL_INFO.phones.weddingDesk}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-container/10 flex items-center justify-center text-primary-fixed-dim shrink-0 border border-white/5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-eyebrow-luxury text-[10px] uppercase text-secondary-fixed tracking-wider font-bold">
                      Event Coordination Office
                    </span>
                    <a
                      href={`mailto:${HOTEL_INFO.eventsEmail}`}
                      className="font-title-editorial text-base text-on-primary hover:text-primary-fixed-dim transition-colors"
                    >
                      {HOTEL_INFO.eventsEmail}
                    </a>
                    <span className="font-body-sm text-body-sm text-secondary-fixed">
                      Ashiyana, Lucknow – 226012
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-container/10 flex items-center justify-center text-primary-fixed-dim shrink-0 border border-white/5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-eyebrow-luxury text-[10px] uppercase text-secondary-fixed tracking-wider font-bold">
                      Banquet Walk-Through Hours
                    </span>
                    <span className="font-body-md text-body-md text-on-primary">
                      Open Daily: 09:00 AM – 09:00 PM
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary-fixed">
                      Prior booking recommended for tasting trials
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-2">
              <a
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-label-button text-label-button uppercase hover:brightness-110 transition-all shadow-md font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Direct WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          {/* Right Side: High-Fidelity Enquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-14 bg-surface-container-lowest text-on-surface flex flex-col justify-center">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-surface-champagne p-8 rounded-2xl text-center border border-[#DEC384]/60 flex flex-col items-center gap-3"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-title-editorial text-2xl text-on-surface font-semibold">
                  Thank you. Your inquiry has been received.
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Our Banquet Manager will contact you at <strong>+91 {phone}</strong> shortly to coordinate your private hall walk-through and menu discussion.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSuccess(false);
                    setFullName("");
                    setPhone("");
                    setEmail("");
                    setMessage("");
                  }}
                  className="mt-3 px-6 py-2.5 rounded-xl bg-primary text-on-primary font-label-button text-xs uppercase tracking-wider"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                {error && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2.5">
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Honeypot for bots */}
                <input
                  type="checkbox"
                  name="botcheck"
                  checked={Boolean(honeypot)}
                  onChange={(e) => setHoneypot(e.target.checked ? "on" : "")}
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-compact text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Vikramaditya Singh"
                      className="px-4 py-2.5 rounded-xl bg-surface-ivory border border-stone-200/80 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white text-on-surface font-body-md text-sm placeholder:text-stone-400 transition-all"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-compact text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                      Mobile Number *
                    </label>
                    <div className="flex items-center rounded-xl bg-surface-ivory border border-stone-200/80 focus-within:ring-2 focus-within:ring-primary/40 focus-within:bg-white overflow-hidden transition-all">
                      <span className="px-3 py-2.5 font-body-md text-sm text-secondary font-semibold bg-surface-champagne border-r border-stone-200">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                        placeholder="70542 50911"
                        className="w-full px-3 py-2.5 bg-transparent border-0 focus:outline-none text-on-surface font-body-md text-sm placeholder:text-stone-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email Address */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-compact text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="px-4 py-2.5 rounded-xl bg-surface-ivory border border-stone-200/80 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white text-on-surface font-body-md text-sm placeholder:text-stone-400 transition-all"
                    />
                  </div>

                  {/* Event Type */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-compact text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                      Event Type *
                    </label>
                    <select
                      required
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="px-4 py-2.5 rounded-xl bg-surface-ivory border border-stone-200/80 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white text-on-surface font-body-md text-sm cursor-pointer"
                    >
                      <option value="">Select Occasion</option>
                      <option value="Wedding & Reception">Wedding &amp; Grand Reception</option>
                      <option value="Engagement & Roka">Engagement &amp; Ring Ceremony</option>
                      <option value="Sangeet & Mehendi">Sangeet &amp; Mehendi Soiree</option>
                      <option value="Corporate Summit">Corporate Summit / Annual Conclave</option>
                      <option value="Milestone Birthday / Gala">Milestone Birthday / Gala</option>
                      <option value="Anniversary Celebration">Anniversary Celebration</option>
                      <option value="Social Gathering">Social &amp; Family Gathering</option>
                      <option value="Other">Other Bespoke Event</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-compact text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                      Preferred Event Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      min={minDate}
                      className="px-4 py-2.5 rounded-xl bg-surface-ivory border border-stone-200/80 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white text-on-surface font-body-md text-sm cursor-pointer"
                    />
                  </div>

                  {/* Guest Count */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-compact text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                      Expected Guest Count *
                    </label>
                    <select
                      required
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="px-4 py-2.5 rounded-xl bg-surface-ivory border border-stone-200/80 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white text-on-surface font-body-md text-sm cursor-pointer"
                    >
                      <option value="">Select Guest Range</option>
                      <option value="50 - 100 Guests">50 – 100 Guests (Intimate)</option>
                      <option value="100 - 250 Guests">100 – 250 Guests (Classic)</option>
                      <option value="250 - 500 Guests">250 – 500 Guests (Grand)</option>
                      <option value="500 - 900 Guests">500 – 900+ Guests (Royal Buyout)</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Venue Selection */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-compact text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                    Preferred Venue Space
                  </label>
                  <select
                    value={venuePreference}
                    onChange={(e) => setVenuePreference(e.target.value)}
                    className="px-4 py-2.5 rounded-xl bg-surface-ivory border border-stone-200/80 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white text-on-surface font-body-md text-sm cursor-pointer"
                  >
                    <option value="First Floor Grand Astor (5,250 sq ft)">
                      First Floor Grand Astor Ballroom (5,250 sq. ft.)
                    </option>
                    <option value="Second Floor Crystal Hall (5,250 sq ft)">
                      Second Floor Crystal Hall (5,250 sq. ft.)
                    </option>
                    <option value="Combined Dual Floor Buyout (10,500 sq ft)">
                      Combined Dual Floor Buyout (10,500 sq. ft.)
                    </option>
                    <option value="Undecided / Needs Hospitality Recommendation">
                      Undecided / Needs Hospitality Guidance
                    </option>
                  </select>
                </div>

                {/* Bespoke Requirements Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-compact text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                    Bespoke Requirements / Catering Preferences
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about specific decor themes, culinary requirements, stage dimensions, or suite accommodation needs..."
                    className="px-4 py-2.5 rounded-xl bg-surface-ivory border border-stone-200/80 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white text-on-surface font-body-md text-sm placeholder:text-stone-400 transition-all resize-none"
                  />
                </div>

                {/* Submission Row */}
                <div className="pt-2 flex flex-col gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="font-label-button text-label-button uppercase px-8 py-4 bg-primary text-on-primary hover:bg-gold-deep rounded-xl transition-all tracking-widest flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed font-semibold"
                  >
                    <span>{loading ? "Transmitting Event Inquiry..." : "Send Event Enquiry"}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="font-label-compact text-[11px] text-secondary text-center">
                    Your event inquiry is handled with strict confidentiality by our senior hospitality planners. A response will be provided within 2-4 business hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
