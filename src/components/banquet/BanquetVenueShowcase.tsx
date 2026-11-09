"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface BanquetVenueShowcaseProps {
  onSelectVenue?: (venue: string) => void;
  activeFilter?: string;
}

export function BanquetVenueShowcase({
  onSelectVenue,
  activeFilter = "all",
}: BanquetVenueShowcaseProps) {
  const showAstor = activeFilter === "all" || activeFilter === "astor";
  const showCrystal = activeFilter === "all" || activeFilter === "crystal";

  const handleEnquire = (venueName: string) => {
    if (onSelectVenue) {
      onSelectVenue(venueName);
    }
    const el = document.getElementById("enquiry-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24" id="banquet-venues">
      <div className="site-container flex flex-col gap-14 sm:gap-16 lg:gap-20">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-2">
          <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-[0.24em] text-primary">
            Architectural Sanctuaries
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-on-surface">
            The Banquet Venues
          </h2>
          <div className="w-12 h-[2px] bg-primary-fixed-dim mt-1" />
        </div>

        {/* VENUE 1: The Grand Astor Ballroom (First Floor) */}
        {showAstor && (
          <motion.div
            id="venue-astor"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-container-highest/60 overflow-hidden"
          >
            {/* Visual Column */}
            <div className="lg:col-span-6 relative min-h-[360px] sm:min-h-[420px] lg:min-h-full overflow-hidden group">
              <Image
                src="/images/hotel-banquet-ballroom-01.jpg"
                alt="The Grand Astor Ballroom at Celestal SS Grand Hotel"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-noir-charcoal/90 text-on-primary px-3.5 py-1.5 rounded-lg backdrop-blur-sm border border-white/10">
                <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-primary-fixed-dim">
                  First Floor Sanctuary
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-surface-ivory/95 px-3.5 py-1.5 rounded-lg text-on-surface shadow-sm border border-stone-200">
                <span className="font-label-compact text-label-compact font-semibold">
                  18 Ft. Ceiling Clearance
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-12 flex flex-col justify-between gap-6 sm:gap-8">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-[0.2em] text-primary">
                    5,250 SQ. FT. PILLARLESS HALL
                  </span>
                  <h3 className="font-headline-md text-2xl sm:text-3xl text-on-surface mt-1">
                    The Grand Astor Ballroom
                  </h3>
                  <p className="font-label-compact text-label-compact text-secondary mt-1">
                    First Floor • Private Reception Lobby &amp; Dedicated Elevator Access
                  </p>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  An expansive celebration sanctuary featuring champagne crystal chandeliers, acoustic dampening drapery, and integrated high-fidelity sound. Designed for majestic wedding receptions, grand sangeet galas, and corporate conventions where scale and sophistication meet.
                </p>

                {/* Specification Badges */}
                <div className="grid grid-cols-3 gap-3 bg-surface-champagne/60 p-4 rounded-xl border border-[#DEC384]/40">
                  <div className="flex flex-col">
                    <span className="font-eyebrow-luxury text-[10px] text-secondary uppercase font-bold">
                      Floating Capacity
                    </span>
                    <span className="font-headline-sm text-lg sm:text-headline-sm text-primary font-medium">
                      450 - 500
                    </span>
                    <span className="font-label-compact text-[11px] text-secondary">Guests</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-eyebrow-luxury text-[10px] text-secondary uppercase font-bold">
                      Banquet Seated
                    </span>
                    <span className="font-headline-sm text-lg sm:text-headline-sm text-primary font-medium">
                      250 - 300
                    </span>
                    <span className="font-label-compact text-[11px] text-secondary">Guests</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-eyebrow-luxury text-[10px] text-secondary uppercase font-bold">
                      Column Count
                    </span>
                    <span className="font-headline-sm text-lg sm:text-headline-sm text-primary font-medium">
                      Zero
                    </span>
                    <span className="font-label-compact text-[11px] text-secondary">100% Sightline</span>
                  </div>
                </div>

                {/* Curated Highlights */}
                <div className="flex flex-col gap-2 pt-1">
                  <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-wider text-on-surface font-bold">
                    Curated Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Dual Bridal &amp; Green En-suites</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Custom Scenography Rigging</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Direct Guest Elevator Bay</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Private Pre-Function Foyer</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleEnquire("First Floor Grand Astor (5,250 sq ft)")}
                  className="font-label-button text-label-button uppercase px-6 py-3 bg-primary text-on-primary hover:bg-gold-deep rounded-xl transition-all tracking-widest shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  Enquire About Ballroom
                </button>
                <Link
                  href="/contact"
                  className="font-label-button text-label-button uppercase px-6 py-3 bg-surface-champagne text-on-surface hover:bg-surface-container-high rounded-xl transition-colors tracking-widest"
                >
                  Contact Desk
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* VENUE 2: The Celestial Crystal Hall (Second Floor) */}
        {showCrystal && (
          <motion.div
            id="venue-crystal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-container-highest/60 overflow-hidden"
          >
            {/* Content Column (Left on desktop) */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-12 flex flex-col justify-between gap-6 sm:gap-8 order-2 lg:order-1">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-[0.2em] text-primary">
                    5,250 SQ. FT. CONTEMPORARY HALL
                  </span>
                  <h3 className="font-headline-md text-2xl sm:text-3xl text-on-surface mt-1">
                    The Celestial Crystal Hall
                  </h3>
                  <p className="font-label-compact text-label-compact text-secondary mt-1">
                    Second Floor • Natural Daylight Facade &amp; Live Counter Foyer
                  </p>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Flooded with soft natural daylight by afternoon and illuminated with ambient architectural fixtures by night, this versatile hall offers an elevated perspective. Perfectly suited for engagement ceremonies, corporate banquets, anniversaries, and curated social galas.
                </p>

                {/* Specification Badges */}
                <div className="grid grid-cols-3 gap-3 bg-surface-champagne/60 p-4 rounded-xl border border-[#DEC384]/40">
                  <div className="flex flex-col">
                    <span className="font-eyebrow-luxury text-[10px] text-secondary uppercase font-bold">
                      Floating Capacity
                    </span>
                    <span className="font-headline-sm text-lg sm:text-headline-sm text-primary font-medium">
                      400 - 450
                    </span>
                    <span className="font-label-compact text-[11px] text-secondary">Guests</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-eyebrow-luxury text-[10px] text-secondary uppercase font-bold">
                      Banquet Seated
                    </span>
                    <span className="font-headline-sm text-lg sm:text-headline-sm text-primary font-medium">
                      220 - 260
                    </span>
                    <span className="font-label-compact text-[11px] text-secondary">Guests</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-eyebrow-luxury text-[10px] text-secondary uppercase font-bold">
                      Glazing Aspect
                    </span>
                    <span className="font-headline-sm text-lg sm:text-headline-sm text-primary font-medium">
                      Panoramic
                    </span>
                    <span className="font-label-compact text-[11px] text-secondary">Day-to-Dusk View</span>
                  </div>
                </div>

                {/* Curated Highlights */}
                <div className="flex flex-col gap-2 pt-1">
                  <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-wider text-on-surface font-bold">
                    Curated Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Dynamic Ambient Mood Lighting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Seamless Stage AV Projection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Dedicated Live Buffet Foyer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Climate Micro-Filtration System</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleEnquire("Second Floor Crystal Hall (5,250 sq ft)")}
                  className="font-label-button text-label-button uppercase px-6 py-3 bg-primary text-on-primary hover:bg-gold-deep rounded-xl transition-all tracking-widest shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  Enquire About Hall
                </button>
                <Link
                  href="/contact"
                  className="font-label-button text-label-button uppercase px-6 py-3 bg-surface-champagne text-on-surface hover:bg-surface-container-high rounded-xl transition-colors tracking-widest"
                >
                  Contact Desk
                </Link>
              </div>
            </div>

            {/* Visual Column (Right on desktop) */}
            <div className="lg:col-span-6 relative min-h-[360px] sm:min-h-[420px] lg:min-h-full overflow-hidden group order-1 lg:order-2">
              <Image
                src="/images/hotel-banquet-ballroom-02.jpg"
                alt="The Celestial Crystal Hall at Celestal SS Grand Hotel"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 right-4 bg-noir-charcoal/90 text-on-primary px-3.5 py-1.5 rounded-lg backdrop-blur-sm border border-white/10">
                <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-primary-fixed-dim">
                  Second Floor Panorama
                </span>
              </div>
              <div className="absolute bottom-4 left-4 bg-surface-ivory/95 px-3.5 py-1.5 rounded-lg text-on-surface shadow-sm border border-stone-200">
                <span className="font-label-compact text-label-compact font-semibold">
                  Independent Culinary Bay
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

