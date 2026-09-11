"use client";

import Image from "next/image";
import { useState } from "react";
import { product } from "@/lib/product";

export function ProductGallery() {
  const [active, setActive] = useState(0);
  const current = product.images[active];

  return (
    <div>
      <div className="relative aspect-square overflow-hidden bg-page">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 990px) 50vw, 100vw"
        />
      </div>
      <ul className="mt-3 grid grid-cols-5 gap-2 md:grid-cols-6">
        {product.images.map((image, index) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setActive(index)}
              className={`relative aspect-square overflow-hidden ${
                index === active ? "ring-2 ring-blue" : "ring-1 ring-line"
              }`}
              aria-label={`Open media ${index + 1}`}
            >
              <Image src={image.src} alt="" fill className="object-cover" sizes="120px" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
