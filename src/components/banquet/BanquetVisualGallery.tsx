"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  BanquetImageCarousel,
  type BanquetGalleryImage,
} from "./BanquetImageCarousel";

const GALLERY_IMAGES: BanquetGalleryImage[] = [
  {
    src: "/images/banquet/banquet-hall/celestial-banquet-hall-interior.jpg",
    alt: "Interior view of a banquet hall at Celestial SS Grand Hotel",
    category: "Banquet Hall",
    title: "An Elegant Setting for Grand Gatherings",
  },
  {
    src: "/images/banquet/banquet-hall/celestial-banquet-hall-wide-view.jpg",
    alt: "Wide view across a decorated Celestial SS Grand Hotel banquet hall",
    category: "Banquet Hall",
    title: "Room to Celebrate Together",
  },
  {
    src: "/images/banquet/reception/celestial-reception-setup.jpg",
    alt: "Reception celebration setup in a Celestial SS Grand Hotel event space",
    category: "Reception",
    title: "A Warm Welcome to Every Celebration",
  },
  {
    src: "/images/banquet/wedding-stage/celestial-wedding-stage.jpg",
    alt: "Wedding stage arranged inside the hotel's banquet venue",
    category: "Wedding Stage",
    title: "A Beautiful Backdrop for Special Moments",
  },
  {
    src: "/images/banquet/wedding-stage/celestial-floral-swing-stage.png",
    alt: "Floral swing stage design for a wedding celebration",
    category: "Wedding Stage",
    title: "Floral Details for a Memorable Celebration",
  },
  {
    src: "/images/banquet/banquet-hall/destiny-hall-wedding-setup.png",
    alt: "Wedding setup in Destiny Hall, arranged for a celebration",
    category: "Destiny Hall",
    title: "A Distinctive Setting for Your Celebration",
  },
  {
    src: "/images/banquet/outdoor-lawn/celestial-hotel-green-lawn-night.jpeg",
    alt: "Hotel green lawn illuminated for an evening event",
    category: "Outdoor Lawn",
    title: "An Open-Air Evening Celebration",
  },
  {
    src: "/images/banquet/outdoor-lawn/celestial-connected-green-lawn-celebration.png",
    alt: "Outdoor green lawn arranged for a celebration",
    category: "Green Lawn",
    title: "Celebrate Outdoors in a Lush Setting",
  },
];

export function BanquetVisualGallery() {
  return (
    <section className="w-full border-y border-surface-container-highest/60 bg-surface-ivory py-16 sm:py-20 lg:py-24">
      <div className="site-container flex flex-col gap-8 sm:gap-10">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <BanquetImageCarousel images={GALLERY_IMAGES} />
        </motion.div>
      </div>
    </section>
  );
}
