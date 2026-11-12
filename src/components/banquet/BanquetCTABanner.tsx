"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

export function BanquetCTABanner() {
  return (
    <section className="w-full bg-noir-charcoal text-on-primary py-20 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Ambient Gold Bloom */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 site-container text-center flex flex-col items-center gap-6">
        <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-[0.26em] text-primary-fixed-dim">
          Celestial SS Grand Hospitality
        </span>

        <h2 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-display-hero text-on-primary max-w-3xl leading-tight">
          Your Next Celebration <span className="italic font-normal text-primary-fixed-dim">Starts Here</span>
        </h2>

        <p className="font-body-lg text-base sm:text-lg text-secondary-fixed max-w-2xl leading-relaxed">
          Discover a space where every gathering becomes a lasting memory. Schedule an in-person walk-through with our banquet director today.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#enquiry-section"
            className="font-label-button text-label-button uppercase px-8 py-4 bg-primary text-on-primary hover:bg-gold-deep rounded-xl transition-all tracking-widest shadow-md hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 font-semibold"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Walk-Through</span>
          </a>

          <a
            href={`tel:${HOTEL_INFO.phones.primary}`}
            className="font-label-button text-label-button uppercase px-8 py-4 bg-surface-container/20 text-on-primary hover:bg-surface-container/30 rounded-xl transition-all tracking-widest inline-flex items-center gap-2 border border-white/10 font-semibold"
          >
            <Phone className="w-4 h-4 text-primary-fixed-dim" />
            <span>Call {HOTEL_INFO.phones.primary}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
