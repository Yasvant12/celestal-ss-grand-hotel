"use client";

export function GalleryPerspectivePillars() {
  return (
    <section className="w-full bg-[#FAF7F2] py-16 md:py-24 border-t border-stone-200/80">
      <div className="site-container flex flex-col gap-12 md:gap-16">
        {/* Quote Block */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
          <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-[#7a5508]">
            Architectural Perspective
          </span>
          <blockquote className="font-headline-md text-2xl sm:text-3xl md:text-4xl text-[#111827] font-serif italic leading-snug">
            &ldquo;Every contour, every chandelier, every tranquil terrace is sculpted for serenity and timeless celebration.&rdquo;
          </blockquote>
          <span className="text-xs sm:text-sm text-stone-500 tracking-wider uppercase font-semibold">
            Celestal SS Grand Hotel • Design Philosophy
          </span>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Pillar 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-stone-200/60 flex flex-col gap-3">
            <div className="w-12 h-12 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#B38728]">
              <span className="material-symbols-outlined text-[24px]">
                domain
              </span>
            </div>
            <h4 className="font-headline-sm text-lg sm:text-xl text-[#111827] font-serif pt-1">
              Column-Free Grandeur
            </h4>
            <p className="font-body-sm text-sm text-stone-600 leading-relaxed">
              Unobstructed vistas and expansive ceiling heights across our primary celebration arenas, guaranteeing clear views from every banquet seat.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-stone-200/60 flex flex-col gap-3">
            <div className="w-12 h-12 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#B38728]">
              <span className="material-symbols-outlined text-[24px]">
                light_mode
              </span>
            </div>
            <h4 className="font-headline-sm text-lg sm:text-xl text-[#111827] font-serif pt-1">
              Bespoke Ambient Illumination
            </h4>
            <p className="font-body-sm text-sm text-stone-600 leading-relaxed">
              Layered chromatic temperature controls tailored to transform naturally from daylight clarity to twilight intimacy for photography and ambience.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-stone-200/60 flex flex-col gap-3">
            <div className="w-12 h-12 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#B38728]">
              <span className="material-symbols-outlined text-[24px]">yard</span>
            </div>
            <h4 className="font-headline-sm text-lg sm:text-xl text-[#111827] font-serif pt-1">
              Verdant Daylight Courtyards
            </h4>
            <p className="font-body-sm text-sm text-stone-600 leading-relaxed">
              Patios and private suite balconies designed to draw natural cross-ventilation and tranquil garden sceneries in the quiet core of Ashiyana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

