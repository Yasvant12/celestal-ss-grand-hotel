"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

export function BanquetIntroMetrics() {
  return (
    <section className="w-full bg-surface-ivory py-16 sm:py-20 lg:py-24 border-b border-surface-container-highest/60">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Editorial Left Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-4 sm:gap-5"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-[0.24em] text-primary">
                Timeless Architecture &amp; Bespoke Hosting
              </span>
            </div>

            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-on-surface tracking-tight">
              The Perfect Space for <span className="italic font-normal">Every Occasion</span>
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Whether you are planning a grand wedding celebration, an intimate ring ceremony, or an executive corporate summit, discover a welcoming setting marked by attentive hospitality and precise architectural engineering.
            </p>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              With expansive column-free proportions, specialized acoustic absorption, customizable illumination arrays, and dedicated culinary staging areas, Celestal SS Grand Hotel turns visionary hosts into effortless celebrants.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#enquiry-section"
                className="font-label-button text-label-button uppercase px-6 py-3.5 bg-primary text-on-primary hover:bg-gold-deep rounded-xl transition-all tracking-widest inline-flex items-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Schedule Walk-Through</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${HOTEL_INFO.phones.primary}`}
                className="font-label-button text-label-button uppercase text-primary hover:text-gold-deep tracking-wider flex items-center gap-2 font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>{HOTEL_INFO.phones.primary}</span>
              </a>
            </div>
          </motion.div>

          {/* Metric Cards Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            <div className="bg-surface-container-lowest p-6 sm:p-7 rounded-2xl shadow-sm border border-surface-container-highest/60 flex flex-col gap-1.5 transition-transform hover:-translate-y-1 duration-300">
              <span className="font-headline-lg text-3xl sm:text-4xl text-primary tracking-tight font-semibold">
                10,500<span className="text-xl font-normal text-gold-metallic">+</span>
              </span>
              <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-on-surface tracking-widest font-bold">
                Total Event Sq. Ft.
              </span>
              <p className="font-body-sm text-body-sm text-secondary pt-1 leading-relaxed">
                Two full dedicated floor plates engineered purely for grand hospitality.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 sm:p-7 rounded-2xl shadow-sm border border-surface-container-highest/60 flex flex-col gap-1.5 transition-transform hover:-translate-y-1 duration-300">
              <span className="font-headline-lg text-3xl sm:text-4xl text-primary tracking-tight font-semibold">
                04
              </span>
              <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-on-surface tracking-widest font-bold">
                Banquet Halls
              </span>
              <p className="font-body-sm text-body-sm text-secondary pt-1 leading-relaxed">
                Four banquet halls for weddings, celebrations and gatherings.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 sm:p-7 rounded-2xl shadow-sm border border-surface-container-highest/60 flex flex-col gap-1.5 transition-transform hover:-translate-y-1 duration-300">
              <span className="font-headline-lg text-3xl sm:text-4xl text-primary tracking-tight font-semibold">
                900<span className="text-xl font-normal text-gold-metallic"> Pax</span>
              </span>
              <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-on-surface tracking-widest font-bold">
                Combined Floating Capacity
              </span>
              <p className="font-body-sm text-body-sm text-secondary pt-1 leading-relaxed">
                Comfortably hosts majestic gala receptions and large wedding gatherings.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 sm:p-7 rounded-2xl shadow-sm border border-surface-container-highest/60 flex flex-col gap-1.5 transition-transform hover:-translate-y-1 duration-300">
              <span className="font-headline-lg text-3xl sm:text-4xl text-primary tracking-tight font-semibold">
                100%
              </span>
              <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-on-surface tracking-widest font-bold">
                Pillarless Freedom
              </span>
              <p className="font-body-sm text-body-sm text-secondary pt-1 leading-relaxed">
                Unobstructed sightlines from every table toward stages and podiums.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
