"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { products, type CatalogProduct } from "@/lib/product";

const STORAGE_KEY = "fz-cart-v2";
const LEGACY_KEY = "fz-cart-qty";

type QtyMap = Record<string, number>;

export type CartLine = {
  product: CatalogProduct;
  quantity: number;
};

type CartContextValue = {
  ready: boolean;
  lines: CartLine[];
  quantity: number;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  add: (productId?: string, qty?: number) => void;
  setLineQuantity: (productId: string, qty: number) => void;
  setQuantity: (qty: number) => void;
  clear: () => void;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

function byId(id: string) {
  return products.find((item) => item.id === id);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [qtys, setQtys] = useState<QtyMap>({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as QtyMap;
        setQtys(parsed && typeof parsed === "object" ? parsed : {});
        setReady(true);
        return;
      } catch {
        // fall through to legacy
      }
    }
    const legacy = window.localStorage.getItem(LEGACY_KEY);
    const parsedLegacy = legacy ? Number.parseInt(legacy, 10) : 0;
    if (Number.isFinite(parsedLegacy) && parsedLegacy > 0) {
      setQtys({ [products[0].id]: parsedLegacy });
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(qtys));
  }, [qtys, ready]);

  const add = useCallback((productId = products[0].id, qty = 1) => {
    setQtys((current) => ({
      ...current,
      [productId]: (current[productId] ?? 0) + qty,
    }));
    setDrawerOpen(true);
  }, []);

  const setLineQuantity = useCallback((productId: string, qty: number) => {
    setQtys((current) => {
      const next = { ...current };
      if (qty <= 0) delete next[productId];
      else next[productId] = qty;
      return next;
    });
  }, []);

  const setQuantity = useCallback((qty: number) => {
    setLineQuantity(products[0].id, qty);
  }, [setLineQuantity]);

  const clear = useCallback(() => setQtys({}), []);

  const lines = useMemo<CartLine[]>(
    () =>
      Object.entries(qtys)
        .map(([id, quantity]) => {
          const found = byId(id);
          if (!found || quantity <= 0) return null;
          return { product: found, quantity };
        })
        .filter((line): line is CartLine => line !== null),
    [qtys],
  );

  const quantity = lines.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);

  const value = useMemo(
    () => ({
      ready,
      lines,
      quantity,
      drawerOpen,
      setDrawerOpen,
      add,
      setLineQuantity,
      setQuantity,
      clear,
      subtotal,
    }),
    [ready, lines, quantity, drawerOpen, add, setLineQuantity, setQuantity, clear, subtotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
