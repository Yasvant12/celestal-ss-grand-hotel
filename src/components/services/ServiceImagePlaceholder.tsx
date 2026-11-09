import { Car, Music2 } from "lucide-react";

interface ServiceImagePlaceholderProps {
  serviceTitle: string;
  className?: string;
}

export function ServiceImagePlaceholder({
  serviceTitle,
  className = "",
}: ServiceImagePlaceholderProps) {
  const PlaceholderIcon = /valet|parking/i.test(serviceTitle) ? Car : Music2;

  return (
    <div
      role="img"
      aria-label={`Actual photographs for ${serviceTitle} are coming soon`}
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#28251f] via-[#3b352b] to-[#17191d] px-5 py-8 text-center text-surface-ivory ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute -left-12 -top-14 h-40 w-40 rounded-full bg-gold-light/10 blur-3xl"
      />
      <div className="relative flex max-w-sm flex-col items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-light/30 bg-white/5 text-gold-light">
          <PlaceholderIcon className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="font-eyebrow-luxury text-[11px] uppercase tracking-[0.18em] text-gold-light">
          Actual photographs coming soon
        </span>
        <p className="text-xs leading-relaxed text-stone-300">
          Verified {serviceTitle.toLowerCase()} photos will be added here.
        </p>
      </div>
    </div>
  );
}
