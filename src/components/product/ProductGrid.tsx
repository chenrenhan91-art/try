import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/lib/product";

export function ProductGrid({
  title = "Products",
}: {
  title?: string;
}) {
  return (
    <section className="page-width py-12">
      <h1 className="mb-2 text-4xl">{title}</h1>
      <p className="mb-8 text-muted">
        {products.length} product{products.length === 1 ? "" : "s"}
      </p>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
