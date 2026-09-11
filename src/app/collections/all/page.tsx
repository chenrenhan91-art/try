import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AddToCartButton } from "@/components/product/AddToCartButton";
import { StoreShell } from "@/components/store/StoreShell";
import { formatMoney, product } from "@/lib/product";

export const metadata: Metadata = {
  title: "Products",
};

export default function CollectionPage() {
  return (
    <StoreShell>
      <section className="page-width py-12">
        <h1 className="mb-8 text-4xl">Collection: Products</h1>
        <article className="max-w-sm">
          <Link href="/products/hand-massager" className="block overflow-hidden rounded-[1.8rem] bg-page">
            <div className="relative aspect-square">
              <span className="absolute left-3 top-3 z-10 bg-sale px-2 py-0.5 text-xs font-heading uppercase text-white">
                Sale
              </span>
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt}
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          </Link>
          <h2 className="mt-4 text-lg">
            <Link href="/products/hand-massager">{product.title}</Link>
          </h2>
          <p className="mt-1 text-sm">
            <span className="mr-2 text-muted line-through">{formatMoney(product.compareAtPrice)}</span>
            {formatMoney(product.price)}
          </p>
          <div className="mt-4">
            <AddToCartButton />
          </div>
        </article>
      </section>
    </StoreShell>
  );
}
