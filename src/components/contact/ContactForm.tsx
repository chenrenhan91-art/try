"use client";

import { useState } from "react";
import { company } from "@/lib/company";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="rounded-lg bg-page px-5 py-6 text-navy">
        Message saved locally. For a real reply, email {company.email}.
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
        Send
      </button>
    </form>
  );
}
