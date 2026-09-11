import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/product/AddToCartButton";
import { discountPercent, formatMoney, productPath, type CatalogProduct } from "@/lib/product";

export function ProductCard({ item }: { item: CatalogProduct }) {
  const href = productPath(item);
  const off = discountPercent(item);

  return (
    <article>
      <Link href={href} className="relative block overflow-hidden rounded-lg bg-white">
        {item.compareAtPrice > item.price ? (
          <span className="absolute left-3 top-3 z-10 bg-sale px-2 py-0.5 text-xs font-heading uppercase text-white">
            Sale
          </span>
        ) : null}
        <div className="relative aspect-square">
          <Image
            src={item.images[0].src}
            alt={item.images[0].alt}
            fill
            className="object-contain p-4"
            sizes="400px"
          />
        </div>
      </Link>
      <h2 className="mt-4 text-lg leading-snug">
        <Link href={href} className="hover:underline">
          {item.title}
        </Link>
      </h2>
      <p className="mt-1 text-sm text-muted">
        ★★★★★ ({item.reviewCount})
      </p>
      <p className="mt-1 text-sm">
        {item.compareAtPrice > item.price ? (
          <s className="mr-2 text-muted">{formatMoney(item.compareAtPrice)}</s>
        ) : null}
        <span>{formatMoney(item.price)}</span>
        {off > 0 ? <span className="ml-2 font-heading text-sale">{off}%</span> : null}
      </p>
      <Link href={href} className="mt-3 inline-block text-sm underline">
        View full details
      </Link>
      <div className="mt-4">
        <AddToCartButton productId={item.id} label="ADD TO CART" />
      </div>
    </article>
  );
}
