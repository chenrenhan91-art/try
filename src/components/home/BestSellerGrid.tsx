import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { bestSellers } from "@/lib/product";

export function BestSellerGrid() {
  return (
    <section className="bg-white py-12">
      <div className="page-width">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl">Best Sellers</h2>
          <Link href="/collections/all" className="text-sm underline">
            View all
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {bestSellers.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
