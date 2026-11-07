"use client";

import Link from "next/link";

export function ServicesPreFooterBanner() {
  return (
    <section className="w-full bg-[#ebe8e3] py-14 sm:py-16 md:py-20 border-t border-stone-300">
      <div className="site-container flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        <div className="max-w-2xl text-center md:text-left">
          <h3 className="font-headline-md text-xl sm:text-2xl md:text-3xl text-[#111827] font-serif mb-2 leading-snug">
            Discover Comfort, Hospitality and Memorable Experiences
          </h3>
          <p className="font-body-md text-stone-600 text-sm sm:text-base leading-relaxed">
            Our team of dedicated wedding coordinators and event planners is poised to transform your vision into reality.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
          <Link
            href="/rooms"
            prefetch={true}
            className="px-6 py-3 bg-[#7a5508] hover:bg-[#7B5719] text-white font-label-button text-xs uppercase tracking-wider rounded shadow-sm transition-all font-semibold"
          >
            Explore Our Rooms
          </Link>
          <Link
            href="/banquet"
            prefetch={true}
            className="px-6 py-3 bg-white hover:bg-stone-50 text-[#111827] font-label-button text-xs uppercase tracking-wider rounded shadow-sm border border-stone-300 transition-all font-semibold"
          >
            View Banquet Halls
          </Link>
        </div>
      </div>
    </section>
  );
}

