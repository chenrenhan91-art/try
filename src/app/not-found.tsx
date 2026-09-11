import Link from "next/link";
import { StoreShell } from "@/components/store/StoreShell";

export default function NotFound() {
  return (
    <StoreShell>
      <section className="page-width py-24 text-center">
        <h1 className="text-4xl">Page not found</h1>
        <p className="mt-4 text-muted">That URL is not on this storefront.</p>
        <Link href="/" className="btn-primary mt-8">
          Back home
        </Link>
      </section>
    </StoreShell>
  );
}
