import type { Metadata } from "next";
import { ProductView } from "@/components/product/ProductView";
import { StoreShell } from "@/components/store/StoreShell";
import { product } from "@/lib/product";

export const metadata: Metadata = {
  title: product.title,
  description:
    "Heated compression hand massager. $79.99, 90-day guarantee, free US shipping.",
};

export default function ProductPage() {
  return (
    <StoreShell>
      <ProductView />
    </StoreShell>
  );
}
