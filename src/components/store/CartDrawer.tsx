"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "@phosphor-icons/react";
import { useCart } from "@/context/CartProvider";
import { formatMoney } from "@/lib/product";

export function CartDrawer() {
  const { drawerOpen, setDrawerOpen, lines, quantity, setLineQuantity, subtotal } = useCart();

  if (!drawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-navy/40"
        aria-label="Close cart"
        onClick={() => setDrawerOpen(false)}
      />
      <aside className="absolute right-0 top-0 flex h-full w-[min(100%,28rem)] flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="text-xl">Your cart</h2>
          <button type="button" aria-label="Close cart" onClick={() => setDrawerOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {quantity === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
            <h2 className="text-2xl">Your cart is empty</h2>
            <Link href="/collections/all" className="btn-primary" onClick={() => setDrawerOpen(false)}>
              Continue shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-5">
              {lines.map((line) => (
                <div key={line.product.id} className="mb-5 flex gap-4">
                  <Image
                    src={line.product.images[0].src}
                    alt={line.product.images[0].alt}
                    width={88}
                    height={88}
                    className="h-[88px] w-[88px] object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-heading text-[15px]">{line.product.title}</p>
                    <p className="mt-1 text-sm text-muted">{formatMoney(line.product.price)}</p>
                    <div className="mt-3 inline-flex items-center rounded-full border border-line">
                      <button
                        type="button"
                        className="p-2"
                        aria-label="Decrease quantity"
                        onClick={() => setLineQuantity(line.product.id, line.quantity - 1)}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="min-w-8 text-center text-sm">{line.quantity}</span>
                      <button
                        type="button"
                        className="p-2"
                        aria-label="Increase quantity"
                        onClick={() => setLineQuantity(line.product.id, line.quantity + 1)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-line px-5 py-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg">Estimated total</h2>
                <p className="text-lg">{formatMoney(subtotal)}</p>
              </div>
              <p className="mb-4 text-sm text-muted">Taxes and shipping calculated at checkout.</p>
              <Link href="/checkout" className="btn-primary w-full" onClick={() => setDrawerOpen(false)}>
                Check out
              </Link>
              <Link
                href="/cart"
                className="mt-3 block text-center text-sm underline"
                onClick={() => setDrawerOpen(false)}
              >
                View cart
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
