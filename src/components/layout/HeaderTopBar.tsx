"use client";

import { Clock, MapPin, PhoneCall } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

export function HeaderTopBar() {
  return (
    <aside className="bg-[#14110E] border-b border-[#3D2806]/70 text-stone-300 text-xs py-2 px-4 relative z-50">
      <div className="site-container flex flex-wrap items-center justify-between gap-3">
        {/* Address & Quick details */}
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5 text-stone-300">
            <MapPin className="w-3.5 h-3.5 text-[#CFA854]" />
            <span className="font-medium text-[11px] sm:text-xs">
              {HOTEL_INFO.shortAddress}
            </span>
          </span>
          <span className="hidden md:flex items-center gap-1.5 text-stone-300">
            <Clock className="w-3.5 h-3.5 text-[#CFA854]" />
            <span className="text-[11px] sm:text-xs">
              Open 24/7 for Reservations &amp; Tours
            </span>
          </span>
        </div>

        {/* Phone, Email & Action links */}
        <div className="flex items-center space-x-4 sm:space-x-5 text-[11px] sm:text-xs ml-auto">
          <a
            href={`tel:${HOTEL_INFO.phones.primary}`}
            className="flex items-center gap-1.5 hover:text-[#DEC384] transition-colors font-medium text-[#CFA854]"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{HOTEL_INFO.phones.primary}</span>
          </a>
          <span className="text-stone-700 hidden sm:inline">|</span>
          <a
            // href={`mailto:${HOTEL_INFO.email}`}
            className="hidden sm:flex items-center gap-1.5 hover:text-[#DEC384] transition-colors text-stone-300"
          >
            {/* <Mail className="w-3.5 h-3.5 text-[#CFA854]" /> */}
            {/* <span>{HOTEL_INFO.email}</span> */}
          </a>
        </div>
      </div>
    </aside>
  );
}
