import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { StoreShell } from "@/components/store/StoreShell";
import { company } from "@/lib/company";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <StoreShell>
      <section className="page-width grid gap-12 py-12 lg:grid-cols-2">
        <div>
          <h1 className="mb-2 text-4xl">Contact</h1>
          <h2 className="mb-6 text-2xl">Contact form</h2>
          <p className="mb-6 max-w-md text-sm leading-relaxed text-muted">
            {company.legalName}
            <br />
            {company.addressLines.join(", ")}
            <br />
            <a className="text-blue underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
          <ContactForm />
        </div>
        <div className="lg:-mt-10">
          <FaqAccordion />
        </div>
      </section>
    </StoreShell>
  );
}
