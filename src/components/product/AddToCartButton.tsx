"use client";

import { useCart } from "@/context/CartProvider";

export function AddToCartButton({
  productId,
  label = "Add to cart",
  className = "btn-primary w-full",
}: {
  productId?: string;
  label?: string;
  className?: string;
}) {
  const { add } = useCart();
  return (
    <button type="button" className={className} onClick={() => add(productId, 1)}>
      {label}
    </button>
  );
}
