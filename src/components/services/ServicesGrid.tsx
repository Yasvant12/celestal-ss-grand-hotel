"use client";

import Image from "next/image";
import { SERVICES_DATA } from "./servicesData";
import { ServiceImagePlaceholder } from "./ServiceImagePlaceholder";

interface ServicesGridProps {
  onOpenGallery: (serviceId: number) => void;
}

export function ServicesGrid({ onOpenGallery }: ServicesGridProps) {
  return (
    <section className="w-full bg-[#fcf9f4] py-16 sm:py-20 md:py-24">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="font-eyebrow-luxury text-eyebrow-luxury text-[#7a5508] uppercase tracking-[0.25em] block mb-2">
              Disciplines &amp; Portfolios
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#111827] font-serif leading-tight">
              Signature Service Collections
            </h2>
          </div>
          <p className="font-label-compact text-xs sm:text-sm text-stone-500 max-w-sm md:text-right">
            Explore each service gallery, or view a placeholder while verified photographs are being prepared.
          </p>
        </div>

        {/* 4-Column Responsive Grid (8 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {SERVICES_DATA.map((service) => {
            const coverPhoto = service.photos[0] ?? service.coverImage;
            const realPhotoCount = service.photos.length;

            return (
              <article
                key={service.id}
                onClick={() => onOpenGallery(service.id)}
                className="group cursor-pointer bg-white rounded-xl border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden transform hover:-translate-y-1.5"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111827]">
                  {coverPhoto ? (
                    <>
                      <Image
                        src={coverPhoto.src}
                        alt={coverPhoto.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/85 via-transparent to-transparent" />
                    </>
                  ) : (
                    <ServiceImagePlaceholder serviceTitle={service.title} />
                  )}

                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#111827]/85 backdrop-blur-md rounded font-eyebrow-luxury text-[10px] text-[#E8D3A2] uppercase tracking-wider border border-[#B38728]/40 shadow-sm">
                    {realPhotoCount > 0
                      ? `${realPhotoCount} ${realPhotoCount === 1 ? "Photo" : "Photos"}`
                      : "Photos Coming Soon"}
                  </span>

                  {realPhotoCount > 0 && (
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#7a5508] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                      <span className="material-symbols-outlined text-[16px]">
                        visibility
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-eyebrow-luxury text-[10px] text-[#7a5508] uppercase tracking-widest block mb-1 font-semibold">
                      {service.category}
                    </span>
                    <h3 className="font-headline-sm text-base sm:text-lg text-[#111827] font-serif font-semibold group-hover:text-[#7a5508] transition-colors mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="font-body-sm text-xs sm:text-sm text-stone-600 line-clamp-3 mb-4 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="w-full py-2.5 bg-[#7a5508] group-hover:bg-[#7B5719] text-white rounded font-label-button text-[11px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm font-semibold cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        photo_library
                      </span>
                      <span>{realPhotoCount > 0 ? "View Photo Gallery" : "View Service Details"}</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
