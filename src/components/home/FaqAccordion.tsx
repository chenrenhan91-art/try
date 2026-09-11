"use client";

import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { faqs } from "@/lib/content";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white px-5 py-10">
      <div className="mx-auto max-w-[800px]">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-[32px] leading-tight">Frequently Asked Questions</h2>
          <p className="text-base text-muted">Still got questions? We got you.</p>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className="overflow-hidden rounded-lg border border-line bg-[#f9f9f9]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-5 py-5 text-left font-heading text-base font-semibold text-navy hover:bg-page"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{item.q}</span>
                  <CaretDown
                    size={24}
                    color="#4770db"
                    className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen ? (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-[#333]">{item.a}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
