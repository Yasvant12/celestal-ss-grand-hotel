"use client";

import { useState } from "react";

interface FloatingAvailabilityBarProps {
  onCheckAvailability?: (date: string, occasion: string, guests: string) => void;
}

export function FloatingAvailabilityBar({ onCheckAvailability }: FloatingAvailabilityBarProps) {
  const [eventDate, setEventDate] = useState("2025-11-20");
  const [checkoutDate, setCheckoutDate] = useState("2025-11-22");
  const [occasion, setOccasion] = useState("wedding");
  const [guests, setGuests] = useState("100-300");

  const handleAction = () => {
    if (onCheckAvailability) {
      onCheckAvailability(eventDate, occasion, guests);
    }
  };

  return (
    <section className="relative z-20 site-container -mt-14 mb-space-2xl">
      <div className="w-full bg-surface-container-lowest rounded-xl shadow-2xl p-space-md md:p-space-lg flex flex-col lg:flex-row items-center gap-space-md border border-surface-container-highest/60">
        {/* Date Partition */}
        <div className="w-full lg:w-1/4 flex items-center gap-space-sm px-space-sm py-2 bg-surface-container-low rounded-lg">
          <span className="material-symbols-outlined text-primary text-[24px]">calendar_today</span>
          <div className="flex flex-col flex-1">
            <label className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-on-surface-variant" htmlFor="event-date">
              Check-In / Event Date
            </label>
            <input
              className="bg-transparent font-label-button text-label-button text-on-surface outline-none cursor-pointer"
              id="event-date"
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>
        </div>

        {/* Departure / Duration Partition */}
        <div className="w-full lg:w-1/5 flex items-center gap-space-sm px-space-sm py-2 bg-surface-container-low rounded-lg">
          <span className="material-symbols-outlined text-primary text-[24px]">event_repeat</span>
          <div className="flex flex-col flex-1">
            <label className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-on-surface-variant" htmlFor="event-checkout">
              Checkout / End Date
            </label>
            <input
              className="bg-transparent font-label-button text-label-button text-on-surface outline-none cursor-pointer"
              id="event-checkout"
              type="date"
              value={checkoutDate}
              onChange={(e) => setCheckoutDate(e.target.value)}
            />
          </div>
        </div>

        {/* Event Occasion Dropdown */}
        <div className="w-full lg:w-1/4 flex items-center gap-space-sm px-space-sm py-2 bg-surface-container-low rounded-lg">
          <span className="material-symbols-outlined text-primary text-[24px]">arrow_back_ios_new</span>
          <div className="flex flex-col flex-1">
            <label className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-on-surface-variant" htmlFor="occasion-type">
              Occasion Type
            </label>
            <select
              className="bg-transparent font-label-button text-label-button text-on-surface outline-none cursor-pointer"
              id="occasion-type"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="wedding">Royal Wedding &amp; Reception</option>
              <option value="banquet">Grand Indoor Banquet</option>
              <option value="lawn">Open Celebration Lawn Party</option>
              <option value="stay">Luxury Room Stay</option>
              <option value="corporate">Executive Corporate Summit</option>
            </select>
          </div>
        </div>

        {/* Guests Capacity Partition */}
        <div className="w-full lg:w-1/5 flex items-center gap-space-sm px-space-sm py-2 bg-surface-container-low rounded-lg">
          <span className="material-symbols-outlined text-primary text-[24px]">groups</span>
          <div className="flex flex-col flex-1">
            <label className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-on-surface-variant" htmlFor="guests-count">
              Guest Capacity
            </label>
            <select
              className="bg-transparent font-label-button text-label-button text-on-surface outline-none cursor-pointer"
              id="guests-count"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option value="100-300">100 - 300 Guests</option>
              <option value="300-600">300 - 600 Guests</option>
              <option value="600-1200">600 - 1,200+ Guests</option>
              <option value="stay-individual">1 - 4 Guests (Room Stay)</option>
            </select>
          </div>
        </div>

        {/* Submit CTA */}
        <div className="w-full lg:w-auto">
          <a
            className="w-full lg:w-auto whitespace-nowrap inline-flex items-center justify-center gap-space-xs px-6 py-4 rounded-xl bg-primary text-on-primary font-label-button text-label-button uppercase tracking-wider hover:bg-gold-deep shadow-md transition-all hover:scale-[1.02]"
            href="#inquiry-form-section"
            onClick={handleAction}
          >
            <span>Check Availability &amp; Rates</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
