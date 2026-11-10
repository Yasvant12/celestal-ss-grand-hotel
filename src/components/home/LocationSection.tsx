"use client";

import dynamic from "next/dynamic";
import { HOTEL_INFO } from "@/lib/constants";

// Lazy-load the common interactive map component safely for Next.js App Router
const HotelMap = dynamic(
  () => import("@/components/shared/HotelMap").then((mod) => mod.HotelMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[380px] rounded-xl bg-surface-container flex flex-col items-center justify-center gap-2 text-on-surface-variant font-label-compact text-xs">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        <span>Loading Interactive Location Map...</span>
      </div>
    ),
  }
);

export function LocationSection() {
  return (
    <section className="w-full py-space-3xl bg-surface" id="location-section">
      <div className="site-container flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-primary">
              Strategic Accessibility
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Prime Location in the Heart of Ashiyana
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Situated at {HOTEL_INFO.shortAddress}, Celestal SS Grand Hotel offers convenient access to Lucknow&apos;s key destinations for wedding guests, business travelers, and visitors.
            </p>
          </div>
          <div className="flex items-center gap-space-sm">
            <a
              className="inline-flex items-center gap-space-xs px-5 py-2.5 rounded-lg bg-surface-champagne text-primary hover:bg-surface-container-high font-label-button text-label-button uppercase transition-colors"
              href={HOTEL_INFO.googleMapsUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">directions</span>
              <span>Get Directions on Google Maps</span>
            </a>
          </div>
        </div>

        {/* Map & Proximity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
          {/* Address & Connectivity Badges */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-space-md bg-surface-container-low p-space-xl rounded-xl border border-surface-container-highest/60">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">pin_drop</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-title-editorial text-title-editorial font-semibold text-on-surface">
                    Celestal SS Grand Hotel
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-relaxed">
                    {HOTEL_INFO.address}
                  </p>
                </div>
              </div>

              {/* Proximity Bullets */}
              <div className="space-y-space-sm pt-space-sm">
                {HOTEL_INFO.proximities.map((item) => (
                  <div
                    key={item.destination}
                      className="grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-2 sm:gap-3 p-3 rounded-lg bg-surface-container-lowest shadow-sm border border-surface-container-highest/40"
                  >
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-champagne text-primary">
                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                      </span>
                      <span className="min-w-0 break-words font-body-md text-body-md font-medium leading-snug text-on-surface">
                        {item.destination}
                      </span>
                      <span className="whitespace-nowrap font-label-button text-xs sm:text-label-button text-primary">
                        {item.time}
                      </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reservations Call Box */}
            <div className="p-4 rounded-lg bg-surface-champagne flex items-center justify-between border border-primary/20">
              <div className="flex flex-col">
                <span className="font-label-compact text-label-compact uppercase text-on-surface-variant">
                  Reservations &amp; Assistance
                </span>
                <span className="font-body-md text-body-md font-semibold text-on-surface">
                  Room &amp; Event Enquiries
                </span>
              </div>
              <a
                className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-gold-deep transition-colors shrink-0"
                href={`tel:${HOTEL_INFO.phones.primary}`}
                aria-label="Call for room and event enquiries"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
              </a>
            </div>
          </div>

          {/* Real Interactive Map Component */}
          <div
            style={{ isolation: "isolate", zIndex: 1, contain: "paint" }}
            className="lg:col-span-7 rounded-xl overflow-hidden shadow-lg relative z-0 isolate min-h-[420px] flex"
          >
            <HotelMap
              className="w-full h-full min-h-[420px]"
              hotelName={HOTEL_INFO.name}
              address={HOTEL_INFO.address}
              latitude={HOTEL_INFO.coordinates.lat}
              longitude={HOTEL_INFO.coordinates.lng}
              zoom={15}
              showDirections={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
