"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartProvider";
import { company } from "@/lib/company";
import { formatMoney, product } from "@/lib/product";

export function CheckoutForm() {
  const { ready, quantity, subtotal, clear } = useCart();
  const router = useRouter();
  const [error, setError] = useState("");
  const total = subtotal;

  useEffect(() => {
    if (ready && quantity === 0) {
      router.replace("/cart");
    }
  }, [ready, quantity, router]);

  if (!ready || quantity === 0) return null;

  return (
    <div className="grid min-h-[100dvh] bg-[#f5f5f5] lg:grid-cols-[1.1fr_0.9fr]">
      <div className="bg-white px-6 py-8 md:px-12 lg:px-16">
        <Link href="/" className="font-heading text-sm uppercase tracking-[0.22em] text-navy">
          {company.productName}
        </Link>
        <p className="mt-6 rounded-lg bg-page px-4 py-3 text-sm text-navy/80">
          Preview checkout. Payment is not processed. This is a visual order form only.
        </p>
        <form
          className="mt-8 space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const email = String(data.get("email") || "");
            if (!email.includes("@")) {
              setError("Enter a valid email.");
              return;
            }
            window.sessionStorage.setItem(
              "fz-order",
              JSON.stringify({
                email,
                quantity,
                total,
                name: `${data.get("firstName")} ${data.get("lastName")}`.trim(),
              }),
            );
            clear();
            router.push("/checkout/thank-you");
          }}
        >
          <section>
            <h2 className="mb-3 text-xl">Contact</h2>
            <label className="mb-1 block text-sm" htmlFor="email">
              Email
            </label>
            <input id="email" name="email" type="email" required className="input" placeholder="you@email.com" />
          </section>
          <section>
            <h2 className="mb-3 text-xl">Delivery</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm" htmlFor="firstName">
                  First name
                </label>
                <input id="firstName" name="firstName" required className="input" />
              </div>
              <div>
                <label className="mb-1 block text-sm" htmlFor="lastName">
                  Last name
                </label>
                <input id="lastName" name="lastName" required className="input" />
              </div>
            </div>
            <div className="mt-3">
              <label className="mb-1 block text-sm" htmlFor="address">
                Address
              </label>
              <input id="address" name="address" required className="input" />
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <div>
                <label className="mb-1 block text-sm" htmlFor="city">
                  City
                </label>
                <input id="city" name="city" required className="input" />
              </div>
              <div>
                <label className="mb-1 block text-sm" htmlFor="region">
                  Region
                </label>
                <input id="region" name="region" required className="input" />
              </div>
              <div>
                <label className="mb-1 block text-sm" htmlFor="zip">
                  Postal code
                </label>
                <input id="zip" name="zip" required className="input" />
              </div>
            </div>
          </section>
          <section>
            <h2 className="mb-3 text-xl">Shipping</h2>
            <label className="flex items-center justify-between rounded-xl border border-blue bg-page px-4 py-3">
              <span>Free tracked shipping (4-14 working days)</span>
              <span>Free</span>
            </label>
          </section>
          <section>
            <h2 className="mb-3 text-xl">Payment</h2>
            <p className="mb-3 text-sm text-muted">Card fields are disabled. No charge will be made.</p>
            <div className="space-y-3 rounded-xl border border-line p-4">
              <input className="input" disabled placeholder="Card number" />
              <div className="grid grid-cols-2 gap-3">
                <input className="input" disabled placeholder="MM / YY" />
                <input className="input" disabled placeholder="CVC" />
              </div>
            </div>
          </section>
          {error ? <p className="text-sm text-sale">{error}</p> : null}
          <button type="submit" className="btn-primary w-full">
            Place order (preview)
          </button>
          <p className="text-xs text-muted">
            Sold by {company.legalName}. Questions: {company.email}
          </p>
        </form>
      </div>
      <aside className="border-t border-line px-6 py-8 md:px-12 lg:border-l lg:border-t-0">
        <div className="flex gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-white">
            <Image src={product.images[0].src} alt="" fill className="object-cover" />
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-navy px-1 text-[11px] text-white">
              {quantity}
            </span>
          </div>
          <div className="flex-1">
            <p className="font-heading">{product.title}</p>
            <p className="text-sm text-muted">{formatMoney(product.price)}</p>
          </div>
          <p>{formatMoney(product.price * quantity)}</p>
        </div>
        <dl className="mt-8 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt>Subtotal</dt>
            <dd>{formatMoney(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Shipping</dt>
            <dd>Free</dd>
          </div>
          <div className="flex justify-between border-t border-line pt-3 text-base">
            <dt className="font-heading">Total</dt>
            <dd className="font-heading">{formatMoney(total)}</dd>
          </div>
        </dl>
      </aside>
    </div>
  );
}
