"use client";

import { motion } from "framer-motion";
import { Handshake, Armchair, Sparkles } from "lucide-react";

export function HospitalityPhilosophy() {
  const pillars = [
    {
      pillar: "Pillar I",
      icon: Handshake,
      title: "Guest First",
      description:
        "Every guest deserves attentive service, comfort and a welcoming experience. We listen, anticipate individual needs, and respond with warmth.",
    },
    {
      pillar: "Pillar II",
      icon: Armchair,
      title: "Thoughtful Comfort",
      description:
        "We focus on the details that make a stay comfortable, convenient and enjoyable—from cloud-soft bedding to immaculate sound insulation.",
    },
    {
      pillar: "Pillar III",
      icon: Sparkles,
      title: "Memorable Experiences",
      description:
        "From dining to special celebrations, we aim to make every occasion meaningful, creating timeless moments for families and organizations alike.",
    },
  ];

  return (
    <section className="w-full py-24 md:py-28 px-6 lg:px-12 bg-surface-champagne">
      <div className="site-container flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-px bg-primary" />
          <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-primary tracking-[0.25em]">
            Our Hospitality Philosophy
          </span>
          <span className="w-8 h-px bg-primary" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headline-lg text-headline-lg text-noir-charcoal tracking-tight max-w-2xl mb-16"
        >
          Modern Hospitality, Guided by Care
        </motion.h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 md:p-10 rounded-2xl bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-surface-container-highest/40"
              >
                <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center mb-6 text-primary">
                  <Icon className="w-7 h-7" />
                </div>
                <span className="font-eyebrow-luxury text-eyebrow-luxury text-primary uppercase tracking-[0.18em] mb-2 block font-semibold">
                  {item.pillar}
                </span>
                <h3 className="font-headline-md text-headline-md text-noir-charcoal mb-4">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

