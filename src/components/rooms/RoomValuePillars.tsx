"use client";

import { motion, useReducedMotion } from "framer-motion";

export function RoomValuePillars() {
  const shouldReduceMotion = useReducedMotion();

  const pillars = [
    {
      num: "01",
      title: "Thoughtfully Designed Interiors",
      desc: "Every chamber embodies contemporary geometric architecture, acoustic tranquility, and calming champagne palettes designed to soothe and rejuvenate the senses.",
      tags: ["Acoustic Isolation", "Refined Aesthetics"],
    },
    {
      num: "02",
      title: "Prime Strategic Connectivity",
      desc: "Located at Plot 5, Misripur Guramba, Kursi Road, Lucknow, with convenient access to the city.",
      tags: ["15 Mins Airport", "Express Arterials"],
    },
    {
      num: "03",
      title: "Attentive 24-Hour Hospitality",
      desc: "A commitment to unhurried, discreet service. Round-the-clock front desk reception, personal concierge arrangements, and bespoke event coordination for group delegations.",
      tags: ["24/7 Front Desk", "Direct Concierge"],
    },
  ];

  return (
    <section className="w-full bg-surface py-16 sm:py-20 md:py-24">
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-eyebrow-luxury text-eyebrow-luxury text-primary uppercase tracking-widest font-bold">
            Distinction &amp; Assurance
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface font-medium tracking-tight mt-1">
            Why Discerning Guests Choose Celestal SS Grand
          </h2>
        </div>

        {/* 3 Sophisticated Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-surface-container-low p-8 lg:p-10 rounded-2xl flex flex-col justify-between shadow-xs border border-stone-200/70 hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4">
                <span className="font-display-hero text-4xl sm:text-5xl text-gold-metallic opacity-40 font-serif font-bold">
                  {pillar.num}
                </span>
                <h3 className="font-headline-sm text-xl lg:text-2xl text-on-surface font-semibold">
                  {pillar.title}
                </h3>
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200/80 flex items-center gap-2 font-label-compact text-xs text-primary font-bold uppercase tracking-wider">
                <span>{pillar.tags[0]}</span>
                <span>•</span>
                <span>{pillar.tags[1]}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
