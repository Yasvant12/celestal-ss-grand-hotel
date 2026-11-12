"use client";

import { motion } from "framer-motion";
import { Calendar, Mail, MessageCircle } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

export function AboutCTA() {
  return (
    <section className="w-full py-20 md:py-24 px-6 lg:px-12 bg-noir-charcoal text-surface-ivory relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-noir-charcoal via-noir-charcoal/90 to-primary/20 pointer-events-none" />

      <div className="relative z-10 site-container flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start max-w-2xl text-left"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-metallic" />
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-gold-light tracking-[0.25em]">
              Personalised Assistance
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-surface-ivory tracking-tight mb-4">
            Let Us Make Your Next Stay or Celebration Special
          </h2>

          <p className="font-body-md text-body-md text-surface-champagne/80 font-light leading-relaxed">
            Whether you are planning a comfortable stay, an intimate family dining experience or a grand wedding celebration, our dedicated team is at your service 24 hours a day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0"
        >
          {/* Enquire Now Primary */}
          <a
            href={`tel:${HOTEL_INFO.phones.primary}`}
            className="relative group overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-on-primary font-label-button text-label-button uppercase tracking-wider shadow-xl hover:bg-gold-deep transition-all text-center font-bold"
          >
            <span>Enquire Now</span>
            <Calendar className="w-4 h-4" />
          </a>

          {/* Contact Us Secondary */}
          <a
            href={`mailto:${HOTEL_INFO.email}`}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-surface-ivory font-label-button text-label-button uppercase tracking-wider transition-all text-center font-semibold"
          >
            <span>Contact Us</span>
            <Mail className="w-4 h-4" />
          </a>

          {/* WhatsApp Us Pill */}
          <a
            href={HOTEL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-whatsapp-brand text-noir-charcoal font-label-button text-label-button uppercase tracking-wider shadow-lg hover:brightness-105 transition-all text-center font-bold"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

