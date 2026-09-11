import { StoreShell } from "@/components/store/StoreShell";

export function PolicyLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <StoreShell>
      <article className="page-width max-w-3xl py-12">
        <h1 className="mb-8 text-4xl">{title}</h1>
        <div className="space-y-5 text-[15px] leading-relaxed text-navy/80">{children}</div>
      </article>
    </StoreShell>
  );
}
