import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductView } from "@/components/product/ProductView";
import { StoreShell } from "@/components/store/StoreShell";
import { allProductHandles, getProductByHandle } from "@/lib/product";

type Props = {
  params: Promise<{ handle: string }>;
};

export function generateStaticParams() {
  return allProductHandles().map((handle) => ({ handle }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const item = getProductByHandle(handle);
  if (!item) return { title: "Product" };
  return {
    title: item.title,
    description: item.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;
  const item = getProductByHandle(handle);
  if (!item) notFound();

  return (
    <StoreShell>
      <ProductView product={item} />
    </StoreShell>
  );
}
