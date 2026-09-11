"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { company } from "@/lib/company";
import { formatMoney } from "@/lib/product";

type Order = { email: string; quantity: number; total: number; name: string };

export function ThankYou() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const raw = window.sessionStorage.getItem("fz-order");
    if (raw) setOrder(JSON.parse(raw) as Order);
  }, []);

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-white px-6 py-16 text-center">
      <p className="font-heading text-sm uppercase tracking-[0.22em] text-navy">{company.productName}</p>
      <h1 className="mt-6 text-4xl">Order preview received</h1>
      <p className="mt-4 max-w-md text-navy/75">
        This storefront does not charge cards. No payment was taken and no shipment will be created.
      </p>
      {order ? (
        <p className="mt-4 text-sm text-muted">
          {order.name} · {order.email} · {order.quantity} item · {formatMoney(order.total)}
        </p>
      ) : null}
      <p className="mt-6 max-w-md text-sm text-muted">
        For a real order, email {company.email}. Sold by {company.legalName}.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to shop
      </Link>
    </div>
  );
}
