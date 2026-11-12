"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What are the standard check-in and check-out timings for guest rooms?",
    answer:
      "Check-in is from 14:00 hrs and check-out is until 11:00 hrs. Early check-in and late check-out requests are accommodated based on room availability and can be arranged with our 24/7 concierge desk.",
  },
  {
    question: "How far in advance should banquet halls and celebration lawns be reserved?",
    answer:
      "For weddings, gala receptions, and corporate conferences, we recommend booking 3 to 6 months in advance. We can tentatively hold your preferred date for up to 72 hours upon submitting an event enquiry.",
  },
  {
    question: "What is the cancellation and rescheduling policy for rooms and event bookings?",
    answer:
      "Individual room reservations can be cancelled or rescheduled free of charge up to 48 hours prior to arrival. Banquet and group block cancellation terms are customised and clearly detailed in your event booking contract.",
  },
  {
    question: "Are customised catering menus and pre-event food tastings offered?",
    answer:
      "Yes. Our culinary brigade prepares customised menus including continental, pan-Asian, and North Indian specialities, with private food tasting sessions available for wedding and banquet hosts.",
  },
  {
    question: "What parking and transit arrangements are provided for event guests?",
    answer:
      "We offer on-site valet parking, 24/7 CCTV surveillance, and security marshals. Please contact our team to discuss parking arrangements for your event. Private airport transfers can also be arranged.",
  },
  {
    question: "Can external decor and audiovisual production vendors be engaged?",
    answer:
      "We collaborate with premier decor and AV partners and also welcome verified outside event production vendors upon prior alignment with our banquet operations team.",
  },
];

export function ContactFAQSection() {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-surface py-16 sm:py-20 md:py-24" id="faq-section">
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-champagne rounded-full mb-1">
            <HelpCircle className="w-3.5 h-3.5 text-gold-deep" />
            <span className="font-eyebrow-luxury text-eyebrow-luxury text-gold-deep tracking-widest uppercase">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight font-medium">
            Common Enquiries &amp; Booking Guidance
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant pt-1 leading-relaxed">
            Clear answers regarding room reservations, grand celebrations, banquet policies, and concierge coordination.
          </p>
        </motion.div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm hover:border-[#9a7126]/40 transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer list-none select-none font-headline-sm text-base sm:text-lg text-on-surface hover:text-primary transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-surface-champagne text-primary" : "text-stone-400"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-stone-600 font-body-md text-sm sm:text-base leading-relaxed border-t border-stone-100 bg-[#FAF7F2]/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
