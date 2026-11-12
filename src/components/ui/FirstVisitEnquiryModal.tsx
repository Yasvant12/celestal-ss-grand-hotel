"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, X } from "lucide-react";
import { submitWeb3FormsEnquiry } from "@/lib/web3forms";

export function FirstVisitEnquiryModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guestsCount: "",
    enquiryType: "Room Booking",
    message: "",
    honeypot: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    const frame = window.requestAnimationFrame(() => setIsOpen(true));
    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }
    if (!isOpen && dialog.open) dialog.close();

    return () => {
      if (dialog.open) dialog.close();
    };
  }, [isOpen]);

  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const phone = formData.phone.replace(/\D/g, "");
    if (phone.length !== 10) {
      setSubmitStatus("error");
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      await submitWeb3FormsEnquiry({
        category: formData.enquiryType,
        sourcePage: "Home — First Visit Enquiry",
        name: formData.name,
        phone,
        email: formData.email,
        botcheck: formData.honeypot,
        fields: {
          "Enquiry Type": formData.enquiryType,
          "Number of Guests": formData.guestsCount,
          Message: formData.message,
        },
      });
      setSubmitStatus("success");
    } catch (error: unknown) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We couldn't connect to the enquiry service. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="first-visit-enquiry-title"
      aria-describedby="first-visit-enquiry-description"
      onClose={() => setIsOpen(false)}
      onCancel={(event) => {
        event.preventDefault();
        closeModal();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) closeModal();
      }}
      className="m-auto w-[calc(100%-1.5rem)] max-w-3xl max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-2xl border border-[#E8D3A2]/70 bg-[#FAF7F2] p-0 text-[#1c1c19] shadow-2xl backdrop:bg-noir-charcoal/70"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.22 }}
            className="relative p-5 sm:p-8 lg:p-10"
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close enquiry form"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-600 transition hover:border-[#B38728] hover:text-[#7a5508] sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 pr-12 sm:mb-8">
              <span className="font-eyebrow-luxury text-[10px] font-bold uppercase tracking-[0.24em] text-[#7a5508]">
                Celestial SS Grand Hotel
              </span>
              <h2
                id="first-visit-enquiry-title"
                className="mt-2 font-headline-lg text-2xl font-semibold tracking-tight text-[#1c1c19] sm:text-3xl"
              >
                Plan Your Stay or Celebration
              </h2>
              <p
                id="first-visit-enquiry-description"
                className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base"
              >
                Share a few details and our team will be in touch. You can close this form and browse the website at any time.
              </p>
            </div>

            {submitStatus === "success" ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center" role="status">
                <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-700" />
                <h3 className="mt-3 text-lg font-semibold text-emerald-950">Enquiry received</h3>
                <p className="mt-1 text-sm text-emerald-800">
                  Thank you. Our team will be in touch using the contact details you provided.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-5 rounded-lg bg-[#7a5508] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#654606]"
                >
                  Continue browsing
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="text-sm font-semibold text-stone-700">
                    Full Name
                    <input
                      name="name"
                      autoComplete="name"
                      required
                      minLength={2}
                      maxLength={100}
                      value={formData.name}
                      onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-3.5 py-3 font-normal outline-none transition focus:border-[#9a7126] focus:ring-2 focus:ring-[#9a7126]/20"
                    />
                  </label>
                  <label className="text-sm font-semibold text-stone-700">
                    Phone Number / WhatsApp
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      required
                      pattern="[0-9+() -]{10,18}"
                      title="Enter a valid 10-digit mobile number."
                      value={formData.phone}
                      onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-3.5 py-3 font-normal outline-none transition focus:border-[#9a7126] focus:ring-2 focus:ring-[#9a7126]/20"
                    />
                  </label>
                  <label className="text-sm font-semibold text-stone-700">
                    Email Address
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-3.5 py-3 font-normal outline-none transition focus:border-[#9a7126] focus:ring-2 focus:ring-[#9a7126]/20"
                    />
                  </label>
                  <label className="text-sm font-semibold text-stone-700">
                    Enquiry Type
                    <select
                      name="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={(event) => setFormData({ ...formData, enquiryType: event.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-3.5 py-3 font-normal outline-none transition focus:border-[#9a7126] focus:ring-2 focus:ring-[#9a7126]/20"
                    >
                      <option>Room Booking</option>
                      <option>Banquet</option>
                      <option>Wedding</option>
                      <option>Restaurant</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="text-sm font-semibold text-stone-700 sm:col-span-2">
                    Number of Guests
                    <select
                      name="guestsCount"
                      required
                      value={formData.guestsCount}
                      onChange={(event) => setFormData({ ...formData, guestsCount: event.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-3.5 py-3 font-normal outline-none transition focus:border-[#9a7126] focus:ring-2 focus:ring-[#9a7126]/20"
                    >
                      <option value="" disabled>Select guests</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3–5</option>
                      <option>6–10</option>
                      <option>11–20</option>
                      <option>More than 20</option>
                    </select>
                  </label>
                  <label className="text-sm font-semibold text-stone-700 sm:col-span-2">
                    Message <span className="font-normal text-stone-500">(optional)</span>
                    <textarea
                      name="message"
                      rows={3}
                      maxLength={2000}
                      value={formData.message}
                      onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                      className="mt-1.5 w-full resize-y rounded-lg border border-stone-300 bg-white px-3.5 py-3 font-normal outline-none transition focus:border-[#9a7126] focus:ring-2 focus:ring-[#9a7126]/20"
                    />
                  </label>
                </div>

                <input
                  name="botcheck"
                  type="checkbox"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                  checked={Boolean(formData.honeypot)}
                  onChange={(event) =>
                    setFormData((previous) => ({
                      ...previous,
                      honeypot: event.target.checked ? "on" : "",
                    }))
                  }
                  style={{ display: "none" }}
                />

                {submitStatus === "error" && (
                  <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                    {errorMessage}
                  </p>
                )}

                <div className="flex flex-col-reverse items-stretch justify-between gap-3 border-t border-stone-200 pt-5 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-lg px-5 py-3 text-sm font-semibold text-stone-600 transition hover:bg-stone-100 hover:text-stone-900"
                  >
                    Maybe Later
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7a5508] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#654606] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                    {isSubmitting ? "Sending..." : "Send Enquiry"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </dialog>
  );
}
