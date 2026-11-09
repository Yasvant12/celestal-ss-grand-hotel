
"use client";

import { PageHero } from "@/components/shared/PageHero";
import { HOTEL_INFO } from "@/lib/constants";

export function HeroSection() {
  return (
    <PageHero
      pageKey="home"
      eyebrow={HOTEL_INFO.tagline}
      title={
        <>
          Elevate Your Celebrations with Luxury &amp; <span className="italic font-normal text-gold-light">Elegance</span>
        </>
      }
      subtitle={`${HOTEL_INFO.subheading} ${HOTEL_INFO.shortAddress}`}
      breadcrumb={[{ label: "Home" }]}
      badgeText="Reservations Desk"
    >
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-primary-fixed-dim animate-pulse" />
          <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-gold-light">
            Kursi Road, Lucknow
          </span>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
          <span className="material-symbols-outlined text-[15px] text-gold-light" style={{ fontVariationSettings: "'FILL' 1" }}>
            workspace_premium
          </span>
          <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-surface-champagne">
            60 Rooms • 5 Banquet Halls • 2 Lawn
          </span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-noir-charcoal/30 px-4 py-3 backdrop-blur-sm">
          <span className="material-symbols-outlined text-[28px] text-primary-fixed">domain</span>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-surface-ivory font-semibold">{HOTEL_INFO.stats.lawnCapacity}</span>
            <span className="font-label-compact text-label-compact uppercase text-surface-container-highest">Celebration Lawn</span>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-noir-charcoal/30 px-4 py-3 backdrop-blur-sm">
          <span className="material-symbols-outlined text-[28px] text-primary-fixed">celebration</span>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-surface-ivory font-semibold">{HOTEL_INFO.stats.acBanquetCapacity}</span>
            <span className="font-label-compact text-label-compact uppercase text-surface-container-highest">AC Banquet</span>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-noir-charcoal/30 px-4 py-3 backdrop-blur-sm">
          <span className="material-symbols-outlined text-[28px] text-primary-fixed">bed</span>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-surface-ivory font-semibold">{HOTEL_INFO.stats.luxuryRooms}</span>
            <span className="font-label-compact text-label-compact uppercase text-surface-container-highest">Luxury Rooms</span>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-noir-charcoal/30 px-4 py-3 backdrop-blur-sm">
          <span className="material-symbols-outlined text-[28px] text-primary-fixed">star</span>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-surface-ivory font-semibold">{HOTEL_INFO.stats.rating}</span>
            <span className="font-label-compact text-label-compact uppercase text-surface-container-highest">Guest Rating</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-label-button text-label-button uppercase tracking-wider text-on-primary shadow-xl transition-all duration-300 hover:bg-gold-deep hover:scale-[1.02] active:scale-[0.99]"
          href="#venues-section"
        >
          <span>Explore Venues &amp; Rooms</span>
          <span className="material-symbols-outlined text-[18px]">south_east</span>
        </a>

        <a
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-surface-ivory/10 px-6 py-4 font-label-button text-label-button uppercase tracking-wider text-surface-ivory shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-surface-ivory/20 hover:scale-[1.02] active:scale-[0.99]"
          href={`tel:${HOTEL_INFO.phones.primary}`}
        >
          <span className="material-symbols-outlined text-[22px]">call</span>
          <span>Call {HOTEL_INFO.phones.primary}</span>
        </a>
      </div>
    </PageHero>
  );
}
