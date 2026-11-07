"use client";

import Link from "next/link";
import { HOTEL_INFO } from "@/lib/constants";

export function GalleryCTABanner() {
  return (
    <section className="w-full bg-[#111827] text-[#FAF7F2] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/90 to-[#966d23]/20 pointer-events-none" />

      <div className="relative site-container flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-12">
        <div className="max-w-2xl flex flex-col gap-3">
          <span className="font-eyebrow-luxury text-eyebrow-luxury text-[#E8D3A2] uppercase tracking-widest font-semibold">
            Celestal SS Grand Hospitality
          </span>
          <h2 className="font-display-hero text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#FAF7F2] font-serif leading-tight">
            Experience CELESTAL SS GRAND HOTEL
          </h2>
          <p className="font-body-md text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed pt-1">
            Discover comfort, hospitality, and memorable experiences. Whether you are reserving a peaceful weekend stay or choreographing a landmark grand wedding celebration.
          </p>

          {/* Quick Contact Links */}
          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-stone-300 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#B38728]">
                call
              </span>
              <span>
                Concierge Line:{" "}
                <a
                  href={`tel:${HOTEL_INFO.phones.primary}`}
                  className="text-white hover:text-[#E8D3A2] font-semibold transition-colors"
                >
                  {HOTEL_INFO.phones.primary}
                </a>
              </span>
            </div>
            <span className="hidden sm:inline text-[#B38728]/40">•</span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#25D366]">
                chat
              </span>
              <a
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#E8D3A2] font-semibold transition-colors"
              >
                Instant WhatsApp Desk
              </a>
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
          <Link
            href="/rooms"
            prefetch={true}
            className="px-7 py-3.5 rounded bg-[#7a5508] hover:bg-[#7B5719] text-white font-label-button text-xs uppercase tracking-wider text-center transition-all shadow-md flex items-center justify-center gap-2 font-semibold"
          >
            <span>Explore Our Rooms</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
          <Link
            href="/banquet"
            prefetch={true}
            className="px-7 py-3.5 rounded bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#E8D3A2] font-label-button text-xs uppercase tracking-wider text-center transition-all shadow-sm border border-white/10 font-semibold"
          >
            Plan An Event
          </Link>
        </div>
      </div>
    </section>
  );
}

