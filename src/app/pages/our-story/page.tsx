import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StoreShell } from "@/components/store/StoreShell";
import { company } from "@/lib/company";
import { assetPath } from "@/lib/paths";
import { productPath } from "@/lib/product";

export const metadata: Metadata = { title: "Our Story" };

export default function OurStoryPage() {
  return (
    <StoreShell>
      <section className="page-width grid items-center gap-10 py-16 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl">Our Story</h1>
          <p className="mt-6 max-w-[60ch] text-[17px] leading-relaxed text-navy/80">
            {company.legalName} sells a cordless heated compression cuff for people who finish the day with
            stiff, overworked hands. We keep the store simple: one product, clear shipping times, and a
            90-day window to send it back if it is not the right fit.
          </p>
          <p className="mt-4 max-w-[60ch] text-[17px] leading-relaxed text-navy/80">
            Questions go to {company.email}. The office is at {company.addressLines.join(", ")}.
          </p>
          <Link href={productPath()} className="btn-primary mt-8">
            Shop now
          </Link>
        </div>
        <div className="relative min-h-[320px] overflow-hidden">
          <Image
            src={assetPath("/images/lifestyle-armchair.png")}
            alt="Hand massager used in a quiet living room"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>
    </StoreShell>
  );
}
