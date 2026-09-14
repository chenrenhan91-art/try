"use client";

import { useState } from "react";
import { company } from "@/lib/company";
import { openStoreMail } from "@/lib/mail";

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  if (opened) {
    return (
      <p className="rounded-lg bg-page px-5 py-6 text-navy">
        Your email app should open with a message to {company.email}. Send it from there. If nothing
        opened, write us directly at{" "}
        <a className="underline" href={`mailto:${company.email}`}>
          {company.email}
        </a>
        .
      </p>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = String(data.get("name") || "");
        const email = String(data.get("email") || "");
        const phone = String(data.get("phone") || "");
        const message = String(data.get("message") || "");
        openStoreMail(
          "Store contact",
          `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\n\n${message}`,
        );
        setOpened(true);
      }}
    >
      <div>
        <label className="mb-1 block text-sm" htmlFor="name">
          Name
        </label>
        <input id="name" name="name" required className="input" />
      </div>
      <div>
        <label className="mb-1 block text-sm" htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" required className="input" />
      </div>
      <div>
        <label className="mb-1 block text-sm" htmlFor="phone">
          Phone (optional)
        </label>
        <input id="phone" name="phone" className="input" />
      </div>
      <div>
        <label className="mb-1 block text-sm" htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" required rows={5} className="input min-h-32 rounded-2xl py-3" />
      </div>
      <button type="submit" className="btn-primary">
        Email us
      </button>
    </form>
  );
}
