"use client";

import Link from "next/link";
import { List, ShoppingBag, X } from "@phosphor-icons/react";
import { useState } from "react";
import { company } from "@/lib/company";
import { useCart } from "@/context/CartProvider";

const nav = [
  { href: "/collections/all", label: "Shop" },
  { href: "/pages/reviews", label: "Reviews" },
  { href: "/pages/contact", label: "Help Center" },
  { href: "/account/login", label: "Log in" },
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-heading text-[13px] uppercase tracking-[0.22em] text-white ${className}`}
    >
      {company.productName}
    </Link>
  );
}

export function Header() {
  const { quantity, setDrawerOpen } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-navy text-white">
      <div className="page-width grid min-h-16 grid-cols-[1fr_auto_1fr] items-center gap-3 py-2.5 lg:min-h-[72px] lg:py-5">
        <div className="justify-self-start">
          <button
            type="button"
            className="p-2 lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <List size={24} />
          </button>
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] text-white/90 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <Wordmark className="justify-self-center" />

        <button
          type="button"
          className="relative justify-self-end p-2"
          aria-label="Open cart"
          onClick={() => setDrawerOpen(true)}
        >
          <ShoppingBag size={24} />
          {quantity > 0 ? (
            <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue px-1 text-[11px] font-heading text-white">
              {quantity}
            </span>
          ) : null}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-navy/40 lg:hidden" onClick={() => setOpen(false)}>
          <aside
            className="h-full w-[min(100%,22rem)] bg-white text-navy shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-4">
              <span className="font-heading text-sm uppercase tracking-[0.18em]">Menu</span>
              <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
            </div>
            <div className="flex flex-col gap-1 p-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-base hover:bg-page"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
