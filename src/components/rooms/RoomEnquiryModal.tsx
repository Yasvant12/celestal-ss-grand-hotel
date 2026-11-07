"use client";

import { useState, useEffect } from "react";
import { X, Calendar, Lock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export interface RoomEnquiryModalProps {
  isOpen: boolean;
  prefilledSuiteName: string;
  onClose: () => void;
}

export function RoomEnquiryModal({
  isOpen,
  prefilledSuiteName,
  onClose,
}: RoomEnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    guestsCount: "1 Room • 1–2 Guests",
    roomRequirements: prefilledSuiteName || "Executive Club Suite",
    message: "",
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (prefilledSuiteName) {
      setFormData((prev) => ({ ...prev, roomRequirements: prefilledSuiteName }));
    }
  }, [prefilledSuiteName]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      setSubmitStatus("error");
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "room",
          name: formData.name.trim(),
          phone: phoneDigits,
          email: formData.email.trim() || "guest@celestalssgrand.com",
          checkInDate: formData.checkInDate,
          checkOutDate: formData.checkOutDate || formData.checkInDate,
          guestsCount: formData.guestsCount,
          roomRequirements: formData.roomRequirements,
          message: formData.message.trim(),
          honeypot: formData.honeypot,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setTimeout(() => {
          onClose();
          setSubmitStatus("idle");
          setFormData({
            name: "",
            phone: "",
            email: "",
            checkInDate: "",
            checkOutDate: "",
            guestsCount: "1 Room • 1–2 Guests",
            roomRequirements: prefilledSuiteName || "Executive Club Suite",
            message: "",
            honeypot: "",
          });
        }, 3000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.message || "Failed to submit enquiry. Please call our concierge desk directly.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Connection issue. Please call our concierge directly or message via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[10000] bg-noir-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-surface-container-lowest rounded-2xl max-w-xl w-full p-6 sm:p-8 lg:p-10 shadow-2xl relative flex flex-col gap-5 max-h-[92vh] overflow-y-auto border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-500 hover:text-stone-900 p-1.5 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
          title="Close (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col gap-1 pr-6">
          <span className="font-eyebrow-luxury text-eyebrow-luxury text-primary uppercase tracking-widest font-bold">
            Celestal SS Grand Concierge
          </span>
          <h3 className="font-headline-sm text-2xl text-on-surface font-serif font-bold">
            Room &amp; Suite Reservation Enquiry
          </h3>
          <p className="font-body-sm text-xs sm:text-sm text-stone-600 leading-relaxed">
            Complete the details below to receive availability, seasonal quotes, and bespoke accommodation proposals directly from our front desk team.
          </p>
        </div>

        {submitStatus === "success" ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex flex-col items-center text-center gap-3 animate-in fade-in">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            <h4 className="font-headline-sm text-lg font-bold">Stay Enquiry Received</h4>
            <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
              Thank you! Your reservation enquiry for <strong>{formData.roomRequirements}</strong> has been logged. Our concierge desk will contact you within 2 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Target Room Category */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="enquiry-roomRequirements"
                className="font-label-compact text-xs text-on-surface uppercase tracking-wider font-semibold"
              >
                Selected Accommodation
              </label>
              <input
                id="enquiry-roomRequirements"
                name="roomRequirements"
                type="text"
                readOnly
                value={formData.roomRequirements}
                className="w-full px-4 py-2.5 bg-surface-champagne text-on-surface font-body-sm text-sm rounded-xl outline-none border border-stone-200 font-semibold cursor-default select-none"
              />
            </div>

            {/* Guest Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="enquiry-name"
                  className="font-label-compact text-xs text-on-surface uppercase tracking-wider font-semibold"
                >
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  id="enquiry-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Vikramaditya Singhania"
                  className="w-full px-4 py-2.5 bg-surface-container-low focus:bg-white text-on-surface font-body-sm text-sm rounded-xl outline-none border border-stone-200 focus:ring-2 focus:ring-[#9a7126] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="enquiry-phone"
                  className="font-label-compact text-xs text-on-surface uppercase tracking-wider font-semibold"
                >
                  Mobile Number <span className="text-primary">*</span>
                </label>
                <div className="relative flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl bg-surface-container-high font-label-compact text-xs text-on-surface font-semibold select-none border-y border-l border-stone-200">
                    +91
                  </span>
                  <input
                    id="enquiry-phone"
                    name="phone"
                    type="tel"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="70542 50911"
                    className="w-full px-4 py-2.5 bg-surface-container-low focus:bg-white text-on-surface font-body-sm text-sm rounded-r-xl outline-none border border-stone-200 focus:ring-2 focus:ring-[#9a7126] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="enquiry-checkInDate"
                  className="font-label-compact text-xs text-on-surface uppercase tracking-wider font-semibold"
                >
                  Check-In Date <span className="text-primary">*</span>
                </label>
                <input
                  id="enquiry-checkInDate"
                  name="checkInDate"
                  type="date"
                  required
                  value={formData.checkInDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-surface-container-low focus:bg-white text-on-surface font-body-sm text-sm rounded-xl outline-none border border-stone-200 focus:ring-2 focus:ring-[#9a7126] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="enquiry-guestsCount"
                  className="font-label-compact text-xs text-on-surface uppercase tracking-wider font-semibold"
                >
                  Number of Guests / Rooms
                </label>
                <select
                  id="enquiry-guestsCount"
                  name="guestsCount"
                  value={formData.guestsCount}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-surface-container-low focus:bg-white text-on-surface font-body-sm text-sm rounded-xl outline-none border border-stone-200 focus:ring-2 focus:ring-[#9a7126] transition-all cursor-pointer"
                >
                  <option value="1 Room • 1–2 Guests">1 Room • 1–2 Guests</option>
                  <option value="2 Rooms • Up to 4 Guests">2 Rooms • Up to 4 Guests</option>
                  <option value="3+ Rooms • Corporate Delegation">
                    3+ Rooms • Corporate Delegation
                  </option>
                  <option value="Wedding Entourage Block (10+ Rooms)">
                    Wedding Entourage Block (10+ Rooms)
                  </option>
                </select>
              </div>
            </div>

            {/* Special Requests / Notes */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="enquiry-message"
                className="font-label-compact text-xs text-on-surface uppercase tracking-wider font-semibold"
              >
                Special Requests / Occasion Notes
              </label>
              <textarea
                id="enquiry-message"
                name="message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                placeholder="Early check-in request, airport chauffeur requirement, wedding celebration assistance..."
                className="w-full px-4 py-2.5 bg-surface-container-low focus:bg-white text-on-surface font-body-sm text-sm rounded-xl outline-none border border-stone-200 focus:ring-2 focus:ring-[#9a7126] transition-all resize-none"
              />
            </div>

            {/* Honeypot field */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {submitStatus === "error" && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-primary hover:bg-gold-deep text-on-primary font-label-button text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Submit Reservation Enquiry</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-stone-500 font-body-sm text-[11px] pt-1">
              <Lock className="w-3 h-3 text-gold-deep" />
              <span>Strictly confidential. No advance online payment required.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

