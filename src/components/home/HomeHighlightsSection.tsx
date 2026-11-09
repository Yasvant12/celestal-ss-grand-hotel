import { HOTEL_INFO } from "@/lib/constants";

const highlights = [
  { icon: "domain", value: HOTEL_INFO.stats.lawnCapacity, label: "Celebration Lawn" },
  { icon: "celebration", value: HOTEL_INFO.stats.acBanquetCapacity, label: "AC Banquet" },
  { icon: "bed", value: HOTEL_INFO.stats.luxuryRooms, label: "Luxury Rooms" },
  { icon: "star", value: HOTEL_INFO.stats.rating, label: "Guest Rating" },
];

export function HomeHighlightsSection() {
  return (
    <section className="w-full border-b border-outline-variant/40 bg-surface-container-low py-6 sm:py-8">
      <div className="site-container flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-outline-variant/60 bg-surface px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary-fixed-dim" />
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-on-surface-variant">
              Kursi Road, Lucknow
            </span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-outline-variant/60 bg-surface px-4 py-2">
            <span
              className="material-symbols-outlined text-[18px] text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
              aria-hidden="true"
            >
              workspace_premium
            </span>
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-on-surface-variant">
              60 Rooms • 5 Banquet Halls • 2 Lawn
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 sm:gap-4">
          {highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="flex items-center gap-3 rounded-xl border border-outline-variant/50 bg-surface px-4 py-3 shadow-sm"
            >
              <span className="material-symbols-outlined text-[28px] text-primary" aria-hidden="true">
                {highlight.icon}
              </span>
              <div className="flex min-w-0 flex-col">
                <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  {highlight.value}
                </span>
                <span className="font-label-compact text-label-compact uppercase text-on-surface-variant">
                  {highlight.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
