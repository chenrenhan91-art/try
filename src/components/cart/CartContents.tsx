"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus } from "@phosphor-icons/react";
import { useCart } from "@/context/CartProvider";
import { formatMoney, product } from "@/lib/product";

export function CartContents() {
  const { ready, quantity, setQuantity, subtotal } = useCart();

  if (!ready) {
    return <p className="py-16 text-center text-muted">Loading cart.</p>;
  }

  if (quantity === 0) {
    return (
      <div className="py-16 text-center">
        <h2 className="mb-6 text-2xl">Your cart is empty</h2>
        <Link href="/collections/all" className="btn-primary">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <div className="flex gap-5 border-b border-line py-6">
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          width={120}
          height={120}
          className="h-[120px] w-[120px] object-cover"
        />
        <div className="flex-1">
          <Link href="/products/hand-massager" className="font-heading text-lg hover:underline">
            {product.title}
          </Link>
          <p className="mt-1 text-sm text-muted">{formatMoney(product.price)}</p>
          <div className="mt-4 inline-flex items-center rounded-full border border-line">
            <button type="button" className="p-2" onClick={() => setQuantity(quantity - 1)} aria-label="Decrease">
              <Minus size={14} />
            </button>
            <span className="min-w-8 text-center text-sm">{quantity}</span>
            <button type="button" className="p-2" onClick={() => setQuantity(quantity + 1)} aria-label="Increase">
              <Plus size={14} />
            </button>
          </div>
          <button type="button" className="ml-4 text-sm underline" onClick={() => setQuantity(0)}>
            Remove
          </button>
        </div>
        <p className="font-heading">{formatMoney(product.price * quantity)}</p>
      </div>
      <aside className="h-fit bg-page p-6">
        <div className="mb-2 flex justify-between">
          <h2 className="text-lg">Estimated total</h2>
          <p>{formatMoney(subtotal)}</p>
        </div>
        <p className="mb-5 text-sm text-muted">Taxes and shipping calculated at checkout.</p>
        <Link href="/checkout" className="btn-primary w-full">
          Check out
        </Link>
      </aside>
    </div>
  );
}
