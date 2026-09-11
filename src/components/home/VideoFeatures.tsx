import Image from "next/image";
import Link from "next/link";
import { BatteryCharging, Fire, Sliders, Waves } from "@phosphor-icons/react/dist/ssr";
import { features } from "@/lib/content";
import { assetPath } from "@/lib/paths";
import { productPath } from "@/lib/product";

const icons = {
  flame: Fire,
  waves: Waves,
  sliders: Sliders,
  battery: BatteryCharging,
};

export function VideoFeatures() {
  return (
    <section className="bg-white py-10">
      <div className="page-width grid items-center gap-5 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-black">
          <Image
            src={assetPath("/images/feature-video-still.png")}
            alt="Hand massager in use at a desk"
            width={1280}
            height={720}
            className="h-auto w-full"
          />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature) => {
              const Icon = icons[feature.icon];
              return (
                <div key={feature.title} className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-20 w-20 items-center justify-center">
                    <Icon size={40} color="#4770db" weight="regular" />
                  </div>
                  <h3 className="m-0 text-lg font-semibold text-navy">{feature.title}</h3>
                  <p className="m-0 text-sm leading-relaxed text-[#666]">{feature.body}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex justify-center">
            <Link href={productPath()} className="btn-primary">
              Shop massager
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
