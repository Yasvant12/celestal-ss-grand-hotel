"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { getHeroBackgroundImageForPage } from "@/lib/constants";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  title: React.ReactNode;
  subtitle: string;
  backgroundImage?: string;
  eyebrow?: string;
  breadcrumb?: BreadcrumbItem[];
  conciergeBadge?: boolean;
  badgeText?: string;
  children?: React.ReactNode;
  pageKey?: string;
}

export function PageHero({
  title,
  subtitle,
  backgroundImage,
  eyebrow,
  breadcrumb = [{ label: "Home", href: "/" }],
  conciergeBadge = true,
  badgeText = "Reservations Desk",
  children,
  pageKey = "page",
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const resolvedBackgroundImage = backgroundImage || getHeroBackgroundImageForPage(pageKey);

  return (
    <section className="relative w-full overflow-hidden bg-noir-charcoal text-surface-container-lowest">
      <div className="absolute inset-0 z-0">
        <Image
          src={resolvedBackgroundImage}
          alt="Celestal SS Grand Hotel"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1115]/70 via-[#0d1115]/25 to-[#0d1115]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1115]/45 via-transparent to-[#0d1115]/15" />
      </div>

      <div className="relative z-10 site-container flex min-h-[820px] flex-col justify-end pb-12 pt-8 sm:min-h-[760px] sm:pb-16 sm:pt-12 md:min-h-[700px] md:pb-20 lg:min-h-[640px] lg:pt-14">
        {breadcrumb && breadcrumb.length > 0 && (
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2 pb-4 font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-gold-light sm:pb-6"
          >
            {breadcrumb.map((item, idx) => {
              const isLast = idx === breadcrumb.length - 1;
              return (
                <div key={`${item.label}-${idx}`} className="flex items-center gap-2">
                  {idx > 0 && <span className="text-stone-400">/</span>}
                  {item.href && !isLast ? (
                    <Link href={item.href} className="transition-colors hover:text-surface-container-lowest">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-bold text-surface-container-lowest">{item.label}</span>
                  )}
                </div>
              );
            })}
          </motion.nav>
        )}

        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3 lg:col-span-8"
          >
            {eyebrow && (
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-1 shadow-sm backdrop-blur-md">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-gold-metallic" />
                <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-gold-light">
                  {eyebrow}
                </span>
              </div>
            )}

            <h1 className="mt-1 text-3xl font-medium tracking-tight text-surface-container-lowest sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.08]">
              {title}
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-stone-300 sm:text-base md:text-lg">
              {subtitle}
            </p>
          </motion.div>

          {conciergeBadge && (
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex lg:col-span-4 lg:justify-end"
            >
              <div className="flex items-center gap-2.5 rounded-full border border-gold-metallic/30 bg-noir-charcoal/80 px-4 py-2.5 text-surface-container-lowest shadow-lg backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-whatsapp-brand" />
                <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest">
                  {badgeText}
                </span>
              </div>
            </motion.div>
          )}
        </div>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 sm:mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
