"use client";

import { HOTEL_INFO } from "@/lib/constants";

export function WhatsAppFloating() {
  return (
    <aside aria-label="Quick Concierge Access" className="fixed bottom-5 right-5 z-[900] sm:bottom-6 sm:right-6">
      <a
        href={`${HOTEL_INFO.whatsappUrl}?text=${encodeURIComponent(
          "Hello, I would like to enquire about Celestal SS Grand Hotel."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Celestal SS Grand Hotel on WhatsApp"
        className="group flex items-center gap-2.5 rounded-full bg-[#25D366] px-3.5 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(37,211,102,0.4)] active:scale-95 sm:px-4"
      >
        <span className="relative flex h-7 w-7 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-white/30 motion-reduce:animate-none" />
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            className="relative h-7 w-7 fill-current"
          >
            <path d="M16.04 3C8.87 3 3.04 8.78 3.04 15.9c0 2.28.61 4.5 1.77 6.45L3 29l6.84-1.78a13.1 13.1 0 0 0 6.2 1.56h.01c7.16 0 13-5.78 13-12.89 0-3.45-1.36-6.69-3.82-9.13A12.94 12.94 0 0 0 16.04 3Zm0 23.6c-1.9 0-3.77-.5-5.4-1.45l-.39-.23-4.06 1.06 1.08-3.93-.25-.4a10.58 10.58 0 0 1-1.64-5.68c0-5.88 4.79-10.66 10.68-10.66 2.85 0 5.53 1.11 7.54 3.12a10.57 10.57 0 0 1 3.12 7.53c0 5.87-4.79 10.64-10.68 10.64Zm5.86-7.98c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.22.32-.84 1.05-1.03 1.26-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.5.14-.66.15-.15.32-.38.49-.57.16-.19.21-.32.32-.54.1-.22.05-.41-.03-.57-.08-.16-.73-1.74-1-2.38-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.87.4-.3.33-1.14 1.11-1.14 2.7 0 1.58 1.17 3.12 1.33 3.34.16.21 2.3 3.5 5.57 4.9.78.34 1.38.55 1.85.7.78.24 1.49.21 2.05.13.63-.1 1.9-.78 2.17-1.53.27-.76.27-1.4.19-1.54-.08-.13-.3-.21-.62-.38Z" />
          </svg>
        </span>
        <span className="hidden font-label-button text-[13px] font-semibold tracking-wide sm:inline">
          <span className="group-hover:hidden">WhatsApp</span>
          <span className="hidden group-hover:inline">Chat with us on WhatsApp</span>
        </span>
      </a>
    </aside>
  );
}
