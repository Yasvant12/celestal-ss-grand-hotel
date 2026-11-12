"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HOTEL_INFO } from "@/lib/constants";

export function ManagementChapterSection() {
  return (
    <section
      aria-labelledby="management-chapter-heading"
      className="w-full bg-surface px-6 pt-20 pb-8 sm:pt-24 sm:pb-10 lg:px-12 lg:pt-28 lg:pb-12"
    >
      <div className="site-container grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="relative order-2 pb-10 pl-5 sm:pb-12 sm:pl-8 lg:order-2 lg:col-span-6"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/management-chapter-hotel-exterior.png"
              alt={`${HOTEL_INFO.name} hotel exterior`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute bottom-0 left-0 aspect-[16/10] w-3/5 rounded-2xl bg-surface p-2 shadow-2xl sm:p-2.5">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src="/images/management-chapter-guest-room.png"
                alt={`${HOTEL_INFO.name} guest room`}
                fill
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 -z-0 h-28 w-28 rounded-full bg-primary/10 blur-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 order-1 lg:col-span-6 lg:order-1"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-[0.22em] text-primary">
              A New Chapter in Hospitality
            </span>
          </div>

          <h2
            id="management-chapter-heading"
            className="mb-6 max-w-2xl font-headline-lg text-3xl leading-tight tracking-tight text-noir-charcoal sm:text-4xl lg:text-5xl"
          >
            A New Chapter.{" "}
            <span className="font-normal italic text-primary">
              A Trusted Legacy.
            </span>
          </h2>

          <div className="max-w-3xl space-y-5 border-l border-primary/50 pl-5 text-sm leading-relaxed text-on-surface-variant sm:pl-7 sm:text-base">
            <p>
              {HOTEL_INFO.name} is managed by{" "}
              <span className="font-medium text-primary">
                Celestial Casa, Lucknow
              </span>
              , bringing a renewed vision of hospitality and guest experience.
            </p>
            <p>
              Building on the hotel's commitment to warm hospitality and
              professional service, the new management brings fresh energy,
              dedication and a renewed focus on every guest experience.
            </p>
            <p>
              Guests can look forward to thoughtfully enhanced stays and
              celebrations, delivered with attentive care and the welcoming
              spirit of Celestial S.S Grand.
            </p>
            <p>
              We look forward to making every visit and every occasion
              memorable through excellence, warmth, and attentive care.
              Our new managemnet team brings renewed vision,dedeication and a strong
              commitment to ensuring the complete satisfaction of every guest. 
            </p>
          </div>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-surface-champagne px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-label-compact text-[10px] uppercase tracking-[0.18em] text-on-surface-variant sm:text-xs">
              A Celestial Casa property
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
