"use client";

import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { productAccordions } from "@/lib/content";
import type { ProductAccordion } from "@/lib/product";

export function ProductAccordions({ items }: { items?: readonly ProductAccordion[] }) {
  const list = items && items.length > 0 ? items : productAccordions;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mt-6 divide-y divide-line border-y border-line">
      {list.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.title}>
            <button
              type="button"
              className="flex w-full items-center justify-between py-4 text-left font-heading text-[15px]"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              {item.title}
              <CaretDown size={18} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen ? <p className="pb-4 text-sm leading-relaxed text-muted">{item.body}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
