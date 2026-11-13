"use client";

import { PageHero } from "@/components/shared/PageHero";
import { getHeroBackgroundImageForPage } from "@/lib/constants";

export function AboutHero() {
  return (
    <PageHero
      eyebrow="About Celestial SS Grand Hotel • Kursi Road, Lucknow"
      title={
        <>
          An Experience of Comfort, Elegance &amp;{" "}
          <span className="italic font-normal text-gold-light">Warm Hospitality</span>
        </>
      }
      backgroundImage={getHeroBackgroundImageForPage("about")}
      backgroundImageAlt="Warmly lit reception lobby at Celestial SS Grand Hotel"
      backgroundImagePosition="center"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "About Us" },
      ]}
    />
  );
}
