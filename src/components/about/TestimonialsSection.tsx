"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const reviews = [
    {
      quote:
        "We hosted my daughter's wedding reception in The Grand Ballroom. The management took care of every single guest with remarkable warmth and attention to detail. The food was widely praised by all our guests.",
      initials: "RS",
      name: "Rajeshwar Srivastava",
      role: "Wedding Host • Lucknow",
    },
    {
      quote:
        "The rooms are spotlessly clean, quiet, and spacious. Having stayed across multiple hotels in Lucknow, I appreciated the comfort and personal attention from the front desk at Celestal SS Grand Hotel.",
      initials: "AK",
      name: "Amitava Kapoor",
      role: "Corporate Executive • New Delhi",
    },
    {
      quote:
        "Our 25th wedding anniversary celebration on the open lawn was nothing short of magical. Beautiful fairy lights, seamless seating arrangements, and the cuisine was genuine gourmet standard!",
      initials: "PM",
      name: "Dr. Pooja & Manish Misra",
      role: "Anniversary Hosts • Gomti Nagar",
    },
  ];

  return (
    <section className="w-full py-24 md:py-32 px-6 lg:px-12 bg-surface-champagne">
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
            Voices of Our Patrons
          </span>
          <span className="w-8 h-px bg-primary" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headline-lg text-headline-lg text-noir-charcoal tracking-tight max-w-2xl mb-4"
        >
          Experiences That Make Us Proud
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body-md text-body-md text-on-surface-variant font-light max-w-lg mb-16"
        >
          Genuine reflections from wedding hosts, visiting families, and business travelers who made Celestal SS Grand Hotel their chosen address in Lucknow.
        </motion.p>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 md:p-10 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between border border-surface-container-highest/40"
            >
              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-[#B8860B] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B8860B] text-[#B8860B]" />
                  ))}
                </div>

                <p className="font-title-editorial text-title-editorial text-noir-charcoal italic mb-6 leading-relaxed text-sm sm:text-base">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-surface-container">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center font-headline-sm text-headline-sm text-primary font-bold">
                  {rev.initials}
                </div>
                <div>
                  <span className="font-body-md text-body-md text-noir-charcoal font-semibold block leading-tight">
                    {rev.name}
                  </span>
                  <span className="font-label-compact text-label-compact text-on-surface-variant text-xs">
                    {rev.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
