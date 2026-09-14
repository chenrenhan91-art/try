"use client";

import { useState } from "react";
import { company } from "@/lib/company";
import { openStoreMail } from "@/lib/mail";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [opened, setOpened] = useState(false);

  if (opened) {
    return (
      <p className="text-sm text-white/90">
        Your email app should open. Send that message to join updates, or write {company.email} directly.
      </p>
    );
  }

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        openStoreMail("Newsletter signup", `Please add this email to store updates:\n${email}`);
        setOpened(true);
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
      <p className="text-xs text-white/55">Opens your email app to write {company.email}.</p>
    </form>
  );
}
