import type { Metadata } from "next";
import { ProductGrid } from "@/components/product/ProductGrid";
import { StoreShell } from "@/components/store/StoreShell";

export const metadata: Metadata = {
  title: "Products",
};

export default function ProductsIndexPage() {
  return (
    <StoreShell>
      <ProductGrid title="Products" />
    </StoreShell>
  );
}
