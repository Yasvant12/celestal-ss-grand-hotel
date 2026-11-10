"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const GALLERY_IMAGES = [
  {
    src: "/images/hotel-banquet-ballroom-01.jpg",
    alt: "Grand ballroom at Celestal SS Grand Hotel",
    eyebrow: "Grand Ballroom",
    title: "Architectural Scale & Crystal Refinement",
    className: "md:col-span-7 md:row-span-2 min-h-[360px] sm:min-h-[440px]",
    sizes: "(max-width: 768px) 100vw, 60vw",
  },
  {
    src: "/images/hotel-banquet-ballroom-05.jpg",
    alt: "Banquet hall with a wide view across the event space",
    eyebrow: "Banquet Hall",
    title: "A Spacious Setting for Celebrations",
    className: "md:col-span-5 min-h-[240px]",
    sizes: "(max-width: 768px) 100vw, 40vw",
  },
  {
    src: "/images/hotel-banquet-ballroom-07.jpg",
    alt: "Guests and event setup inside the banquet hall",
    eyebrow: "Celebration Setup",
    title: "Ready for Memorable Gatherings",
    className: "md:col-span-5 min-h-[240px]",
    sizes: "(max-width: 768px) 100vw, 40vw",
  },
  {
    src: "/images/hotel-open-lawn-night-01.jpeg",
    alt: "Celestal SS Grand Hotel open lawn illuminated at night",
    eyebrow: "Open Lawn",
    title: "An Enchanting Outdoor Venue",
    className: "md:col-span-12 min-h-[280px] sm:min-h-[340px]",
    sizes: "100vw",
  },
];

interface GalleryImageCardProps {
  image: (typeof GALLERY_IMAGES)[number];
  index: number;
}

function GalleryImageCard({ image, index }: GalleryImageCardProps) {
  const [unavailable, setUnavailable] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-2xl bg-surface-container-low shadow-sm ${image.className}`}
    >
      {unavailable ? (
        <div
          role="status"
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface-container-low px-6 text-center"
        >
          <span className="material-symbols-outlined text-3xl text-primary">
            image_not_supported
          </span>
          <p className="font-title-editorial text-lg font-semibold text-on-surface">
            Image not available yet
          </p>
          <p className="font-body-sm text-sm text-on-surface-variant">
            This photo is coming soon.
          </p>
        </div>
      ) : (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={image.sizes}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onError={() => setUnavailable(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir-charcoal/85 via-noir-charcoal/15 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6">
            <span className="mb-1 block font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-primary-fixed-dim">
              {image.eyebrow}
            </span>
            <h3 className="font-headline-md text-xl text-white sm:text-2xl">
              {image.title}
            </h3>
          </div>
        </>
      )}
    </motion.div>
  );
}

export function BanquetVisualGallery() {
  return (
    <section className="w-full border-y border-surface-container-highest/60 bg-surface-ivory py-16 sm:py-20 lg:py-24">
      <div className="site-container flex flex-col gap-10 sm:gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-3xl flex-col gap-2">
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-[0.24em] text-primary">
              Visual Inspiration
            </span>
            <h2 className="font-headline-lg text-3xl text-on-surface sm:text-4xl lg:text-headline-lg">
              Moments of Grandeur &amp; Artful Staging
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-[#DEC384]/40 bg-surface-champagne px-6 py-3 font-label-button text-label-button uppercase tracking-widest text-on-surface shadow-sm transition-all hover:bg-primary hover:text-on-primary"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Schedule Walk-Through</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:auto-rows-[240px] md:grid-cols-12 sm:gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <GalleryImageCard key={image.src} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
