"use client";

import { HOTEL_INFO } from "@/lib/constants";

export function WhatsAppFloating() {
  return (
    <aside aria-label="Quick Concierge Access" className="fixed bottom-6 right-6 z-[900]">
      <a
        href={HOTEL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Celestal SS Grand Hotel Concierge on WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-2xl hover:shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="material-symbols-outlined text-[24px]">chat</span>
        <span className="hidden sm:inline font-label-button text-[13px] tracking-wide font-semibold">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}

