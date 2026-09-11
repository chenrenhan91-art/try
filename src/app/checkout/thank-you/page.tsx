import type { Metadata } from "next";
import { ThankYou } from "@/components/checkout/ThankYou";

export const metadata: Metadata = { title: "Thank you" };

export default function ThankYouPage() {
  return <ThankYou />;
}
