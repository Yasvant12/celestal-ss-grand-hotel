"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HERO_BACKGROUND_IMAGE, HOTEL_INFO } from "@/lib/constants";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const heroImageUrl = HERO_BACKGROUND_IMAGE;

  return (
    <section className="relative w-full overflow-hidden bg-noir-charcoal text-surface-ivory">
      {/* Hero Background Image with Subtle Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.08 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity"
        style={{ backgroundImage: `url('${heroImageUrl}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-noir-charcoal via-noir-charcoal/60 to-transparent" />
      <div className="absolute inset-0 bg-radial from-transparent via-noir-charcoal/40 to-noir-charcoal/90" />

      <div className="relative site-container pt-space-3xl pb-space-3xl flex flex-col justify-between min-h-[640px]">
        {/* Top Eyebrow Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center gap-space-md pt-space-lg"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-ivory/10 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse" />
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-gold-light">
              Kursi Road, Lucknow
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-ivory/10 backdrop-blur-md shadow-sm">
            <span
              className="material-symbols-outlined text-[15px] text-gold-light"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              workspace_premium
            </span>
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-surface-champagne">
              60 Rooms • 4 Banquet Halls • 1 Lawn
            </span>
          </div>
        </motion.div>

        {/* Hero Main Content */}
        <div className="max-w-4xl mt-space-xl flex flex-col gap-space-md">
          <motion.span
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-primary-fixed tracking-[0.25em]"
          >
            {HOTEL_INFO.tagline}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display-hero text-display-hero-mobile md:text-display-hero text-surface-ivory tracking-tight drop-shadow-md"
          >
            Elevate Your Celebrations with Luxury &amp; Elegance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-body-lg text-body-md md:text-body-lg text-surface-container-highest max-w-2xl leading-relaxed"
          >
            {HOTEL_INFO.subheading} {HOTEL_INFO.shortAddress}
          </motion.p>

          {/* CTA Action Group */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-space-md pt-space-md"
          >
            <a
              className="inline-flex items-center justify-center gap-space-xs px-7 py-4 rounded-xl bg-primary text-on-primary font-label-button text-label-button uppercase tracking-wider hover:bg-gold-deep shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
              href="#venues-section"
            >
              <span>Explore Venues &amp; Rooms</span>
              <span className="material-symbols-outlined text-[18px]">south_east</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-space-xs px-6 py-4 rounded-xl bg-surface-ivory/15 backdrop-blur-md text-surface-ivory hover:bg-surface-ivory/25 font-label-button text-label-button uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
              href={`tel:${HOTEL_INFO.phones.primary}`}
            >
              <span className="material-symbols-outlined text-[22px]">call</span>
              <span>Call {HOTEL_INFO.phones.primary}</span>
            </a>
          </motion.div>
        </div>

        {/* Quick Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-space-md pt-space-2xl mt-space-lg border-t border-surface-ivory/10"
        >
          <div className="flex items-center gap-space-sm py-2">
            <span className="material-symbols-outlined text-primary-fixed text-[28px]">domain</span>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-surface-ivory font-semibold">
                {HOTEL_INFO.stats.lawns}
              </span>
              <span className="font-label-compact text-label-compact text-surface-container-highest uppercase">
                Celebration Lawn
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-sm py-2">
            <span className="material-symbols-outlined text-primary-fixed text-[28px]">celebration</span>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-surface-ivory font-semibold">
                {HOTEL_INFO.stats.banquetHalls}
              </span>
              <span className="font-label-compact text-label-compact text-surface-container-highest uppercase">
                Banquet Halls
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-sm py-2">
            <span className="material-symbols-outlined text-primary-fixed text-[28px]">bed</span>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-surface-ivory font-semibold">
                {HOTEL_INFO.stats.guestRooms}
              </span>
              <span className="font-label-compact text-label-compact text-surface-container-highest uppercase">
                Guest Rooms
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-sm py-2">
            <span className="material-symbols-outlined text-primary-fixed text-[28px]">local_police</span>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-surface-ivory font-semibold">
                {HOTEL_INFO.stats.largestHall}
              </span>
              <span className="font-label-compact text-label-compact text-surface-container-highest uppercase">
                Largest Hall Capacity
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
