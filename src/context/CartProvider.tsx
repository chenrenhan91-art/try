"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { product } from "@/lib/product";

const STORAGE_KEY = "fz-cart-qty";

type CartContextValue = {
  ready: boolean;
  quantity: number;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  add: (qty?: number) => void;
  setQuantity: (qty: number) => void;
  clear: () => void;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [quantity, setQty] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? Number.parseInt(raw, 10) : 0;
    setQty(Number.isFinite(parsed) && parsed > 0 ? parsed : 0);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, String(quantity));
  }, [quantity, ready]);

  const add = useCallback((qty = 1) => {
    setQty((current) => current + qty);
    setDrawerOpen(true);
  }, []);

  const setQuantity = useCallback((qty: number) => {
    setQty(Math.max(0, qty));
  }, []);

  const clear = useCallback(() => setQty(0), []);

  const value = useMemo(
    () => ({
      ready,
      quantity,
      drawerOpen,
      setDrawerOpen,
      add,
      setQuantity,
      clear,
      subtotal: quantity * product.price,
    }),
    [ready, quantity, drawerOpen, add, setQuantity, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
