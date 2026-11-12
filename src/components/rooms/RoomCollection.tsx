"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ROOMS_DATA, RoomData } from "./roomsData";
import { RoomImagePlaceholder } from "./RoomImagePlaceholder";
import { Eye, Phone, Wifi, Tv, Utensils, Shirt, Compass, ShowerHead, Coffee, Wind } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

export interface RoomCollectionProps {
  activeFilter: "all" | "executive" | "courtyard";
  onOpenDetail: (roomId: string, defaultTab?: "gallery" | "floorplan") => void;
}

export function RoomCollection({
  activeFilter,
  onOpenDetail,
}: RoomCollectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const allRooms = Object.values(ROOMS_DATA);
  const filteredRooms = allRooms.filter((room) => {
    if (activeFilter === "all") return true;
    return room.category === activeFilter;
  });

  const getAmenityIcon = (feature: string) => {
    switch (feature.toLowerCase()) {
      case "fiber wi-fi":
        return <Wifi className="w-4 h-4 text-primary" />;
      case '55" smart uhd tv':
        return <Tv className="w-4 h-4 text-primary" />;
      case "24/7 dining":
        return <Utensils className="w-4 h-4 text-primary" />;
      case "express pressing":
        return <Shirt className="w-4 h-4 text-primary" />;
      case "patio vista":
        return <Compass className="w-4 h-4 text-primary" />;
      case "rain shower":
        return <ShowerHead className="w-4 h-4 text-primary" />;
      case "artisanal tea bar":
        return <Coffee className="w-4 h-4 text-primary" />;
      case "climate control":
        return <Wind className="w-4 h-4 text-primary" />;
      default:
        return <span className="w-1.5 h-1.5 rounded-full bg-primary" />;
    }
  };

  return (
    <section className="w-full bg-surface py-16 sm:py-20 md:py-24" id="room-collections">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12 sm:mb-16">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-primary inline-block" />
              <span className="font-eyebrow-luxury text-eyebrow-luxury text-primary uppercase tracking-widest">
                Distinguished Accommodations
              </span>
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface font-medium tracking-tight">
              Thoughtfully Designed Rooms for a Comfortable Stay
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Each space at Celestal SS Grand Hotel is calibrated for sensory serenity, blending understated contemporary aesthetics with ergonomic luxury.
            </p>
          </div>

          <div className="font-eyebrow-luxury text-xs text-on-surface-variant uppercase tracking-widest shrink-0">
            Showing {filteredRooms.length} Tailored {filteredRooms.length === 1 ? "Offering" : "Offerings"}
          </div>
        </div>

        {/* Alternating editorial rows for each room type */}
        <div className="mx-auto flex max-w-6xl flex-col gap-16 sm:gap-20 lg:gap-24">
          {filteredRooms.map((room: RoomData, idx) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16"
            >
              <div
                className={`relative order-1 aspect-[4/3] overflow-hidden rounded-2xl bg-noir-charcoal shadow-xl lg:col-span-6 ${
                  room.category === "executive" ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {room.heroImage ? (
                  <Image
                    src={room.heroImage}
                    alt={`${room.name} with ${room.bedConfig.toLowerCase()}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <RoomImagePlaceholder roomName={room.name} />
                )}
                {room.heroImage && (
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-charcoal/65 via-transparent to-transparent" />
                )}
                <div className="absolute left-4 top-4">
                  <span className="rounded-lg border border-white/10 bg-noir-charcoal/90 px-3.5 py-1 font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-gold-light shadow-sm">
                    {room.category === "executive" ? "Executive Club" : "Garden Courtyard"}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-label-compact text-xs text-surface-container-lowest">
                  <span className="rounded-md border border-white/10 bg-noir-charcoal/80 px-3 py-1 font-medium backdrop-blur-md">
                    {room.sqft} ({room.sqm})
                  </span>
                  <span className="rounded-md border border-white/10 bg-noir-charcoal/80 px-3 py-1 font-medium backdrop-blur-md">
                    {room.occupancy}
                  </span>
                </div>
              </div>

              <div
                className={`order-2 flex flex-col items-start lg:col-span-6 ${
                  room.category === "executive" ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />
                  <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-[0.22em] text-primary">
                    {room.category === "executive" ? "Business & Weekend" : "Tranquil Retreat"}
                  </span>
                </div>

                <h3 className="mb-3 font-headline-lg text-2xl font-medium tracking-tight text-noir-charcoal transition-colors hover:text-primary sm:text-3xl lg:text-4xl">
                  {room.name}
                </h3>

                <p className="mb-5 font-body-sm text-sm leading-relaxed text-on-surface-variant sm:text-base">
                  {room.shortDesc}
                </p>

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-surface-champagne px-4 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-label-compact text-xs font-medium text-on-surface-variant">
                    {room.bedConfig}
                  </span>
                </div>

                <div className="mb-6 grid w-full grid-cols-2 gap-2 font-label-compact text-xs text-stone-700">
                  {room.quickFeatures.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 rounded-lg border border-stone-100 bg-surface-container-low p-2">
                      {getAmenityIcon(feat)}
                      <span className="truncate font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex w-full flex-col gap-3 border-t border-stone-200 pt-5 sm:flex-row">
                  <a
                    href={`tel:${HOTEL_INFO.phones.primary}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-center font-label-button text-xs font-bold uppercase tracking-wider text-on-primary shadow-md transition-colors hover:bg-gold-deep"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call to Enquire</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onOpenDetail(room.id, "gallery")}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-stone-200 bg-surface-container-high px-4 py-3 font-label-button text-xs font-bold uppercase tracking-wider text-on-surface transition-colors hover:bg-surface-container"
                  >
                    <Eye className="h-4 w-4 text-primary" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
