"use client";

export function ServicesIntro() {
  return (
    <section className="w-full bg-[#FAF7F2] py-16 sm:py-20 md:py-24 border-b border-stone-200/80">
      <div className="site-container">
        {/* Section Heading & Intro Prose */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-eyebrow-luxury text-eyebrow-luxury text-[#7a5508] uppercase tracking-[0.25em] block mb-2">
            The Essence of Refined Hospitality
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#111827] font-serif mb-4 leading-tight">
            Every Detail Executed with Impeccable Artistry
          </h2>
          <p className="font-body-md text-stone-600 text-sm sm:text-base leading-relaxed">
            At Celestal SS Grand Hotel, every milestone celebration and private residency is elevated by dedicated craft specialists. Whether hosting a multi-course culinary degustation, curating grand floral jaimala architectures, or orchestrating seamless valet arrivals, our integrated service teams ensure effortless perfection.
          </p>
        </div>

        {/* 3 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#F5EFEB] flex items-center justify-center text-[#7a5508] mb-5">
                <span className="material-symbols-outlined text-[26px]">
                  manage_accounts
                </span>
              </div>
              <h3 className="font-headline-sm text-lg sm:text-xl text-[#111827] font-serif mb-2">
                Dedicated Service Directors
              </h3>
              <p className="font-body-sm text-xs sm:text-sm text-stone-600 leading-relaxed">
                Personal coordinator assigned to every celebratory booking from conception to final departure.
              </p>
            </div>
            <div className="pt-4 mt-6 bg-[#f6f3ee] px-3.5 py-1.5 rounded-md">
              <span className="font-label-compact text-xs text-[#7a5508] font-semibold uppercase tracking-wider">
                Single Point Coordination
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#F5EFEB] flex items-center justify-center text-[#7a5508] mb-5">
                <span className="material-symbols-outlined text-[26px]">
                  room_service
                </span>
              </div>
              <h3 className="font-headline-sm text-lg sm:text-xl text-[#111827] font-serif mb-2">
                Artisanal In-House Capabilities
              </h3>
              <p className="font-body-sm text-xs sm:text-sm text-stone-600 leading-relaxed">
                Master culinary chefs, certified floral stylists, and sound engineers operating seamlessly on-site.
              </p>
            </div>
            <div className="pt-4 mt-6 bg-[#f6f3ee] px-3.5 py-1.5 rounded-md">
              <span className="font-label-compact text-xs text-[#7a5508] font-semibold uppercase tracking-wider">
                Full Operational Sovereignty
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#F5EFEB] flex items-center justify-center text-[#7a5508] mb-5">
                <span className="material-symbols-outlined text-[26px]">
                  sensor_door
                </span>
              </div>
              <h3 className="font-headline-sm text-lg sm:text-xl text-[#111827] font-serif mb-2">
                Flawless Guest Flow
              </h3>
              <p className="font-body-sm text-xs sm:text-sm text-stone-600 leading-relaxed">
                Pillarless spatial transitions, private arrival porticos, and round-the-clock operational support.
              </p>
            </div>
            <div className="pt-4 mt-6 bg-[#f6f3ee] px-3.5 py-1.5 rounded-md">
              <span className="font-label-compact text-xs text-[#7a5508] font-semibold uppercase tracking-wider">
                Dedicated Guest Sanctuaries
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

