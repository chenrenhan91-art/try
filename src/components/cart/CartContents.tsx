"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus } from "@phosphor-icons/react";
import { useCart } from "@/context/CartProvider";
import { formatMoney, productPath } from "@/lib/product";

export function CartContents() {
  const { ready, lines, quantity, setLineQuantity, subtotal } = useCart();

  if (!ready) {
    return <p className="py-16 text-center text-muted">Loading cart.</p>;
  }

  if (quantity === 0) {
    return (
      <div className="py-16 text-center">
        <h2 className="mb-6 text-2xl">Your cart is empty</h2>
        <Link href={productPath()} className="btn-primary">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <div>
        {lines.map((line) => (
          <div key={line.product.id} className="flex gap-5 border-b border-line py-6">
            <Link href={productPath(line.product)} className="shrink-0">
              <Image
                src={line.product.images[0].src}
                alt={line.product.images[0].alt}
                width={120}
                height={120}
                className="h-[120px] w-[120px] object-cover"
              />
            </Link>
            <div className="flex-1">
              <Link href={productPath(line.product)} className="font-heading text-lg hover:underline">
                {line.product.title}
              </Link>
              <p className="mt-1 text-sm text-muted">{formatMoney(line.product.price)}</p>
              <div className="mt-4 inline-flex items-center rounded-full border border-line">
                <button
                  type="button"
                  className="p-2"
                  onClick={() => setLineQuantity(line.product.id, line.quantity - 1)}
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="min-w-8 text-center text-sm">{line.quantity}</span>
                <button
                  type="button"
                  className="p-2"
                  onClick={() => setLineQuantity(line.product.id, line.quantity + 1)}
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button
                type="button"
                className="ml-4 text-sm underline"
                onClick={() => setLineQuantity(line.product.id, 0)}
              >
                Remove
              </button>
            </div>
            <p className="font-heading">{formatMoney(line.product.price * line.quantity)}</p>
          </div>
        ))}
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
