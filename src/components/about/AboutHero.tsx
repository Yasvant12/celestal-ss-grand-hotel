"use client";

import { PageHero } from "@/components/shared/PageHero";
import { HERO_BACKGROUND_IMAGE, HOTEL_INFO } from "@/lib/constants";

export function AboutHero() {
  return (
    <PageHero
      eyebrow="About Celestal SS Grand Hotel • Kursi Road, Lucknow"
      title={
        <>
          An Experience of Comfort, Elegance &amp;{" "}
          <span className="italic font-normal text-gold-light">Warm Hospitality</span>
        </>
      }
      subtitle={`${HOTEL_INFO.tagline} ${HOTEL_INFO.shortAddress}`}
      backgroundImage={HERO_BACKGROUND_IMAGE}
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "About Us" },
      ]}
      badgeText="Reservations Desk"
    />
  );
}
