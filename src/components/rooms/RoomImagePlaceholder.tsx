import { BedDouble } from "lucide-react";

interface RoomImagePlaceholderProps {
  roomName: string;
  className?: string;
  compact?: boolean;
}

export function RoomImagePlaceholder({
  roomName,
  className = "",
  compact = false,
}: RoomImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Verified room photograph for ${roomName} is not available yet`}
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-[#2c2a27] via-[#3b352b] to-[#17191d] text-center text-surface-ivory ${className}`}
    >
      <div className="flex flex-col items-center gap-2 px-4">
        <BedDouble className="h-8 w-8 text-gold-light/80" aria-hidden="true" />
        {!compact && (
          <>
            <span className="font-eyebrow-luxury text-xs uppercase tracking-widest text-gold-light">
              Room photo coming soon
            </span>
            <span className="max-w-xs text-xs leading-relaxed text-stone-300">
              No verified {roomName.toLowerCase()} photograph has been provided yet.
            </span>
          </>
        )}
      </div>
    </div>
  );
}
