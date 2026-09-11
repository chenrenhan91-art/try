import type { Metadata } from "next";
import { ReviewSlider } from "@/components/home/ReviewSlider";
import { StoreShell } from "@/components/store/StoreShell";
import { productPath } from "@/lib/product";

export const metadata: Metadata = { title: "Reviews" };

export default function ReviewsPage() {
  return (
    <StoreShell>
      <section className="page-width pt-12 text-center">
        <h1 className="text-4xl">Real reviews from real people</h1>
        <p className="mt-3 text-muted">See what customers are saying about this hand massager.</p>
      </section>
      <ReviewSlider heading="Rated 4.8/5 by 2,500+" ctaHref={productPath()} ctaLabel="Shop now" />
    </StoreShell>
  );
}
