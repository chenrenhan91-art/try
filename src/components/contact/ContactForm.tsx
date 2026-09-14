"use client";

import { useState } from "react";
import { company } from "@/lib/company";
import { sendToStoreInbox } from "@/lib/inbox";

type Status = "idle" | "sending" | "sent" | "activate" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  if (status === "sent") {
    return (
      <p className="rounded-lg bg-page px-5 py-6 text-navy">
        Message sent to {company.email}. We will reply to the address you entered.
      </p>
    );
  }

  if (status === "activate") {
    return (
      <p className="rounded-lg bg-page px-5 py-6 text-navy">
        First-time setup: open {company.email}, find the FormSubmit confirmation mail (check junk too),
        and click the link. Then send this form once more.
      </p>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        if (String(data.get("_honey") || "")) return;
        setStatus("sending");
        setError("");
        try {
          const result = await sendToStoreInbox({
            _subject: "Store contact form",
            name: String(data.get("name") || ""),
            email: String(data.get("email") || ""),
            phone: String(data.get("phone") || ""),
            message: String(data.get("message") || ""),
          });
          if (result.ok) {
            setStatus("sent");
            return;
          }
          if (result.needsActivation) {
            setStatus("activate");
            return;
          }
          setError(result.message);
          setStatus("error");
        } catch {
          setError("Could not reach the inbox. Email us directly at " + company.email + ".");
          setStatus("error");
        }
      }}
    >
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
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
      {status === "error" ? <p className="text-sm text-sale">{error}</p> : null}
      <button type="submit" className="btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
