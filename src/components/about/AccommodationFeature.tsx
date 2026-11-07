"use client";

import { motion } from "framer-motion";
import { Wifi, Check, ArrowUpRight } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

export function AccommodationFeature() {
  const roomImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDU7ijx_pJTL4NAyh13cVdD4UlLQam5uKdODTal8aYiVqV9mcFuzF2gbu1cwygqUwdScBk0Uzu-T0GFRUTTcC8dNdLahjhF6HsVm8TuhGUv0yMr4IkCZpOPfYZInhTF0ZeYJwQyLNF8xDS0id2mEc_3eEGD20ClimmZ2rQGha0A8xRp8ypJT1Z7eBPUqdrlHez-836I9F6ZKGvkMTP75btilNSwrZ9p-F5rRinPgfI";

  const roomHighlights = [
    "Bespoke Climate Control",
    "24/7 Dedicated Room Service",
    "High-Speed Connectivity",
    "Complimentary Breakfast Spread",
  ];

  return (
    <section className="w-full py-24 md:py-32 px-6 lg:px-12 bg-surface-container-low" id="rooms-section">
      <div className="site-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Image with floating badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl bg-surface-container">
            <img
              src={roomImage}
              alt="Luxury boutique Suite at Celestal SS Grand Hotel Lucknow"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Pill Card */}
          <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-surface-container-lowest shadow-xl hidden md:flex items-center gap-4 max-w-xs border border-surface-container-highest/60">
            <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
              <Wifi className="w-6 h-6" />
            </div>
            <div>
              <span className="font-eyebrow-luxury text-eyebrow-luxury text-primary uppercase tracking-widest block font-bold text-[10px]">
                Complimentary
              </span>
              <span className="font-headline-sm text-headline-sm text-noir-charcoal text-sm font-semibold">
                High-Speed Wi-Fi &amp; 24/7 Room Service
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col items-start lg:pl-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-primary tracking-[0.25em]">
              Accommodations
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-noir-charcoal tracking-tight mb-6">
            Sanctuary of Refinement &amp; Rest
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed mb-6">
            Every room and suite at Celestal SS Grand Hotel is crafted as a peaceful retreat from the vibrant tempo of Lucknow. Impeccably clean, thoughtfully maintained, and tailored to provide restful nights for wedding guests, business leaders, and visiting families.
          </p>

          <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed mb-8">
            Featuring bespoke climate control, sound-insulated architectural finishes, Egyptian cotton bedsheets, premium coffee trays, and instantaneous direct-dial concierge support.
          </p>

          {/* Feature List */}
          <div className="w-full grid grid-cols-2 gap-4 mb-10">
            {roomHighlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="font-body-sm text-body-sm text-noir-charcoal font-medium">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          <a
            href={`tel:${HOTEL_INFO.phones.primary}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-on-primary font-label-button text-label-button uppercase tracking-wider shadow-md hover:bg-gold-deep transition-all"
          >
            <span>View Rooms &amp; Suites</span>
            <span className="material-symbols-outlined text-[16px]">north_east</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

