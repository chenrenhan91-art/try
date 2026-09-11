"use client";

import { useCart } from "@/context/CartProvider";

export function AddToCartButton({
  label = "Add to cart",
  className = "btn-primary w-full",
}: {
  label?: string;
  className?: string;
}) {
  const { add } = useCart();
  return (
    <button type="button" className={className} onClick={() => add(1)}>
      {label}
    </button>
  );
}
