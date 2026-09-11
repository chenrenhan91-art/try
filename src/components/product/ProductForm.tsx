"use client";

import { Minus, Plus } from "@phosphor-icons/react";
import { useState } from "react";
import { useCart } from "@/context/CartProvider";
import type { CatalogProduct } from "@/lib/product";

export function ProductForm({ product }: { product: CatalogProduct }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <form
      className="mt-6"
      onSubmit={(event) => {
        event.preventDefault();
        add(product.id, qty);
      }}
    >
      <label className="mb-2 block text-sm" htmlFor="product-qty">
        Quantity
      </label>
      <div className="quantity-selector">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => setQty((value) => Math.max(1, value - 1))}
        >
          <Minus size={16} />
        </button>
        <input
          id="product-qty"
          type="number"
          min={1}
          value={qty}
          onChange={(event) => {
            const next = Number.parseInt(event.target.value, 10);
            setQty(Number.isFinite(next) && next > 0 ? next : 1);
          }}
        />
        <button type="button" aria-label="Increase quantity" onClick={() => setQty((value) => value + 1)}>
          <Plus size={16} />
        </button>
      </div>
      <button type="submit" className="btn-primary mt-4 w-full">
        ADD TO CART
      </button>
    </form>
  );
}
