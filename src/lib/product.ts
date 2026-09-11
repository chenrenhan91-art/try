import { assetPath } from "@/lib/paths";

export const product = {
  id: "hand-massager",
  handle: "hand-massager",
  title: "Hand Massager",
  price: 79.99,
  compareAtPrice: 199.99,
  sku: "hand-massager",
  rating: 4.8,
  reviewCount: 2500,
  available: true,
  images: [
    { src: assetPath("/images/product-front.png"), alt: "Light gray heated compression hand massager, front view" },
    { src: assetPath("/images/product-angle.png"), alt: "Hand massager three-quarter studio view" },
    { src: assetPath("/images/product-controls.png"), alt: "Close-up of the oval control panel" },
    { src: assetPath("/images/product-interior.png"), alt: "Padded interior airbags of the massager" },
    { src: assetPath("/images/hero-lifestyle.png"), alt: "Hand massager in use on a sofa" },
    { src: assetPath("/images/product-charge.png"), alt: "Hand massager with USB-C charging cable" },
    { src: assetPath("/images/lifestyle-office.png"), alt: "Hand massager used at a home desk" },
    { src: assetPath("/images/lifestyle-evening.png"), alt: "Evening use of the hand massager" },
    { src: assetPath("/images/lifestyle-armchair.png"), alt: "Hand massager used in an armchair" },
    { src: assetPath("/images/lifestyle-heat.png"), alt: "Warm heat setting on the hand massager" },
    { src: assetPath("/images/lifestyle-music.png"), alt: "Hand massager after playing an instrument" },
    { src: assetPath("/images/lifestyle-gift.png"), alt: "Hand massager packed as a gift" },
    { src: assetPath("/images/product-studio-alt.png"), alt: "Catalog photo of the hand massager" },
    { src: assetPath("/images/feature-video-still.png"), alt: "Hand massager used beside a laptop" },
  ],
} as const;

export const formatMoney = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

export const discountPercent = Math.round(
  (1 - product.price / product.compareAtPrice) * 100,
);
