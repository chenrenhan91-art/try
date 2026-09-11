import Image from "next/image";
import { Check, Truck, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { AddToCartButton } from "@/components/product/AddToCartButton";
import { ProductAccordions } from "@/components/product/ProductAccordions";
import { ProductGallery } from "@/components/product/ProductGallery";
import { PainTypes } from "@/components/product/PainTypes";
import { ReviewSlider } from "@/components/home/ReviewSlider";
import { benefits, compareRows, stats } from "@/lib/content";
import { formatMoney, type CatalogProduct } from "@/lib/product";
import { assetPath } from "@/lib/paths";

export function ProductView({ product }: { product: CatalogProduct }) {
  return (
    <>
      <section className="page-width grid gap-10 py-8 lg:grid-cols-2 lg:py-12">
        <ProductGallery images={product.images} />
        <div>
          <p className="text-sm text-navy">
            ★★★★★ Excellent {product.rating} | {product.reviewCount.toLocaleString()} Reviews
          </p>
          <h1 className="mt-2 text-4xl">{product.title}</h1>
          <div className="mt-4 flex flex-wrap items-baseline gap-3">
            <span className="text-xl text-muted line-through">{formatMoney(product.compareAtPrice)}</span>
            <span className="text-2xl">{formatMoney(product.price)}</span>
            <span className="bg-sale px-2 py-0.5 text-xs font-heading uppercase tracking-wide text-white">
              Sale
            </span>
          </div>
          <p className="mt-6 max-w-[65ch] text-[1.05rem] leading-relaxed text-navy/80">
            {product.description}
          </p>
          <ul className="mt-5 space-y-2 text-[15px]">
            {product.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-5 text-sm">
            <span className="inline-flex items-center gap-2">
              <Truck size={18} /> Free US Shipping
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={18} /> 90 Day Guarantee
            </span>
          </div>
          <div className="mt-6">
            <AddToCartButton productId={product.id} />
          </div>
          <ProductAccordions />
        </div>
      </section>

      <ReviewSlider heading="Look At How Others are Loving Their Hand Massager" />

      <section className="bg-page px-5 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl leading-tight">Eliminate Hand and Wrist Pain in 15 Minutes</h2>
          <p className="mx-auto mt-5 max-w-[60ch] text-[17px] leading-relaxed text-navy/75">
            In 15 minutes a day, heat and targeted air compression help melt stiffness, throbbing, and
            that numb-after-typing feeling. Pick an intensity and use it from the couch.
          </p>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl">Benefits for your hands and fingers</h2>
          <p className="mt-3 text-muted">The features people actually use, every session.</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-page px-5 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl">Targeted Relief for all types of hand pain</h2>
          <p className="mt-3 mb-10 text-muted">Eliminate hand pain at home</p>
        </div>
        <PainTypes />
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-4xl">Why You Should Choose Us.</h2>
          <p className="mt-3 mb-10 text-center text-muted">Here is why this cuff stays in the daily rotation</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="py-3 font-heading" />
                  <th className="py-3 font-heading">This massager</th>
                  <th className="py-3 font-heading text-muted">Typical knock-off</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row} className="border-b border-line">
                    <td className="py-3 pr-4">{row}</td>
                    <td className="py-3">
                      <Check size={18} color="#4770db" weight="bold" />
                    </td>
                    <td className="py-3 text-muted">No</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-navy px-5 py-16 text-white">
        <h2 className="text-center text-4xl">Our impact Statistics</h2>
        <p className="mt-3 mb-10 text-center text-white/70">We have the data to prove our product works</p>
        <div className="page-width grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <p className="font-heading text-5xl">{stat.value}</p>
              <p className="mt-3 text-[15px] text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid items-center lg:grid-cols-2">
        <div className="relative min-h-[320px]">
          <Image
            src={assetPath("/images/product-studio-alt.png")}
            alt="Hand massager catalog photo"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="px-6 py-12 md:px-12">
          <h2 className="text-4xl">5 Massage Modes for the Perfect Relief</h2>
          <p className="mt-5 max-w-[55ch] text-[17px] leading-relaxed text-navy/75">
            Five intelligent modes target tension, circulation, and tired hands. Go gentle or go deeper.
            Change the mode whenever the session needs a different squeeze.
          </p>
        </div>
      </section>

      <section className="grid items-center bg-page lg:grid-cols-2">
        <div className="order-2 px-6 py-12 md:px-12 lg:order-1">
          <h2 className="text-4xl">Soothing Heat Therapy</h2>
          <p className="mt-5 max-w-[55ch] text-[17px] leading-relaxed text-navy/75">
            Built-in gentle heat helps stiff hands while the airbags work. Warmth through the palm and
            fingers loosens tight muscles for a deeper, more comfortable session.
          </p>
          <ul className="mt-6 space-y-2 text-[15px]">
            <li>Comforting warmth for tired, overworked hands</li>
            <li>Makes compression feel deeper and more relaxing</li>
            <li>Helpful for stiffness and cold hands</li>
            <li>Spa-like comfort in minutes</li>
          </ul>
        </div>
        <div className="relative order-1 min-h-[320px] lg:order-2">
          <Image
            src={assetPath("/images/lifestyle-heat.png")}
            alt="Warm heat setting glowing through the massager"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>
    </>
  );
}
