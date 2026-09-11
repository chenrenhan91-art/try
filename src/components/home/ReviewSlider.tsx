"use client";

import Image from "next/image";
import Link from "next/link";
import { CaretLeft, CaretRight, Star } from "@phosphor-icons/react";
import { useRef } from "react";
import { reviews } from "@/lib/content";

export function ReviewSlider({
  heading = "Tons of High Rated Customers",
  ctaHref = "/pages/reviews",
  ctaLabel = "Read all reviews",
}: {
  heading?: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollBy({ left: dir * (width * 0.8), behavior: "smooth" });
  };

  return (
    <section className="bg-white py-6">
      <div className="px-5 pb-10 text-center">
        <p className="mb-2 text-base text-navy">★★★★★ 4.8/5</p>
        <h2 className="text-[30px] leading-tight">{heading}</h2>
      </div>
      <div className="relative">
        <button
          type="button"
          aria-label="Previous reviews"
          className="absolute left-6 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] md:flex"
          onClick={() => scroll(-1)}
        >
          <CaretLeft size={24} />
        </button>
        <button
          type="button"
          aria-label="Next reviews"
          className="absolute right-6 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] md:flex"
          onClick={() => scroll(1)}
        >
          <CaretRight size={24} />
        </button>
        <div
          ref={trackRef}
          className="hide-scrollbar flex gap-5 overflow-x-auto px-5 pb-4 md:px-16"
        >
          {reviews.map((review) => (
            <article
              key={review.title}
              className="flex w-[78%] shrink-0 flex-col gap-4 rounded-xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.1)] md:w-[calc((100%-40px)/3)]"
            >
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src={review.image}
                  alt=""
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5 text-star">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} weight="fill" />
                  ))}
                </div>
                <h3 className="truncate text-base font-semibold">{review.title}</h3>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-black">{review.body}</p>
              <p className="text-[13px] italic text-muted">- {review.author}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-8 pb-6 text-center">
        <Link href={ctaHref} className="btn-pill">
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
