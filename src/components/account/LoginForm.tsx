"use client";

import Link from "next/link";
import { useState } from "react";
import { productPath } from "@/lib/product";

export function LoginForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="text-navy/80">
        Account login is a preview only. No password is stored. Continue from the{" "}
        <Link href={productPath()} className="underline">
          product page
        </Link>
        .
      </p>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div>
        <label className="mb-1 block text-sm" htmlFor="login-email">
          Email
        </label>
        <input id="login-email" type="email" required className="input" />
      </div>
      <div>
        <label className="mb-1 block text-sm" htmlFor="login-password">
          Password
        </label>
        <input id="login-password" type="password" required className="input" />
      </div>
      <button type="submit" className="btn-primary w-full">
        Sign in
      </button>
      <p className="text-sm text-muted">Preview only. Credentials are not saved or sent.</p>
    </form>
  );
}
