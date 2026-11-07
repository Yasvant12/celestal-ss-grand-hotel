"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

export function ContactCTASection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full bg-noir-charcoal text-surface-container-lowest py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Subtle architectural gold decorative halo */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-96 h-96 bg-gold-metallic/15 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="bg-surface-container-lowest/5 rounded-2xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10"
        >
          {/* Narrative & Eyebrow */}
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-surface-container-lowest/10 rounded-full mb-1 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="font-eyebrow-luxury text-eyebrow-luxury tracking-widest text-gold-light uppercase">
                Instant Concierge Access
              </span>
            </div>

            <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-surface-container-lowest tracking-tight font-medium">
              Need Assistance? We’re Just a Message Away.
            </h2>
            <p className="font-body-md text-sm sm:text-base text-surface-variant/80 leading-relaxed">
              Connect immediately with our duty manager for room reservations, dining reservations, grand banquet walk-throughs, and custom requests.
            </p>
          </div>

          {/* 3 Interactive CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto shrink-0">
            {/* Call Now */}
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-container-lowest text-stone-900 hover:bg-surface-champagne font-label-button text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all group"
              href={`tel:${HOTEL_INFO.phones.primary}`}
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Call Now</span>
            </a>

            {/* WhatsApp Us */}
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white hover:opacity-90 font-label-button text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all"
              href={`${HOTEL_INFO.whatsappUrl}&text=Hello%20Celestal%20SS%20Grand%20Hotel%2C%20I%20would%20like%20to%20connect%20with%20Concierge.`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp Us</span>
            </a>

            {/* Send an Enquiry */}
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-on-primary hover:bg-gold-deep font-label-button text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all"
              href="#enquiry-form"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Send an Enquiry</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

