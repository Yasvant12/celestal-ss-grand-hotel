"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BedDouble, Sparkles, PartyPopper, ArrowRight } from "lucide-react";

export function AboutIntroduction() {
  const mainImage =
    "/images/hotel-banquet-ballroom-01.jpg";
  const secondaryImage =
    "/images/hotel-corridor-01.jpeg";

  return (
    <section className="w-full py-24 md:py-32 px-6 lg:px-12 bg-surface" id="intro-section">
      <div className="site-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left side: Overlapping Architectural Frames */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative pb-12 pr-6"
        >
          {/* Main Photo Frame */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-surface-container">
            <Image
              src={mainImage}
              alt="Celestal SS Grand Hotel Grand Ballroom configured for elegant banquet celebration"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Overlapping Secondary Photo Frame */}
          <div className="absolute -bottom-4 right-0 w-3/5 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-surface-ivory p-2 -mt-16">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-noir-charcoal">
              <Image
                src={secondaryImage}
                alt="Hotel corridor outside guest rooms at Celestal SS Grand Hotel"
                fill
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Subtle Ambient Glow */}
          <div className="absolute top-6 -left-6 w-24 h-24 rounded-full bg-gold-light/20 blur-2xl pointer-events-none" />
        </motion.div>

        {/* Right side: Copy & Feature Badges */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col items-start"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-primary tracking-[0.22em]">
              Welcome to Celestal SS Grand Hotel
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-noir-charcoal tracking-tight mb-6">
            Your Comfortable Stay, Our Personal Touch
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed mb-8">
            Celestal SS Grand Hotel welcomes guests to a comfortable and thoughtfully designed hospitality experience in Lucknow. From relaxing stays to memorable celebrations and dining experiences, our team focuses on making every visit pleasant, graceful, and effortlessly memorable.
          </p>

          {/* 3 Highlight Points */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="p-5 rounded-xl bg-surface-container-low transition-colors hover:bg-surface-container">
              <BedDouble className="w-7 h-7 text-primary mb-3 block" />
              <h3 className="font-headline-sm text-headline-sm text-noir-charcoal text-base font-semibold mb-1">
                Comfortable Accommodation
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Suites with plush bedding &amp; modern amenities.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container-low transition-colors hover:bg-surface-container">
              <Sparkles className="w-7 h-7 text-primary mb-3 block" />
              <h3 className="font-headline-sm text-headline-sm text-noir-charcoal text-base font-semibold mb-1">
                Attentive Hospitality
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Attentive staff delivering attentive, personalized care.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container-low transition-colors hover:bg-surface-container">
              <PartyPopper className="w-7 h-7 text-primary mb-3 block" />
              <h3 className="font-headline-sm text-headline-sm text-noir-charcoal text-base font-semibold mb-1">
                Memorable Celebrations
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Iconic banquets &amp; lawns tailored to grand events.
              </p>
            </div>
          </div>

          <a
            href="#offerings-section"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-noir-charcoal font-label-button text-label-button tracking-wider uppercase transition-colors"
          >
            <span>Discover More</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
