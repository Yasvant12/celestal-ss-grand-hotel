"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, Info } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

export function RoomCTABanner() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full bg-surface-champagne py-14 sm:py-16 md:py-20">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="bg-noir-charcoal rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-white/10"
        >
          {/* Ambient Gold Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-gold-metallic/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-px bg-gold-light inline-block" />
                <span className="font-eyebrow-luxury text-eyebrow-luxury text-gold-light uppercase tracking-widest">
                  Direct Reservation Desk
                </span>
              </div>

              <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-surface-container-lowest font-medium tracking-tight">
                Find Your Perfect Stay
              </h2>

              <p className="font-body-lg text-sm sm:text-base md:text-lg text-stone-300 max-w-2xl leading-relaxed">
                Looking for an effortless stay, corporate booking, or wedding party accommodation? Connect directly with our reservation team for dates, bespoke tariffs, and group availability.
              </p>

              <div className="flex items-center gap-2 text-stone-400 font-label-compact text-xs pt-1">
                <Info className="w-4 h-4 text-gold-light shrink-0" />
                <span>Direct reservation assistance &amp; tailored tariff quotes; no advance online payment required.</span>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={`tel:${HOTEL_INFO.phones.primary}`}
                className="w-full py-3.5 px-6 bg-primary hover:bg-gold-deep text-on-primary font-label-button text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call to Enquire About Rooms</span>
              </a>

              <a
                className="w-full py-3 px-6 bg-white/10 hover:bg-white/20 text-surface-container-lowest font-label-button text-xs font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 border border-white/10"
                href={`tel:${HOTEL_INFO.phones.primary}`}
              >
                <Phone className="w-4 h-4 text-gold-light" />
                <span>Concierge: {HOTEL_INFO.phones.primary}</span>
              </a>

              <a
                className="w-full py-3 px-6 bg-white/10 hover:bg-[#25D366] hover:text-white text-surface-container-lowest font-label-button text-xs font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 border border-white/10"
                href={`${HOTEL_INFO.whatsappUrl}?text=Hello%20Celestal%20SS%20Grand%20Hotel%2C%20I%20would%20like%20to%20enquire%20about%20room%20availability.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>WhatsApp Reservations</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
