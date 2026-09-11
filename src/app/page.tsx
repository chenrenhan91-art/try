import { FaqAccordion } from "@/components/home/FaqAccordion";
import { Hero } from "@/components/home/Hero";
import { ReviewSlider } from "@/components/home/ReviewSlider";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { VideoFeatures } from "@/components/home/VideoFeatures";
import { StoreShell } from "@/components/store/StoreShell";

export default function HomePage() {
  return (
    <StoreShell>
      <Hero />
      <TrustMarquee />
      <VideoFeatures />
      <ReviewSlider />
      <FaqAccordion />
    </StoreShell>
  );
}
