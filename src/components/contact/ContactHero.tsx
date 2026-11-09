"use client";

import { PageHero } from "@/components/shared/PageHero";
import { HERO_BACKGROUND_IMAGE } from "@/lib/constants";

export function ContactHero() {
  return (
    <PageHero
      pageKey="contact"
      eyebrow="Get In Touch"
      title={
        <>
          Let’s Start a{" "}
          <span className="italic font-normal text-gold-light">Conversation</span>
        </>
      }
      subtitle="Have a question, planning a bespoke luxury stay, or organising a prestigious celebration? Our dedicated executive team at Celestal SS Grand Hotel is here to orchestrate every detail with effortless precision."
      backgroundImage={HERO_BACKGROUND_IMAGE}
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Contact Us" },
      ]}
      badgeText="Reservations Desk"
    />
  );
}
