import type { Metadata } from "next";
import { CartContents } from "@/components/cart/CartContents";
import { StoreShell } from "@/components/store/StoreShell";

export const metadata: Metadata = { title: "Your cart" };

export default function CartPage() {
  return (
    <StoreShell>
      <section className="page-width py-12">
        <h1 className="mb-8 text-4xl">Your cart</h1>
        <CartContents />
      </section>
    </StoreShell>
  );
}
