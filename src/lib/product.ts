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
  sku: "hand-massager",
  grams: 1000,
  available: true,
  rating: 4.8,
  reviewCount: 2500,
  description:
    "This hand massager uses compression and Infrared heat therapy to treat and prevent carpal tunnel tightness, arthritis pain, trigger finger, and Dupuytren's contracture.",
  bullets: [
    "Relieves carpal tunnel and trigger finger pain",
    "Relieves arthritis pain and joint stiffness",
    "Boosts circulation for faster recovery",
    "Restores strength and dexterity",
    "90-Day Money-Back Guarantee",
  ],
  images: [
    { src: assetPath("/images/product-front.png"), alt: "Light gray heated compression hand massager, front view" },
    { src: assetPath("/images/product-angle.png"), alt: "Hand massager three-quarter studio view" },
    { src: assetPath("/images/product-controls.png"), alt: "Close-up of the oval control panel" },
    { src: assetPath("/images/product-interior.png"), alt: "Padded interior airbags of the massager" },
    { src: assetPath("/images/gallery-opening.png"), alt: "Interior opening of the hand massager cuff" },
    { src: assetPath("/images/gallery-airbags.png"), alt: "Finger and palm air chambers wrapping the hand" },
    { src: assetPath("/images/lifestyle-office.png"), alt: "Hand massager used at a home desk" },
    { src: assetPath("/images/lifestyle-armchair.png"), alt: "Hand massager used in an armchair" },
    { src: assetPath("/images/lifestyle-gift.png"), alt: "Hand massager packed as a gift" },
    { src: assetPath("/images/gallery-heat-ugc.png"), alt: "Heat therapy inside the hand massager cuff" },
    { src: assetPath("/images/gallery-rechargeable.png"), alt: "Rechargeable hand massager with USB-C cable" },
    { src: assetPath("/images/gallery-finger-chambers.png"), alt: "Individual finger chambers wrapping each finger" },
    { src: assetPath("/images/gallery-15-airbags.png"), alt: "Fifteen airbags covering fingers, palm, and wrist" },
    { src: assetPath("/images/gallery-blue-studio.png"), alt: "Hand massager on a blue studio background" },
    { src: assetPath("/images/lifestyle-evening.png"), alt: "Evening use of the hand massager" },
  ],
  source: {
    store: "https://trysmitten.com",
    originalTitle: "Smitten™ Hand Massager",
    originalHandle: "smitten-smart-heated-hand-massager",
    originalId: "10498676261176",
    originalVariantId: "51893454143800",
  },
};

/** Live catalog from trysmitten.com/products.json: one published SKU. */
export const products: CatalogProduct[] = [handMassager];

export const product = handMassager;

export function getProductByHandle(handle: string) {
  return products.find((item) => item.handle === handle || item.aliases.includes(handle));
}

export function productPath(item: CatalogProduct = product) {
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
