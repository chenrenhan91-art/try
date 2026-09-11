import Link from "next/link";
import { StoreShell } from "@/components/store/StoreShell";

export default function NotFound() {
  return (
    <StoreShell>
      <section className="page-width py-24 text-center">
        <h1 className="text-4xl">Page not found</h1>
        <p className="mt-4 text-muted">That URL is not on this storefront.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back home
          </Link>
          <Link href="/collections/all" className="btn-primary">
            View products
          </Link>
        </div>
      </section>
    </StoreShell>
  );
}
