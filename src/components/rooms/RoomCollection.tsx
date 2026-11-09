"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ROOMS_DATA, RoomData } from "./roomsData";
import { RoomImagePlaceholder } from "./RoomImagePlaceholder";
import { Eye, Calendar, Wifi, Tv, Utensils, Shirt, Compass, ShowerHead, Coffee, Wind } from "lucide-react";

export interface RoomCollectionProps {
  activeFilter: "all" | "executive" | "courtyard";
  onOpenEnquiry: (suiteName: string) => void;
  onOpenDetail: (suiteId: string, defaultTab?: "gallery" | "floorplan") => void;
}

export function RoomCollection({
  activeFilter,
  onOpenEnquiry,
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
              Curated Room &amp; Suite Collections
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Each space at Celestal SS Grand Hotel is calibrated for sensory serenity, blending understated contemporary aesthetics with ergonomic luxury.
            </p>
          </div>

          <div className="font-eyebrow-luxury text-xs text-on-surface-variant uppercase tracking-widest shrink-0">
            Showing {filteredRooms.length} Tailored {filteredRooms.length === 1 ? "Offering" : "Offerings"}
          </div>
        </div>

        {/* 2-Column Luxury Cards Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {filteredRooms.map((room: RoomData, idx) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden border border-stone-200/90"
            >
              {/* Image Frame */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-noir-charcoal">
                {room.heroImage ? (
                  <Image
                    src={room.heroImage}
                    alt={room.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <RoomImagePlaceholder roomName={room.name} />
                )}
                {room.heroImage && (
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-charcoal/75 via-transparent to-transparent" />
                )}

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 bg-noir-charcoal/90 text-gold-light font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest rounded-lg shadow-sm border border-white/10">
                    {room.category === "executive" ? "Executive Club" : "Garden Courtyard"}
                  </span>
                </div>

                {/* Bottom Specs Bar */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-surface-container-lowest font-label-compact text-xs">
                  <span className="bg-noir-charcoal/80 px-3 py-1 rounded-md backdrop-blur-md border border-white/10 font-medium">
                    {room.sqft} ({room.sqm})
                  </span>
                  <span className="bg-noir-charcoal/80 px-3 py-1 rounded-md backdrop-blur-md border border-white/10 font-medium">
                    {room.occupancy}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-surface-container-lowest">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-eyebrow-luxury text-eyebrow-luxury text-primary uppercase tracking-wider font-bold">
                      {room.category === "executive" ? "Business & Weekend" : "Tranquil Retreat"}
                    </span>
                    <span className="font-label-compact text-stone-500 font-medium">
                      {room.bedConfig}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-xl sm:text-2xl text-on-surface group-hover:text-primary transition-colors font-semibold">
                    {room.name}
                  </h3>

                  <p className="font-body-sm text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {room.shortDesc}
                  </p>

                  {/* 4 Quick Features */}
                  <div className="pt-2 grid grid-cols-2 gap-2 text-stone-700 font-label-compact text-xs">
                    {room.quickFeatures.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 p-1.5 rounded-lg bg-surface-container-low border border-stone-100">
                        {getAmenityIcon(feat)}
                        <span className="font-medium text-[11px] truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 mt-4 border-t border-stone-100 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(room.name)}
                    className="flex-1 py-3 px-4 bg-primary hover:bg-gold-deep text-on-primary font-label-button text-xs font-bold uppercase tracking-wider rounded-xl transition-all text-center shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Enquire Now</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenDetail(room.id, "gallery")}
                    className="px-4 py-3 bg-surface-container-high hover:bg-surface-container text-on-surface font-label-button text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5 border border-stone-200/80 cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-primary" />
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
