import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policies/PolicyLayout";
import { company } from "@/lib/company";

export const metadata: Metadata = { title: "Terms of service" };

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms of service">
      <p>
        These terms cover use of this website and purchase of the Hand Massager from {company.legalName}.
        By using the site you agree to them.
      </p>
      <h2 className="font-heading text-2xl text-navy">The product</h2>
      <p>
        The Hand Massager is a consumer wellness device. It is not a medical diagnosis or a cure. Read the
        in-box guide before use. Stop and talk to a clinician if you have a condition that makes heat or
        compression a bad idea.
      </p>
      <h2 className="font-heading text-2xl text-navy">Orders</h2>
      <p>
        Prices are shown in USD. This public demo checkout does not take payment. A real order is only
        formed when we confirm it by email from {company.publicEmail}.
      </p>
      <h2 className="font-heading text-2xl text-navy">Shipping</h2>
      <p>
        We typically process within 1 to 2 business days. Tracked delivery is usually 4 to 14 working days.
        Free US shipping is offered on the product page.
      </p>
      <h2 className="font-heading text-2xl text-navy">Liability</h2>
      <p>
        To the extent allowed by law, {company.legalName} is not liable for indirect losses. Nothing here
        limits rights you cannot waive under Hong Kong law or the law of your country.
      </p>
      <h2 className="font-heading text-2xl text-navy">Contact</h2>
      <p>
        {company.legalName}
        <br />
        {company.addressLines.join(", ")}
        <br />
        {company.publicEmail}
      </p>
    </PolicyLayout>
  );
}
