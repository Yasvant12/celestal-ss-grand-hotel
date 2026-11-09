"use client";

import { PageHero } from "@/components/shared/PageHero";
import { HERO_BACKGROUND_IMAGE } from "@/lib/constants";

export function ServicesHero() {
  return (
    <PageHero
      pageKey="services"
      eyebrow="Bespoke Concierge • Hospitality & Celebrations"
      title={
        <>
          Thoughtfully Curated Hospitality &amp;{" "}
          <span className="italic font-normal text-gold-light">Services</span>
        </>
      }
      subtitle="Creating memorable experiences with thoughtfully designed hospitality, grand celebratory scenography, and dedicated event coordination."
      backgroundImage={HERO_BACKGROUND_IMAGE}
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]}
      conciergeBadge={true}
      badgeText="Bespoke Concierge At Service"
    >
      {/* 8 Signature Disciplines Indicator Ribbon in the standardized bottom slot */}
      <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-[#B38728]/30 text-[#E8D3A2] backdrop-blur-md shadow-sm">
        <span className="material-symbols-outlined text-[18px] text-[#B38728]">
          diamond
        </span>
        <span className="font-label-button text-xs tracking-[0.16em] uppercase text-white font-medium">
          8 Signature Service Disciplines
        </span>
        <span className="hidden sm:inline text-[#B38728]/60">•</span>
        <span className="hidden sm:inline font-label-compact text-xs text-[#E8D3A2]/90 uppercase tracking-widest font-semibold">
          Click Any Card to Explore Photo Archive
        </span>
      </div>
    </PageHero>
  );
}
