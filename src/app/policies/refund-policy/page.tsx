import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policies/PolicyLayout";
import { company } from "@/lib/company";

export const metadata: Metadata = { title: "Refund policy" };

export default function RefundPage() {
  return (
    <PolicyLayout title="Refund policy">
      <p>
        You have 90 days after delivery to request a return. The item should be in sellable condition, with
        original packaging, and you will need proof of purchase.
      </p>
      <p>
        Email {company.email} to start a return. Do not ship a parcel until we reply with the return address
        and label instructions. Items sent back without a request may not be accepted.
      </p>
      <p>
        Inspect the order when it arrives. If the unit is defective, damaged, or the wrong item, contact us
        right away so we can replace or refund it.
      </p>
      <p>
        If a refund is approved, it returns to the original payment method within 10 business days after we
        inspect the return.
      </p>
      <p>
        EU customers keep any 14-day cooling-off rights that apply to distance sales, in addition to this
        90-day window.
      </p>
      <p>
        {company.legalName}, {company.addressLines.join(", ")}.
      </p>
    </PolicyLayout>
  );
}
