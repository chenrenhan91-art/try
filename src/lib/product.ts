import { assetPath } from "@/lib/paths";

export type ProductImage = {
  src: string;
  alt: string;
};

export type CatalogProduct = {
  id: string;
  handle: string;
  aliases: string[];
  title: string;
  price: number;
  compareAtPrice: number;
  sku: string;
  grams: number;
  available: boolean;
  rating: number;
  reviewCount: number;
  description: string;
  bullets: string[];
  images: ProductImage[];
  source: {
    store: string;
    originalTitle: string;
    originalHandle: string;
    originalId: string;
    originalVariantId: string;
  };
};

const handMassager: CatalogProduct = {
  id: "hand-massager",
  handle: "hand-massager",
  aliases: ["smitten-smart-heated-hand-massager", "smart-heated-hand-massager"],
  title: "Hand Massager",
  price: 79.99,
  compareAtPrice: 199.99,
  sku: "smitten",
  grams: 1000,
  available: true,
  rating: 4.8,
  reviewCount: 2500,
  description:
    "Compression plus infrared-style heat in a cordless cuff, made for tired hands after typing, instruments, or a long day of work. Built to ease stiffness, improve how circulation feels, and give fingers a short reset.",
  bullets: [
    "Helps with typing strain and trigger-finger tightness",
    "Eases joint stiffness in overworked hands",
    "Boosts circulation for faster recovery",
    "Restores comfort and dexterity after long sessions",
    "90-Day Money-Back Guarantee",
  ],
  images: [
    { src: assetPath("/images/product-front.png"), alt: "Light gray heated compression hand massager, front view" },
    { src: assetPath("/images/product-angle.png"), alt: "Hand massager three-quarter studio view" },
    { src: assetPath("/images/product-controls.png"), alt: "Close-up of the oval control panel" },
    { src: assetPath("/images/gallery-airbags.png"), alt: "Finger and palm air chambers wrapping the hand" },
    { src: assetPath("/images/product-interior.png"), alt: "Padded interior airbags of the massager" },
    { src: assetPath("/images/gallery-opening.png"), alt: "Interior opening of the hand massager cuff" },
    { src: assetPath("/images/hero-lifestyle.png"), alt: "Hand massager in use on a sofa" },
    { src: assetPath("/images/lifestyle-office.png"), alt: "Hand massager used at a home desk" },
    { src: assetPath("/images/lifestyle-evening.png"), alt: "Evening use of the hand massager" },
    { src: assetPath("/images/lifestyle-armchair.png"), alt: "Hand massager used in an armchair" },
    { src: assetPath("/images/lifestyle-heat.png"), alt: "Warm heat setting on the hand massager" },
    { src: assetPath("/images/product-charge.png"), alt: "Hand massager with USB-C charging cable" },
    { src: assetPath("/images/lifestyle-gift.png"), alt: "Hand massager packed as a gift" },
    { src: assetPath("/images/product-studio-alt.png"), alt: "Catalog photo of the hand massager" },
    { src: assetPath("/images/feature-video-still.png"), alt: "Hand massager used beside a laptop" },
  ],
  source: {
    store: "https://trysmitten.com",
    originalTitle: "Smitten™ Hand Massager",
    originalHandle: "smitten-smart-heated-hand-massager",
    originalId: "10498676261176",
    originalVariantId: "51893454143800",
  },
};

/** Live catalog synced from trysmitten.com/products.json (1 published SKU). */
export const products: CatalogProduct[] = [handMassager];

export const product = handMassager;

export function getProductByHandle(handle: string) {
  return products.find((item) => item.handle === handle || item.aliases.includes(handle));
}

export function productPath(item: CatalogProduct) {
  return `/products/${item.handle}`;
}

export function allProductHandles() {
  return products.flatMap((item) => [item.handle, ...item.aliases]);
}

export const formatMoney = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

export const discountPercent = Math.round((1 - product.price / product.compareAtPrice) * 100);
