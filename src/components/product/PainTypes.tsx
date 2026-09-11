"use client";

import { useState } from "react";
import { painTypes } from "@/lib/content";

export function PainTypes() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-3xl">
      {painTypes.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.title} className="border-b border-line">
            <button
              type="button"
              className="flex w-full items-center justify-between py-4 text-left font-heading text-lg"
              onClick={() => setOpen(index)}
            >
              {item.title}
              <span className="text-blue">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen ? <p className="pb-4 text-[15px] leading-relaxed text-muted">{item.body}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
