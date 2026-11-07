"use client";

import { useState } from "react";
import { HOTEL_INFO } from "@/lib/constants";
import { Navigation } from "lucide-react";

export interface HotelMapProps {
  latitude?: number;
  longitude?: number;
  hotelName?: string;
  address?: string;
  zoom?: number;
  height?: string | number;
  showDirections?: boolean;
  className?: string;
}

export function HotelMap({
  hotelName = HOTEL_INFO.name,
  address = HOTEL_INFO.address,
  height,
  showDirections = true,
  className = "w-full h-full min-h-[380px]",
}: HotelMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    HOTEL_INFO.mapsQuery || HOTEL_INFO.address
  )}&z=16&output=embed`;
  const containerStyle = height
    ? { height: typeof height === "number" ? `${height}px` : height }
    : undefined;

  return (
    <div
      style={{ isolation: "isolate", zIndex: 1, contain: "paint", ...containerStyle }}
      className="relative z-0 isolate w-full h-full min-h-[380px] rounded-xl overflow-hidden shadow-lg bg-surface-container border border-surface-container-highest/60 group"
    >
      <iframe
        title={`Map showing ${hotelName}`}
        src={mapSrc}
        className={`${className} border-0`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoaded(true)}
      />

      {showDirections && (
        <div className="absolute bottom-4 left-4 z-20 max-w-[calc(100%-2rem)]">
          <a
            href={HOTEL_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md text-[#14110E] hover:text-[#7E5507] shadow-lg border border-[#DEC384]/70 font-semibold text-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Navigation className="w-3.5 h-3.5 text-[#9B6E09]" />
            <span className="truncate">Open in Google Maps</span>
          </a>
        </div>
      )}

      {!isLoaded && (
        <div className="absolute inset-0 bg-surface-container-low flex flex-col items-center justify-center gap-2 text-on-surface-variant font-label-compact text-xs pointer-events-none">
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          <span>Loading hotel location...</span>
        </div>
      )}

      <p className="sr-only">{address}</p>
    </div>
  );
}
