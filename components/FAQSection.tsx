"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">faqs</p>
          <h2 className="mt-3 font-display text-3xl text-slate-900 sm:text-4xl">
            Planning your ritual with ease
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600">
            Explore our most-asked questions about availability, packages, and care routines.
            Need something bespoke? Submit the booking form and our concierge will respond within
            24 hours.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={faq.question} className="overflow-hidden rounded-3xl border border-slate-100">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-slate-800">{faq.question}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-sm font-semibold text-slate-500">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 bg-slate-50 px-6 py-5 text-sm text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
