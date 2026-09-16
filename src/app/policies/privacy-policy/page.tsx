import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policies/PolicyLayout";
import { company } from "@/lib/company";
import { mailtoInboxHref } from "@/lib/mail";

export const metadata: Metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return (
    <PolicyLayout title="Privacy policy">
      <p>Last updated: September 11, 2026</p>
      <p>
        {company.legalName} operates this storefront. This page explains what we collect when you browse,
        write to us, or place a preview order.
      </p>
      <h2 className="font-heading text-2xl text-navy">Information we collect</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Contact details you type into forms: name, email, phone, shipping address.</li>
        <li>Order details for a preview checkout (this demo does not store card numbers).</li>
        <li>Device and usage data such as browser type and pages viewed.</li>
      </ul>
      <h2 className="font-heading text-2xl text-navy">How we use it</h2>
      <p>
        To answer support email, fulfill real orders if you later buy from us, improve the site, and meet
        legal duties. We do not sell personal information.
      </p>
      <h2 className="font-heading text-2xl text-navy">Contact</h2>
      <p>
        Privacy questions:{" "}
        <a className="text-blue underline" href={mailtoInboxHref()}>
          {company.publicEmail}
        </a>
        . Postal: {company.legalName}, {company.addressLines.join(", ")}.
      </p>
    </PolicyLayout>
  );
}
