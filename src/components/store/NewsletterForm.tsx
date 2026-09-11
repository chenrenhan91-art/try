"use client";

import { useState } from "react";
import { company } from "@/lib/company";

export function NewsletterForm() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  if (sent) {
    return (
      <p className="text-sm text-white/90">Thanks. We will write to {email} when there is something useful to send.</p>
    );
  }

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label className="sr-only" htmlFor="footer-email">
        Email
      </label>
      <input
        id="footer-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="min-h-12 rounded-[26px] border border-white/20 bg-white px-4 text-navy outline-none placeholder:text-[#8b90a8]"
      />
      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-white px-6 font-heading text-sm uppercase tracking-wide text-navy hover:bg-page"
      >
        Subscribe
      </button>
      <p className="text-xs text-white/55">Goes to {company.email} for store notices only.</p>
    </form>
  );
}
