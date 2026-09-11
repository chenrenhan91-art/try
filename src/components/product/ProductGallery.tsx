"use client";

import Image from "next/image";
import { CaretLeft, CaretRight, MagnifyingGlassPlus, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import type { ProductImage } from "@/lib/product";

export function ProductGallery({ images }: { images: readonly ProductImage[] }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const current = images[active];

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowLeft") setActive((index) => (index - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") setActive((index) => (index + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, images.length]);

  const go = (dir: -1 | 1) => {
    setActive((index) => (index + dir + images.length) % images.length);
  };

  return (
    <div>
      <button
        type="button"
        className="relative aspect-square w-full overflow-hidden bg-white"
        onClick={() => setOpen(true)}
        aria-label={`Open media ${active + 1} in modal`}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority
          className="object-contain"
          sizes="(min-width: 990px) 50vw, 100vw"
        />
        <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy shadow">
          <MagnifyingGlassPlus size={20} />
        </span>
      </button>
      <ul className="mt-3 grid grid-cols-5 gap-2 md:grid-cols-6">
        {images.map((image, index) => (
          <li key={`${image.src}-${index}`}>
            <button
              type="button"
              onClick={() => {
                setActive(index);
                setOpen(true);
              }}
              className={`relative aspect-square w-full overflow-hidden bg-white ${
                index === active ? "ring-2 ring-blue" : "ring-1 ring-line"
              }`}
              aria-label={`Open media ${index + 1} in modal`}
            >
              <Image src={image.src} alt="" fill className="object-cover" sizes="120px" />
            </button>
          </li>
        ))}
      </ul>

      {open ? (
        <div className="fixed inset-0 z-[60] flex flex-col bg-navy/95 text-white" role="dialog" aria-modal="true">
          <div className="flex items-center justify-between px-5 py-4">
            <p className="text-sm">
              {active + 1} / {images.length}
            </p>
            <button type="button" aria-label="Close" onClick={() => setOpen(false)} className="p-2">
              <X size={28} />
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-14 pb-8">
            <button
              type="button"
              className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy"
              aria-label="Previous"
              onClick={() => go(-1)}
            >
              <CaretLeft size={24} />
            </button>
            <div className="relative h-full w-full max-w-4xl">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <button
              type="button"
              className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy"
              aria-label="Next"
              onClick={() => go(1)}
            >
              <CaretRight size={24} />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
