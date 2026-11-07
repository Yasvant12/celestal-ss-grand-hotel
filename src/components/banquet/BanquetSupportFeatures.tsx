"use client";

import { motion } from "framer-motion";
import {
  Palette,
  UtensilsCrossed,
  Volume2,
  Sparkles,
  Car,
  Headphones,
} from "lucide-react";

const FEATURES = [
  {
    icon: Palette,
    title: "Customizable Scenography",
    desc: "Tailored thematic stage designs, custom ceremonial rigs, luxury drapery, and contemporary lighting systems tailored to your signature color aesthetic.",
  },
  {
    icon: UtensilsCrossed,
    title: "In-House Gourmet Catering",
    desc: "Multi-cuisine master menus spanning authentic North Indian, Pan-Asian, Oriental, and Continental delicacies with interactive live chef counters and private pre-tastings.",
  },
  {
    icon: Volume2,
    title: "Advanced Audio-Visual Support",
    desc: "Integrated line-array audio reinforcement, HD laser projection, digital podiums, and dynamic stage fixtures for flawless keynotes and musical evenings.",
  },
  {
    icon: Sparkles,
    title: "Dedicated Bridal & Host Suites",
    desc: "Private climate-controlled en-suite green rooms with vanity mirrors, secure wardrobes, lounge seating, and express butler refreshment service.",
  },
  {
    icon: Car,
    title: "Valet Parking & Portico",
    desc: "Expansive on-site vehicle capacity with trained valet marshals and a covered weather-protected grand arrival portico ensuring effortless guest arrivals.",
  },
  {
    icon: Headphones,
    title: "Personal Event Concierge",
    desc: "A single dedicated hospitality director from the initial floor-plan walk-through to vendor coordination and closing night send-off.",
  },
];

export function BanquetSupportFeatures() {
  return (
    <section className="w-full bg-surface-container-lowest py-16 sm:py-20 lg:py-24">
      <div className="site-container flex flex-col gap-12 sm:gap-14">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-2">
          <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-[0.24em] text-primary">
            Unrivaled Amenities
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-on-surface">
            Comprehensive Support for Effortless Celebrations
          </h2>
          <div className="w-12 h-[2px] bg-primary-fixed-dim mt-1" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-surface-ivory/70 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-4 group border border-surface-container-highest/60 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-champagne flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-sm text-lg sm:text-headline-sm text-on-surface font-semibold">
                    {feature.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

