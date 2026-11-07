"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeritageSection() {
  const shouldReduceMotion = useReducedMotion();
  const ballroomImg =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDZjKzg9C6iYmQ-kepw9lzGGtMp6JXHhMXr1mphAZa3j8Lu68U-iSd6cy33P_Duo_nXb7wbJG7vpcLlSdwHnjyd6cGhfNvMQkReVkU--d2qM072illczkYJ2LgEWWYq3w8-UlNEIxL3r2SOz-HTJwqCuliONMqgN1NUdvzpm3BDvEKxMTOG20HlGreVgmq3VGH-Tj3wwmbf4MQVKofl5rHB5JkfJOvayHDgmCC0BUo";
  const lawnImg =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAlvzaplgRDPD8LjZKUbn4npjt4LijDd4XXmxNCjx6CiCmSm4Gk7DtbiVQocOhX0BEBQZa5QQN1A0hOfZiauCYHocjtl0RcsxPVYZrIIeNU6eiMXAUZaIKCu0T3qJ2FSVg-CfIdYuw8YKvrrXfLTnBvKRXFhHvfOo29QBBIdcJY51RgZzYUl5_45k-fYvprlnhTY-dMJdqM3LJ1UJJRsSYbyZalhHvzFozj8AblTpE";

  return (
    <section className="w-full py-space-3xl bg-surface overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          {/* Left Editorial Story */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col gap-space-md"
          >
            <div className="inline-flex items-center gap-2 text-primary font-eyebrow-luxury text-eyebrow-luxury uppercase">
              <span className="w-8 h-[2px] bg-primary" />
              <span>About Celestal SS Grand Hotel</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Best Banquet Hall in LDA Colony, Lucknow
            </h2>
            <div className="space-y-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed">
              <p className="font-title-editorial text-title-editorial text-primary font-semibold">
                Elevate Your Celebrations with Luxury &amp; Elegance
              </p>
              <p>
                Looking for the best banquet hall in LDA Colony to host your dream event? Our premium luxury banquet hall in Lucknow offers a perfect setting for weddings, receptions, corporate gatherings, and special celebrations. Designed with elegance and modern amenities, our venue ensures a seamless and grand experience for you and your guests.
              </p>
              <p>
                Celebrate your big day at our beautifully designed marriage hall in Celestal SS Grand Hotel located in LDA Colony of Lucknow, equipped with sophisticated décor, spacious seating, and top-class catering services. Whether it’s a traditional wedding or a contemporary event, our expert event planners ensure that every detail is executed flawlessly.
              </p>
              <p>
                As a premier wedding hotel in Lucknow, we provide an all-in-one venue for your wedding functions, including engagement parties, mehendi ceremonies, receptions, and post-wedding celebrations. Our dedicated team takes care of everything—from customized decorations to gourmet catering—to make your wedding truly unforgettable.
              </p>
            </div>
            <div className="pt-space-sm flex flex-wrap items-center gap-space-md">
              <a
                className="inline-flex items-center gap-space-xs px-6 py-3 rounded-lg bg-surface-champagne text-on-surface hover:bg-surface-container-high font-label-button text-label-button uppercase transition-all duration-200 hover:scale-[1.02] active:scale-[0.99]"
                href="#inquiry-form-section"
              >
                <span>Book An In-Person Venue Tour</span>
                <span className="material-symbols-outlined text-primary text-[18px]">explore</span>
              </a>
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-compact text-label-compact">
                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                <span>All-In-One Marriage &amp; Accommodation Hub</span>
              </div>
            </div>
          </motion.div>

          {/* Right Curated Multi-Image Luxury Grid */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-2 gap-space-md relative">
              {/* Large Image Top Left */}
              <div className="col-span-2 overflow-hidden rounded-xl shadow-lg relative group">
                <div
                  className="w-full h-80 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${ballroomImg}')` }}
                  aria-label="The Grand Darbar Ballroom"
                />
                <div className="absolute bottom-4 left-4 right-4 p-space-sm rounded-lg bg-noir-charcoal/80 backdrop-blur-md text-surface-ivory flex justify-between items-center shadow-md">
                  <span className="font-label-button text-label-button uppercase tracking-wider text-gold-light">
                    The Grand Darbar Ballroom
                  </span>
                  <span className="font-label-compact text-label-compact">Capacity: 400 Guests</span>
                </div>
              </div>

              {/* Bottom Left Image */}
              <div className="overflow-hidden rounded-xl shadow-md relative group">
                <div
                  className="w-full h-56 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${lawnImg}')` }}
                  aria-label="Celebration Lawn"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-noir-charcoal/80 text-surface-ivory font-label-compact text-label-compact backdrop-blur-sm">
                  Celebration Lawn (800+)
                </div>
              </div>

              {/* Bottom Right Stats Card */}
              <div className="rounded-xl bg-surface-champagne p-space-lg flex flex-col justify-center gap-space-sm shadow-md border border-surface-container-highest/40 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">stars</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Royal Standard of Ashiyana
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Dedicated in-house event planning, customized multi-cuisine chef banquets, state-of-the-art climate control, and complete guest safety.
                </p>
                <a
                  href="#inquiry-form-section"
                  className="pt-2 flex items-center gap-2 text-primary font-label-button text-label-button uppercase hover:text-gold-deep transition-colors"
                >
                  <span>View Full Brochure</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
