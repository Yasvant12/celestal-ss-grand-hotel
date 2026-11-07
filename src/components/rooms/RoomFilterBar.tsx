"use client";

import { CheckCircle2 } from "lucide-react";

export interface RoomFilterBarProps {
  activeFilter: "all" | "executive" | "courtyard";
  onFilterChange: (filter: "all" | "executive" | "courtyard") => void;
}

export function RoomFilterBar({ activeFilter, onFilterChange }: RoomFilterBarProps) {
  const filters: { id: "all" | "executive" | "courtyard"; label: string }[] = [
    { id: "all", label: "All Rooms (33)" },
    { id: "executive", label: "Executive Club Rooms (18)" },
    { id: "courtyard", label: "Deluxe Courtyard Rooms (15)" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-surface-container-lowest/10 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-white/10 shadow-lg">
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((f) => {
          const isActive = activeFilter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onFilterChange(f.id)}
              className={`px-4 py-2.5 rounded-lg font-label-button text-xs uppercase tracking-wider transition-all cursor-pointer font-semibold ${
                isActive
                  ? "bg-noir-charcoal text-surface-container-lowest shadow-md border border-gold-metallic/40"
                  : "bg-surface-container-high/60 text-stone-300 hover:text-white hover:bg-white/15"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="hidden lg:flex items-center gap-2 px-3 text-gold-light font-label-compact text-xs">
        <CheckCircle2 className="w-4 h-4 text-gold-light shrink-0" />
        <span className="tracking-wide">Guaranteed Best Direct Tariffs &amp; Custom Concierge</span>
      </div>
    </div>
  );
}

