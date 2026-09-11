import type { Metadata } from "next";
import { ProductGrid } from "@/components/product/ProductGrid";
import { StoreShell } from "@/components/store/StoreShell";

export const metadata: Metadata = {
  title: "Home page",
};

export default function FrontpageCollectionPage() {
  return (
    <StoreShell>
      <ProductGrid title="Collection: Home page" />
    </StoreShell>
  );
}
