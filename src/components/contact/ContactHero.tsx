"use client";

import { PageHero } from "@/components/shared/PageHero";
import { getHeroBackgroundImageForPage } from "@/lib/constants";

export function ContactHero() {
  return (
    <PageHero
      eyebrow="Get In Touch"
      title={
        <>
          Let’s Start a{" "}
          <span className="italic font-normal text-gold-light">Conversation</span>
        </>
      }
      backgroundImage={getHeroBackgroundImageForPage("contact")}
      backgroundImageAlt="Welcoming hotel entrance foyer with a floral staircase"
      backgroundImagePosition="center"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Contact Us" },
      ]}
    />
  );
}
