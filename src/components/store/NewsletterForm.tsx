"use client";

import { useState } from "react";
import { company } from "@/lib/company";
import { sendToStoreInbox } from "@/lib/inbox";

type Status = "idle" | "sending" | "sent" | "activate" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  if (status === "sent") {
    return (
      <p className="text-sm text-white/90">Thanks. We will write to {email} when there is something useful to send.</p>
    );
  }

  if (status === "activate") {
    return (
      <p className="text-sm text-white/90">
        Open {company.email} and confirm the FormSubmit email, then subscribe once more.
      </p>
    );
  }

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (String(data.get("_honey") || "")) return;
        setStatus("sending");
        setError("");
        try {
          const result = await sendToStoreInbox({
            _subject: "Store newsletter signup",
            email,
            source: "footer newsletter",
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
          setError("Could not subscribe. Email " + company.email + " instead.");
          setStatus("error");
        }
      }}
    >
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
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
      {status === "error" ? <p className="text-xs text-white/80">{error}</p> : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-white px-6 font-heading text-sm uppercase tracking-wide text-navy hover:bg-page disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Subscribe"}
      </button>
      <p className="text-xs text-white/55">Goes to {company.email} for store notices only.</p>
    </form>
  );
}
