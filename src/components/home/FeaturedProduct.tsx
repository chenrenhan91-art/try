import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/product/AddToCartButton";
import { formatMoney, product, productPath } from "@/lib/product";

export function FeaturedProduct() {
  const href = productPath(product);

  return (
    <section className="bg-white py-12">
      <div className="page-width grid items-center gap-10 lg:grid-cols-2">
        <Link href={href} className="relative block aspect-square overflow-hidden bg-page">
          {product.compareAtPrice > product.price ? (
            <span className="absolute left-4 top-4 z-10 bg-sale px-2 py-0.5 text-xs font-heading uppercase text-white">
              Sale
            </span>
          ) : null}
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            fill
            className="object-contain p-8"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </Link>
        <div>
          <p className="text-sm text-navy">
            ★★★★★ Excellent {product.rating} | {product.reviewCount.toLocaleString()} Reviews
          </p>
          <h2 className="mt-2 text-4xl">
            <Link href={href} className="hover:underline">
              {product.title}
            </Link>
          </h2>
          <div className="mt-4 flex flex-wrap items-baseline gap-3">
            <s className="text-xl text-muted">{formatMoney(product.compareAtPrice)}</s>
            <span className="text-2xl">{formatMoney(product.price)}</span>
            <span className="bg-sale px-2 py-0.5 text-xs font-heading uppercase tracking-wide text-white">
              Sale
            </span>
          </div>
          <p className="mt-6 max-w-[65ch] text-[1.05rem] leading-relaxed text-navy/80">
            {product.description}
          </p>
          <div className="mt-6 max-w-md">
            <AddToCartButton productId={product.id} label="ADD TO CART" />
          </div>
          <Link href={href} className="mt-4 inline-block text-sm underline">
            View full details
          </Link>
        </div>
      </div>
    </section>
  );
}
