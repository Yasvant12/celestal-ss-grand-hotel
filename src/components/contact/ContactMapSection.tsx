"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Plane, Train, Building2, Car, Map, ArrowRight } from "lucide-react";
import { HotelMap } from "@/components/shared/HotelMap";
import { HOTEL_INFO } from "@/lib/constants";

export function ContactMapSection() {
  const shouldReduceMotion = useReducedMotion();

  const transitNodes = [
    {
      icon: Plane,
      name: "Chaudhary Charan Singh Airport (LKO)",
      route: "Via VIP Road / Amar Shaheed Path",
      duration: "15 Mins",
    },
    {
      icon: Train,
      name: "Charbagh Railway Station",
      route: "Direct city arterial corridor",
      duration: "20 Mins",
    },
    {
      icon: Building2,
      name: "Hazratganj Financial Center",
      route: "City Center & Commercial District",
      duration: "25 Mins",
    },
  ];

  return (
    <section className="w-full bg-surface-container-low py-16 sm:py-20 md:py-24" id="map-view">
      <div className="site-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5"
        >
          <div>
            <span className="font-eyebrow-luxury text-eyebrow-luxury text-gold-deep tracking-widest uppercase block mb-1">
              Destination Geography
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight font-medium">
              Find Us in Lucknow
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-xl pt-1 leading-relaxed">
              Visit CELESTIAL SS GRAND HOTEL. Use our interactive navigation map to explore transit routes, proximity to major transport nodes, and immediate points of interest.
            </p>
          </div>

          <a
            className="inline-flex items-center gap-2 px-5 py-3 bg-surface-container-lowest hover:bg-surface-champagne text-on-surface font-label-button text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm transition-all border border-stone-200/80 shrink-0 self-start md:self-end"
            href={HOTEL_INFO.googleMapsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Map className="w-4 h-4 text-primary" />
            <span>Open in Google Maps</span>
          </a>
        </motion.div>

        {/* Map & Transit Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Reusable Interactive Leaflet Map */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            style={{ isolation: "isolate", zIndex: 1 }}
            className="lg:col-span-8 relative z-0 isolate rounded-2xl overflow-hidden shadow-lg border border-stone-200/90 min-h-[460px] flex flex-col"
          >
            <HotelMap
              hotelName="Celestal SS Grand Hotel"
              address={HOTEL_INFO.address}
              latitude={HOTEL_INFO.coordinates.lat}
              longitude={HOTEL_INFO.coordinates.lng}
              zoom={15}
              className="w-full h-full min-h-[460px]"
            />
          </motion.div>

          {/* Right: Integrated Transit Landmarks & Limousine Card */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 flex flex-col justify-between space-y-6"
          >
            {/* Transit Nodes */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-md border border-stone-200/80 space-y-4">
              <h3 className="font-title-editorial text-lg text-on-surface font-semibold tracking-tight">
                Key Transit Landmarks
              </h3>

              <div className="space-y-3">
                {transitNodes.map((node) => {
                  const NodeIcon = node.icon;
                  return (
                    <div
                      key={node.name}
                      className="flex items-center justify-between p-3.5 bg-surface-container-low rounded-xl border border-stone-200/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-surface-champagne text-primary flex items-center justify-center shrink-0">
                          <NodeIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-body-sm text-xs sm:text-sm font-bold text-on-surface">
                            {node.name}
                          </p>
                          <p className="font-label-compact text-[11px] text-stone-500">
                            {node.route}
                          </p>
                        </div>
                      </div>
                      <span className="font-label-compact text-xs font-bold text-primary px-2.5 py-1 bg-surface-container-lowest rounded-lg shadow-xs shrink-0 ml-2">
                        {node.duration}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Chauffeured Limousine Card */}
            <div className="bg-noir-charcoal text-surface-container-lowest p-6 rounded-2xl shadow-xl border border-white/10 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-gold-light">
                    <Car className="w-4 h-4" />
                  </div>
                  <h4 className="font-label-compact text-xs uppercase tracking-widest text-gold-light font-bold">
                    Chauffeured Limousine
                  </h4>
                </div>
                <p className="font-body-sm text-xs sm:text-sm text-surface-variant/90 leading-relaxed">
                  Complimentary luxury airport arrival coordination is extended to all Executive Suites and Banquet hosts upon advance request.
                </p>
              </div>

              <a
                className="text-xs uppercase font-label-button tracking-wider text-surface-container-lowest hover:text-gold-light transition-colors flex items-center gap-1 font-semibold pt-2 border-t border-white/10"
                href={`tel:${HOTEL_INFO.phones.primary}`}
              >
                <span>Request Chauffeur Transfer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

