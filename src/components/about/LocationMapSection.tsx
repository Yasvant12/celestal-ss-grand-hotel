"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MapPin, Plane, Train, Navigation, Compass } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

const HotelMap = dynamic(
  () => import("@/components/shared/HotelMap").then((mod) => mod.HotelMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[380px] rounded-2xl bg-surface-container-low flex flex-col items-center justify-center gap-2 text-on-surface-variant font-label-compact text-xs">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        <span>Loading Interactive Location Map...</span>
      </div>
    ),
  }
);

export function LocationMapSection() {
  return (
    <section className="w-full py-24 md:py-32 px-6 lg:px-12 bg-surface" id="location-section">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text & Proximity Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary" />
              <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-primary tracking-[0.25em]">
                Strategic Location
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-noir-charcoal tracking-tight mb-6">
              Experience Lucknow with Comfort and Convenience
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed mb-8">
              Nestled in the peaceful, well-planned residential enclave of LDA Colony Ashiyana, Celestal SS Grand Hotel offers tranquil refuge alongside swift connectivity to the city&apos;s key transit hubs, corporate corridors, and celebratory venues.
            </p>

            {/* Address Card */}
            <div className="w-full p-6 rounded-2xl bg-surface-container-low mb-8 flex items-start gap-4 border border-surface-container-highest/60">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="font-eyebrow-luxury text-eyebrow-luxury text-primary uppercase tracking-widest block mb-1 text-[10px] font-bold">
                  Official Address
                </span>
                <p className="font-body-md text-body-md text-noir-charcoal font-semibold leading-snug">
                  {HOTEL_INFO.address}
                </p>
              </div>
            </div>

            {/* Proximity Markers Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container-highest/50">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Plane className="w-5 h-5" />
                  <span className="font-headline-sm text-headline-sm text-sm sm:text-base font-semibold text-noir-charcoal">
                    CCS International Airport
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Approx. 15–20 Minutes Drive
                </span>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container-highest/50">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Train className="w-5 h-5" />
                  <span className="font-headline-sm text-headline-sm text-sm sm:text-base font-semibold text-noir-charcoal">
                    Charbagh Railway Station
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Approx. 20–25 Minutes Drive
                </span>
              </div>
            </div>

            <a
              href={HOTEL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-on-primary font-label-button text-label-button uppercase tracking-wider shadow-md hover:bg-gold-deep transition-all font-semibold"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
            </a>
          </motion.div>

          {/* Interactive Leaflet Map Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            style={{ isolation: "isolate", zIndex: 1, contain: "paint" }}
            className="lg:col-span-6 relative z-0 isolate"
          >
            <div
              style={{ isolation: "isolate", zIndex: 1, contain: "paint" }}
              className="relative z-0 isolate w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-surface-container"
            >
              {/* Real interactive Leaflet map */}
              <HotelMap className="w-full h-full min-h-[380px]" />

              {/* Landmark Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-lg flex items-center justify-between border border-surface-container-highest/50 z-20 pointer-events-none">
                <div>
                  <span className="font-eyebrow-luxury text-eyebrow-luxury text-primary uppercase tracking-widest block text-[10px] font-bold">
                    Landmark
                  </span>
                  <span className="font-body-sm text-body-sm text-noir-charcoal font-semibold">
                    {HOTEL_INFO.landmark}
                  </span>
                </div>
                <Compass className="w-7 h-7 text-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

