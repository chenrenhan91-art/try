import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AddToCartButton } from "@/components/product/AddToCartButton";
import { StoreShell } from "@/components/store/StoreShell";
import { formatMoney, productPath, products } from "@/lib/product";

export const metadata: Metadata = {
  title: "Products",
};

export default function CollectionPage() {
  return (
    <StoreShell>
      <section className="page-width py-12">
        <h1 className="mb-2 text-4xl">Collection: Products</h1>
        <p className="mb-8 text-muted">{products.length} product{products.length === 1 ? "" : "s"}</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <article key={item.id}>
              <Link href={productPath(item)} className="block overflow-hidden rounded-[1.8rem] bg-page">
                <div className="relative aspect-square">
                  {item.compareAtPrice > item.price ? (
                    <span className="absolute left-3 top-3 z-10 bg-sale px-2 py-0.5 text-xs font-heading uppercase text-white">
                      Sale
                    </span>
                  ) : null}
                  <Image
                    src={item.images[0].src}
                    alt={item.images[0].alt}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>
              </Link>
              <h2 className="mt-4 text-lg">
                <Link href={productPath(item)}>{item.title}</Link>
              </h2>
              <p className="mt-1 text-sm">
                {item.compareAtPrice > item.price ? (
                  <span className="mr-2 text-muted line-through">{formatMoney(item.compareAtPrice)}</span>
                ) : null}
                {formatMoney(item.price)}
              </p>
              <div className="mt-4">
                <AddToCartButton productId={item.id} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </StoreShell>
  );
}
