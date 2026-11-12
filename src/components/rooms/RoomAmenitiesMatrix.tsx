"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Wind,
  Wifi,
  Tv,
  Bed,
  ShowerHead,
  Droplets,
  UtensilsCrossed,
  ShieldCheck,
} from "lucide-react";

export function RoomAmenitiesMatrix() {
  const shouldReduceMotion = useReducedMotion();

  const amenities = [
    {
      icon: Wind,
      title: "Central Air Conditioning",
      desc: "Whisper-quiet individual climate control sensors in every chamber with micro-filtration.",
    },
    {
      icon: Wifi,
      title: "High-Speed Fiber Wi-Fi",
      desc: "Complimentary ultra-reliable dual-band wireless connectivity across private and social wings.",
    },
    {
      icon: Tv,
      title: '55" Smart UHD Television',
      desc: "Integrated high-definition displays with casting capabilities and premier global satellite channels.",
    },
    {
      icon: Bed,
      title: "Orthopedic Sleep System",
      desc: "Custom posture-supporting orthopedic mattresses cloaked in 400-thread count Egyptian cotton.",
    },
    {
      icon: ShowerHead,
      title: "Private Marble Bathrooms",
      desc: "Polished architectural stone bathrooms equipped with pressurized rainforest showers and organic toiletries.",
    },
    {
      icon: Droplets,
      title: "24-Hour Hot & Cold Water",
      desc: "Constant pressurized water circulation guaranteed round-the-clock for effortless hydrotherapy.",
    },
    {
      icon: UtensilsCrossed,
      title: "24/7 Dedicated In-Room Dining",
      desc: "Bespoke chef service and midnight gourmet dining delivered promptly directly to your chamber.",
    },
    {
      icon: ShieldCheck,
      title: "Wardrobe & Digital Safe",
      desc: "Full-length integrated wardrobes, digital laptop safe, and professional steam pressing units.",
    },
  ];

  return (
    <section className="w-full bg-surface-ivory py-16 sm:py-20 md:py-24 relative border-y border-stone-200/60">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-2 mb-12 sm:mb-16">
          <span className="px-4 py-1.5 bg-surface-container-high rounded-full font-eyebrow-luxury text-eyebrow-luxury text-primary uppercase tracking-widest border border-stone-200">
            Uncompromising Refinement
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface font-medium tracking-tight mt-1">
            Curated In-Room Amenities &amp; Privileges
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
            Every chamber is outfitted with verified international-standard hospitality essentials for seamless comfort.
          </p>
        </div>

        {/* 8-Card Refined Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-surface-container-lowest p-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col gap-3.5 border border-stone-200/80 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-champagne flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface-container-lowest transition-colors duration-300 shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-headline-sm text-base sm:text-lg text-on-surface font-semibold group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
