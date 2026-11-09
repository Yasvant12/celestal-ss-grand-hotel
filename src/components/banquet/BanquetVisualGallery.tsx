"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function BanquetVisualGallery() {
  return (
    <section className="w-full bg-surface-ivory py-16 sm:py-20 lg:py-24 border-y border-surface-container-highest/60">
      <div className="site-container flex flex-col gap-10 sm:gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-[0.24em] text-primary">
              Visual Inspiration
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-on-surface">
              Moments of Grandeur &amp; Artful Staging
            </h2>
          </div>

          <Link
            href="/contact"
            className="font-label-button text-label-button uppercase px-6 py-3 bg-surface-champagne text-on-surface hover:bg-primary hover:text-on-primary rounded-xl transition-all tracking-widest inline-flex items-center gap-2 shadow-sm border border-[#DEC384]/40"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Schedule Walk-Through</span>
          </Link>
        </div>

        {/* Asymmetrical Editorial Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* Feature 1: Main High Banner (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 h-[380px] sm:h-[440px] md:h-[500px] relative rounded-2xl overflow-hidden shadow-sm group"
          >
            <Image
              src="/images/hotel-banquet-ballroom-01.jpg"
              alt="Main Ballroom Staging at Celestal SS Grand Hotel"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-charcoal/85 via-noir-charcoal/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-primary-fixed-dim block mb-1">
                Main Ballroom Staging
              </span>
              <h4 className="font-headline-md text-2xl sm:text-3xl text-on-primary text-white">
                Architectural Scale &amp; Crystal Refinement
              </h4>
            </div>
          </motion.div>

          {/* Feature 2 & 3: Stacked Right (5 cols) */}
          <div className="md:col-span-5 grid grid-cols-1 gap-5 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-[235px] relative rounded-2xl overflow-hidden shadow-sm group"
            >
              <Image
                src="/images/hotel-banquet-ballroom-02.jpg"
                alt="Bespoke Tableware & Crystal"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-charcoal/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-primary-fixed-dim block mb-0.5">
                  Art of the Table
                </span>
                <p className="font-headline-sm text-xl text-on-primary text-white">
                  Bespoke Tableware &amp; Fine Linens
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[240px] relative rounded-2xl overflow-hidden shadow-sm group"
            >
              <Image
                src="/images/hotel-banquet-ballroom-03.jpg"
                alt="Master Gourmet Curation"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-charcoal/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-primary-fixed-dim block mb-0.5">
                  Live Stations
                </span>
                <p className="font-headline-sm text-xl text-on-primary text-white">
                  Master Gourmet Live Curation
                </p>
              </div>
            </motion.div>
          </div>

          {/* 3 Secondary Grid Banners Below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4 h-64 relative rounded-2xl overflow-hidden shadow-sm group"
          >
            <Image
              src="/images/hotel-banquet-ballroom-04.jpg"
              alt="Bespoke Floral Scenography"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-noir-charcoal/40 group-hover:bg-noir-charcoal/20 transition-colors" />
            <span className="absolute bottom-5 left-5 font-title-editorial text-lg text-white font-medium">
              Bespoke Floral Scenography
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 h-64 relative rounded-2xl overflow-hidden shadow-sm group"
          >
            <Image
              src="/images/hotel-banquet-ballroom-05.jpg"
              alt="Unforgettable Milestones"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-noir-charcoal/40 group-hover:bg-noir-charcoal/20 transition-colors" />
            <span className="absolute bottom-5 left-5 font-title-editorial text-lg text-white font-medium">
              Unforgettable Milestones
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-4 h-64 relative rounded-2xl overflow-hidden shadow-sm group"
          >
            <Image
              src="/images/hotel-banquet-ballroom-06.jpg"
              alt="Pre-Function Foyer Spaces"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-noir-charcoal/40 group-hover:bg-noir-charcoal/20 transition-colors" />
            <span className="absolute bottom-5 left-5 font-title-editorial text-lg text-white font-medium">
              Pre-Function Foyer Spaces
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

