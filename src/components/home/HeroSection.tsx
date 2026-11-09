
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
      conciergeBadge={false}
    >
      <div className="flex flex-wrap items-center gap-4">
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
          <span>Call Now</span>
        </a>
      </div>
    </PageHero>
  );
}
