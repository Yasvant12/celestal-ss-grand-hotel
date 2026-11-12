"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export function VenuesSection() {
  const shouldReduceMotion = useReducedMotion();
  const banquetHallImg = "/images/hotel-banquet-ballroom-03.jpg";
  const lawnImg = "/images/hotel-open-lawn-night-01.jpeg";
  const roomsImg = "/images/hotel-room-bedroom-03.jpeg";
  const diningImg = "/images/hotel-restaurant-chef.png";

  const cardsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-space-3xl bg-surface-container-low" id="venues-section">
      <div className="site-container flex flex-col gap-space-2xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-space-md"
        >
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-primary">
              Palatial Spaces &amp; Stays
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Curated Venues for Unforgettable Occasions
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              From climate-controlled ballroom banquets and starlit open-air lawns to private bridal preparation rooms, every space is architected to inspire joy.
            </p>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="font-label-compact text-label-compact uppercase text-on-surface-variant">
              All Venues Include Full Power Backup &amp; Dedicated Event Team
            </span>
          </div>
        </motion.div>

        {/* 3-Column Luxury Cards with Staggered Entrance */}
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg"
        >
          {/* Card 1: Grand Banquet Hall */}
          <motion.div
            variants={cardVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            transition={{ duration: 0.3 }}
            className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between border border-surface-container-highest/40"
          >
            <div>
              <div className="relative overflow-hidden h-64">
                <Image
                  src={banquetHallImg}
                  alt="Grand Banquet Hall"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-primary text-on-primary font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-wider shadow-sm">
                  Up to 400 Guests
                </div>
              </div>
              <div className="p-space-lg flex flex-col gap-space-sm">
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                  Grand Banquet Hall
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Our elegant banquet space is architected for both grand celebrations and intimate gatherings, making it the perfect venue for weddings, corporate summits, and milestone receptions.
                </p>
                {/* Amenities List */}
                <div className="grid grid-cols-2 gap-2 pt-space-xs text-on-surface-variant font-label-compact text-label-compact">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">ac_unit</span> Central Air-Conditioning
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">surround_sound</span> Acoustic Pro Sound
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">theater_comedy</span> Customisable Stage
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">light_mode</span> Ambient Mood Lighting
                  </span>
                </div>
              </div>
            </div>
            <div className="p-space-lg pt-0 flex items-center justify-between">
              <Link
                className="font-label-button text-label-button uppercase text-primary hover:text-gold-deep flex items-center gap-1 transition-colors group-hover:translate-x-0.5 font-semibold"
                href="/banquet"
                prefetch={true}
              >
                <span>Explore Banquets</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
              <span className="font-label-compact text-label-compact text-on-surface-variant">
                Misripur Guramba, Kursi Road
              </span>
            </div>
          </motion.div>

          {/* Card 2: Open Celebration Lawn */}
          <motion.div
            variants={cardVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            transition={{ duration: 0.3 }}
            className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between border border-surface-container-highest/40"
          >
            <div>
              <div className="relative overflow-hidden h-64">
                <Image
                  src={lawnImg}
                  alt="Open Celebration Lawn"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-noir-charcoal text-surface-ivory font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-wider shadow-sm">
                  Two Outdoor Lawns
                </div>
              </div>
              <div className="p-space-lg flex flex-col gap-space-sm">
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                  Celebration Lawns
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Our two celebration lawns offer open-air settings for wedding ceremonies, receptions, and other gatherings. Contact our team to discuss the setup and capacity of each lawn.
                </p>
                {/* Amenities List */}
                <div className="grid grid-cols-2 gap-2 pt-space-xs text-on-surface-variant font-label-compact text-label-compact">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">nature</span> Manicured Velvet Turf
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">deck</span> Open-Air Sky Deck
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">wb_twilight</span> Evening Lantern Lighting
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">restaurant</span> Multi-Station Food Courts
                  </span>
                </div>
              </div>
            </div>
            <div className="p-space-lg pt-0 flex items-center justify-between">
              <a
                className="font-label-button text-label-button uppercase text-primary hover:text-gold-deep flex items-center gap-1 transition-colors group-hover:translate-x-0.5"
                href="#inquiry-form-section"
              >
                <span>Reserve Lawn</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
              <span className="font-label-compact text-label-compact text-on-surface-variant">
                Grand Weddings
              </span>
            </div>
          </motion.div>

          {/* Card 3: Luxury Rooms */}
          <motion.div
            variants={cardVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            transition={{ duration: 0.3 }}
            className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between border border-surface-container-highest/40"
          >
            <div>
              <div className="relative overflow-hidden h-64">
                <Image
                  src={roomsImg}
                  alt="Luxury Rooms"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-primary text-on-primary font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-wider shadow-sm">
                  60 Luxury Rooms
                </div>
              </div>
              <div className="p-space-lg flex flex-col gap-space-sm">
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                  Luxury Rooms
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  At Celestial SS Grand Hotel, our rooms are designed to be your personal sanctuary, blending boutique luxury with the comforts of home for wedding families, guests, and corporate travellers.
                </p>
                {/* Amenities List */}
                <div className="grid grid-cols-2 gap-2 pt-space-xs text-on-surface-variant font-label-compact text-label-compact">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">king_bed</span> King Size Plush Beds
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">wifi</span> High-Speed Wi-Fi
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">room_service</span> 24/7 Room Service
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">shower</span> Private Modern Bathrooms
                  </span>
                </div>
              </div>
            </div>
            <div className="p-space-lg pt-0 flex items-center justify-between">
              <a
                className="font-label-button text-label-button uppercase text-primary hover:text-gold-deep flex items-center gap-1 transition-colors group-hover:translate-x-0.5"
                href="/rooms"
              >
                <span>Explore Rooms</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
              <span className="font-label-compact text-label-compact text-on-surface-variant">
                Bridal Preparation Rooms Available
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Banner Card: Gourmet Multi-Cuisine Dining & Catering */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bg-noir-charcoal text-surface-ivory rounded-xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2 items-center group"
        >
          <div className="p-space-xl flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-primary-fixed-dim" />
              <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-gold-light">
                Artisanal Gastronomy &amp; World Flavors
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-surface-ivory">
              Gourmet Dining &amp; Bespoke Event Catering
            </h3>
            <p className="font-body-md text-body-md text-surface-container-highest max-w-xl">
              Treat your guests to an elevated culinary experience. Our master chefs curate signature specialties, artisanal live stations, and exquisite multi-cuisine banquets crafted with culinary passion.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gold-light">soup_kitchen</span>
                <span className="font-label-compact text-label-compact">Live Tandoor &amp; Buffet Desks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gold-light">dinner_dining</span>
                <span className="font-label-compact text-label-compact">Pure Veg &amp; Non-Veg Segregated Kitchens</span>
              </div>
            </div>
          </div>
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-noir-charcoal">
            <Image
              src={diningImg}
              alt="Chef preparing a meal at Celestial SS Grand Hotel"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
