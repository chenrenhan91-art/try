import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/paths";
import { productPath } from "@/lib/product";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="grid items-stretch lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-10 text-center md:px-12 lg:px-16 lg:py-16 lg:text-left">
          <p className="mb-3 text-sm text-navy/80">2026 Award-Winning Hand Massager</p>
          <h2 className="mb-5 text-[34px] leading-[1.12] md:text-5xl">
            Deep Hand Relief. One Touch Away.
          </h2>
          <ul className="mx-auto mb-8 max-w-md space-y-2 text-[17px] text-navy/80 lg:mx-0">
            <li>★★★★★ 2,500 Verified Reviews</li>
            <li>Perfect for tired hands and wrists</li>
            <li>Deep compression massage</li>
            <li>Relax, recover, and relieve hand tension</li>
          </ul>
          <div className="flex justify-center lg:justify-start">
            <Link href={productPath()} className="btn-primary">
              Shop now
            </Link>
          </div>
        </div>
        <div className="relative min-h-[280px] bg-[#f3f1ee] lg:min-h-[520px]">
          <Image
            src={assetPath("/images/hero-lifestyle.png")}
            alt="Woman resting on a sofa with a heated compression hand massager"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
