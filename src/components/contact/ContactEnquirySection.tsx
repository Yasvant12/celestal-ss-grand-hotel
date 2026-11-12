"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Clock,
  Zap,
  MessageCircle,
  ChevronRight,
  Lock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";
import { submitWeb3FormsEnquiry } from "@/lib/web3forms";

export function ContactEnquirySection() {
  const shouldReduceMotion = useReducedMotion();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "General Enquiry",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      await submitWeb3FormsEnquiry({
        category: formData.enquiryType,
        sourcePage: "Contact Us",
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        botcheck: formData.honeypot,
        fields: {
          "Enquiry Type": formData.enquiryType,
          Subject: formData.subject,
          Message: formData.message,
        },
      });
      setSubmitStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        enquiryType: "General Enquiry",
        subject: "",
        message: "",
        honeypot: "",
      });
    } catch (error: unknown) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We couldn't send your enquiry. Please try again or reach out on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-surface" id="enquiry-form">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ================= LEFT COLUMN: Executive Assistance ================= */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8"
          >
            <div className="space-y-2">
              <span className="font-eyebrow-luxury text-eyebrow-luxury text-gold-deep tracking-widest uppercase">
                Executive Assistance
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight font-medium">
                Direct Guest Assistance
              </h2>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant pt-1 leading-relaxed">
                Whether orchestrating an international delegate summit, an elite wedding banquet, or an
                intimate getaway, our hospitality officers ensure immediate bespoke counsel.
              </p>
            </div>

            {/* Service Metrics & Operating Hours */}
            <div className="bg-surface-champagne p-5 sm:p-6 rounded-2xl shadow-sm border border-[#E8D3A2]/50 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-label-compact text-xs uppercase text-stone-600 font-semibold tracking-wider block">
                    Service Schedules
                  </span>
                  <p className="font-body-md text-sm sm:text-base text-on-surface font-bold">
                    24/7 Front Desk &amp; Concierge
                  </p>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                    Banquet &amp; Event Planning: 09:00 AM – 09:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-stone-200/60">
                <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-label-compact text-xs uppercase text-stone-600 font-semibold tracking-wider block">
                    Commitment to Agility
                  </span>
                  <p className="font-body-md text-sm sm:text-base text-on-surface font-bold">
                    Average Enquiry Response Time
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="px-2.5 py-0.5 bg-primary/10 text-primary font-bold text-xs rounded-full">
                      Under 30 Minutes
                    </span>
                    <span className="font-body-sm text-xs text-on-surface-variant">
                      during desk hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Chat Badge */}
            <a
              className="flex items-center justify-between p-4 sm:p-5 bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-all group border border-stone-200/90 hover:border-[#25D366]/50"
              href={`${HOTEL_INFO.whatsappUrl}?text=Hello%20Celestal%20SS%20Grand%20Hotel%2C%20I%20would%20like%20to%20make%20an%20enquiry.`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-eyebrow-luxury text-[10px] text-[#128C7E] uppercase tracking-widest font-bold block">
                    Instant Messaging
                  </span>
                  <p className="font-body-md text-sm sm:text-base text-on-surface font-bold">
                    Chat on WhatsApp Concierge
                  </p>
                  <p className="font-body-sm text-xs text-on-surface-variant">{HOTEL_INFO.phones.primary}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Curated Visual Previews Mosaic */}
            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="relative rounded-xl overflow-hidden group shadow-md aspect-video sm:aspect-4/3">
                <Image
                  src="/images/hotel-front-entrance-foyer.jpg"
                  alt="Celestal SS Grand Hotel Grand Lobby Arrival"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-charcoal/85 via-transparent to-transparent flex items-end p-3">
                  <span className="font-label-compact text-xs text-white font-medium drop-shadow-sm">
                    Grand Lobby Arrival
                  </span>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden group shadow-md aspect-video sm:aspect-4/3">
                <Image
                  src="/images/hotel-banquet-ballroom-02.jpg"
                  alt="Celestal SS Grand Hotel grand banquet hall"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-charcoal/85 via-transparent to-transparent flex items-end p-3">
                  <span className="font-label-compact text-xs text-white font-medium drop-shadow-sm">
                    Grand Banquet Hall
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: Luxury Inquiry Form ================= */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl border border-stone-200/90"
          >
            <div className="mb-6 sm:mb-8">
              <span className="font-eyebrow-luxury text-eyebrow-luxury text-gold-deep tracking-widest uppercase block mb-1">
                Reservation &amp; Event Intake
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight font-medium mb-2">
                How Can We Help You?
              </h2>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Share your requirements with us and our management team will reach out with a curated proposal and availability details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Full Name & Mobile Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="font-label-compact text-xs uppercase tracking-wider text-on-surface font-semibold flex items-center gap-1"
                  >
                    <span>Full Name</span>
                    <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Vikramaditya Singhania"
                    className="w-full px-4 py-3 bg-surface-container-low text-on-surface rounded-xl font-body-md text-sm placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9a7126] transition-all border border-stone-200/80"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-phone"
                    className="font-label-compact text-xs uppercase tracking-wider text-on-surface font-semibold flex items-center gap-1"
                  >
                    <span>Mobile Number</span>
                    <span className="text-primary">*</span>
                  </label>
                  <div className="relative flex">
                    <span className="inline-flex items-center px-3.5 rounded-l-xl bg-surface-container-high font-label-compact text-xs text-on-surface font-semibold select-none border-y border-l border-stone-200/80">
                      +91
                    </span>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your 10-digit mobile number"
                      className="w-full px-4 py-3 bg-surface-container-low text-on-surface rounded-r-xl font-body-md text-sm placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9a7126] transition-all border border-stone-200/80"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email & Enquiry Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="font-label-compact text-xs uppercase tracking-wider text-on-surface font-semibold flex items-center gap-1"
                  >
                    <span>Email Address</span>
                    <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 bg-surface-container-low text-on-surface rounded-xl font-body-md text-sm placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9a7126] transition-all border border-stone-200/80"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-enquiryType"
                    className="font-label-compact text-xs uppercase tracking-wider text-on-surface font-semibold flex items-center gap-1"
                  >
                    <span>Enquiry Type</span>
                    <span className="text-primary">*</span>
                  </label>
                  <select
                    id="contact-enquiryType"
                    name="enquiryType"
                    required
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface-container-low text-on-surface rounded-xl font-body-md text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9a7126] transition-all border border-stone-200/80 cursor-pointer"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Room Reservation">
                      Room Reservation
                    </option>
                    <option value="Restaurant & Celestial Bistro Enquiry">
                      Restaurant &amp; Celestial Bistro Enquiry
                    </option>
                    <option value="Grand Ballroom Banquet Enquiry">
                      Grand Ballroom Banquet Enquiry
                    </option>
                    <option value="Curated Wedding Celebration">
                      Curated Wedding Celebration
                    </option>
                    <option value="Corporate Summit & Executive Conclave">
                      Corporate Summit &amp; Executive Conclave
                    </option>
                    <option value="Other Bespoke Requirement">Other Bespoke Requirement</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Subject */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="font-label-compact text-xs uppercase tracking-wider text-on-surface font-semibold flex items-center gap-1"
                >
                  <span>Subject</span>
                  <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Two-Night Stay in a Presidential Room / Ballroom Booking for 500 Guests"
                  className="w-full px-4 py-3 bg-surface-container-low text-on-surface rounded-xl font-body-md text-sm placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9a7126] transition-all border border-stone-200/80"
                />
              </div>

              {/* Row 4: Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="font-label-compact text-xs uppercase tracking-wider text-on-surface font-semibold flex items-center gap-1"
                >
                  <span>Message &amp; Particulars</span>
                  <span className="text-primary">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Kindly mention preferred dates, approximate guest count, catering preferences, or special accommodations requested..."
                  className="w-full px-4 py-3 bg-surface-container-low text-on-surface rounded-xl font-body-md text-sm placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9a7126] transition-all border border-stone-200/80 resize-y"
                />
              </div>

              {/* Honeypot hidden input for anti-spam */}
              <input
                type="checkbox"
                name="botcheck"
                checked={Boolean(formData.honeypot)}
                onChange={(event) =>
                  setFormData((previous) => ({
                    ...previous,
                    honeypot: event.target.checked ? "on" : "",
                  }))
                }
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Notice & Feedback */}
              <div className="pt-2 space-y-4">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <Lock className="w-4 h-4 text-gold-deep shrink-0" />
                  <p className="font-body-sm text-xs text-stone-500">
                    Your information is held in strict hotel confidence and will only be used to respond directly to your enquiry.
                  </p>
                </div>

                {submitStatus === "error" && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {submitStatus === "success" && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2.5 animate-in fade-in">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Thank you! Your enquiry has been received and routed directly to our Concierge Desk.</span>
                  </div>
                )}

                {/* Submit Action */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-primary text-on-primary hover:bg-gold-deep font-label-button text-xs font-bold tracking-widest uppercase rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
