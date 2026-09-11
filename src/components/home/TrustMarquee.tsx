import { trustItems } from "@/lib/content";

export function TrustMarquee() {
  const loop = [...trustItems, ...trustItems];
  return (
    <section className="overflow-hidden bg-white py-[30px]" aria-label="Trust highlights">
      <div className="marquee-track items-center gap-20 pr-20">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 font-heading text-sm uppercase tracking-[0.18em] text-navy/55"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
