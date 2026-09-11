import { assetPath } from "@/lib/paths";

export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductAccordion = {
  title: string;
  body: string;
};

export type ProductHighlight = {
  title: string;
  body: string;
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
  landing: "hand" | "standard";
  highlights: ProductHighlight[];
  accordions: ProductAccordion[];
  bestSeller: boolean;
  source: {
    store: string;
    originalTitle: string;
    originalHandle: string;
    originalId: string;
    originalVariantId: string;
  };
};

const shippingAccordions: ProductAccordion[] = [
  {
    title: "Shipping & Returns",
    body: "We ship within 1 to 2 working days. Delivery is 4 to 14 working days by tracked courier. If you are not satisfied, you can start a return within 90 days of delivery.",
  },
  {
    title: "90-Day Guarantee",
    body: "Every order includes a 90-day money-back guarantee from the delivery date. Email us if the device is not the right fit.",
  },
];

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
  landing: "hand",
  highlights: [],
  accordions: [],
  bestSeller: false,
  source: {
    store: "https://trysmitten.com",
    originalTitle: "Smitten™ Hand Massager",
    originalHandle: "smitten-smart-heated-hand-massager",
    originalId: "10498676261176",
    originalVariantId: "51893454143800",
  },
};

const pulseHeatWrap: CatalogProduct = {
  id: "pulseheat-wrap",
  handle: "pulseheat-wrap",
  aliases: [],
  title: "PulseHeat Wrap, EMS Pulse, 4-Level Heat",
  price: 89.99,
  compareAtPrice: 139.99,
  sku: "pulseheat-wrap",
  grams: 380,
  available: true,
  rating: 4.8,
  reviewCount: 28,
  description:
    "A slim waist wrap that pairs EMS pulse with four heat levels for lower-back tightness after sitting or a long day on your feet. Wear it over clothes, pick a mode, and stay on the couch.",
  bullets: [
    "EMS pulse for targeted muscle relief",
    "4 heat levels for a warm compress",
    "Fits waist and lower back",
    "Rechargeable wireless controller",
    "90-Day Money-Back Guarantee",
  ],
  images: [
    { src: assetPath("/images/wrap-front.png"), alt: "Beige EMS heat wrap with a black wireless controller" },
    { src: assetPath("/images/wrap-flat.png"), alt: "PulseHeat wrap laid flat showing the inner heating surface" },
    { src: assetPath("/images/wrap-lifestyle.png"), alt: "PulseHeat wrap worn around the waist" },
  ],
  landing: "standard",
  highlights: [
    { title: "EMS pulse", body: "Short electrical pulses help tired lower-back muscles feel less locked up." },
    { title: "4-level heat", body: "Warmth on a gentle, medium, high, or extra-warm setting." },
    { title: "Wear and move", body: "Thin belt sits under a sweater so you can read, type, or rest." },
    { title: "Cordless pad", body: "The controller clips on the wrap. Charge it, then use it without a wall cord." },
  ],
  accordions: [
    {
      title: "How to wear it",
      body: "Wrap the belt around your waist with the controller on the outside. Start on a low pulse and low heat, then step up if it still feels comfortable.",
    },
    {
      title: "Session length",
      body: "Most people run 15 to 20 minutes. Stop if skin feels too warm or the pulse is sharp.",
    },
    ...shippingAccordions,
  ],
  bestSeller: true,
  source: {
    store: "https://circuitrelax.com",
    originalTitle: "CircuitRelax PulseHeat Wrap – EMS Pulse, 4-Level Heat",
    originalHandle: "pulseheat-wrap",
    originalId: "cr-pulseheat-wrap",
    originalVariantId: "cr-pulseheat-wrap-default",
  },
};

const neckTens: CatalogProduct = {
  id: "pulse-neck-tens",
  handle: "electric-pulse-neck-massager-heat-tens",
  aliases: [],
  title: "Electric Pulse Neck Massager with Heat, TENS",
  price: 145.49,
  compareAtPrice: 249.99,
  sku: "neck-tens",
  grams: 820,
  available: true,
  rating: 4.8,
  reviewCount: 27,
  description:
    "A U-shaped neck massager with heated massage nodes and TENS-style pulse. Built for stiff necks after screens, driving, or sleep in a bad position.",
  bullets: [
    "Heated massage nodes along the collar",
    "TENS-style pulse for neck and shoulders",
    "Multiple intensity levels",
    "Shaped to sit on the neck hands-free",
    "90-Day Money-Back Guarantee",
  ],
  images: [
    { src: assetPath("/images/neck-tens-front.png"), alt: "White U-shaped neck massager with heated orange nodes" },
    { src: assetPath("/images/neck-tens-nodes.png"), alt: "Close-up of heated massage nodes on the neck massager" },
    { src: assetPath("/images/neck-tens-lifestyle.png"), alt: "Heated pulse neck massager in a home setting" },
  ],
  landing: "standard",
  highlights: [
    { title: "Heat plus pulse", body: "Warm nodes and electrical pulse work together on tight neck muscles." },
    { title: "TENS modes", body: "Choose a lighter tingle or a deeper pulse without pressing by hand." },
    { title: "Hands-free", body: "The collar rests on your shoulders so you can sit still and recover." },
    { title: "Desk-day relief", body: "A short session after laptop work helps the neck feel less locked." },
  ],
  accordions: [
    {
      title: "Fit",
      body: "Slide the collar around the neck so the nodes sit on the muscle, not on the throat. It is sized for most adult necks.",
    },
    {
      title: "Heat and pulse",
      body: "Heat can run with or without pulse. Start low. Do not use on broken skin or if you have a pacemaker.",
    },
    ...shippingAccordions,
  ],
  bestSeller: true,
  source: {
    store: "https://circuitrelax.com",
    originalTitle: "CircuitRelax Best Electric Pulse Neck Massager with Heat, TENS",
    originalHandle: "electric-pulse-neck-massager-heat-tens",
    originalId: "cr-neck-tens",
    originalVariantId: "cr-neck-tens-default",
  },
};

const neckVib: CatalogProduct = {
  id: "pulse-neck-vibration",
  handle: "electric-pulse-neck-massager-heat-vibration",
  aliases: [],
  title: "Electric Pulse Neck Massager with Heat, Vibration",
  price: 65.99,
  compareAtPrice: 113.99,
  sku: "neck-vibration",
  grams: 700,
  available: true,
  rating: 4.8,
  reviewCount: 31,
  description:
    "A lighter U-shaped neck massager that uses air compression, heat, and vibration. A lower-price daily driver for end-of-day tightness.",
  bullets: [
    "Air compression around the neck",
    "Soothing heat and vibration",
    "Simple one-touch controls",
    "Lightweight collar for the sofa",
    "90-Day Money-Back Guarantee",
  ],
  images: [
    { src: assetPath("/images/neck-vib-front.png"), alt: "White neck massager with blue air-compression chambers" },
    { src: assetPath("/images/neck-vib-side.png"), alt: "Side view of the compression neck massager" },
    { src: assetPath("/images/neck-vib-lifestyle.png"), alt: "Compression neck massager used on a sofa" },
  ],
  landing: "standard",
  highlights: [
    { title: "Air squeeze", body: "Soft chambers inflate and release around the neck instead of hard rollers." },
    { title: "Heat + vibration", body: "Warmth and a gentle buzz help the shoulders drop after a long day." },
    { title: "Everyday price", body: "The entry collar if you want heat and compression without TENS." },
    { title: "Quiet session", body: "Use it while a show is on. The squeeze is the main sensation." },
  ],
  accordions: [
    {
      title: "How it feels",
      body: "Expect a rhythmic squeeze, not a deep knead. Heat warms the fabric against the neck.",
    },
    {
      title: "Who it is for",
      body: "People who want a softer collar. If you prefer strong rolling nodes, pick the TENS or EMS model.",
    },
    ...shippingAccordions,
  ],
  bestSeller: true,
  source: {
    store: "https://circuitrelax.com",
    originalTitle: "CircuitRelax Electric Pulse Neck Massager with Heat, Vibration",
    originalHandle: "electric-pulse-neck-massager-heat-vibration",
    originalId: "cr-neck-vib",
    originalVariantId: "cr-neck-vib-default",
  },
};

const neckEms: CatalogProduct = {
  id: "pulse-neck-ems",
  handle: "electric-pulse-neck-massager-heat-ems",
  aliases: [],
  title: "Electric Pulse Neck Massager with Heat, EMS",
  price: 109.99,
  compareAtPrice: 157.13,
  sku: "neck-ems",
  grams: 760,
  available: true,
  rating: 4.8,
  reviewCount: 38,
  description:
    "A U-shaped neck massager with a ring of massage balls, heat, and EMS pulse. Made for people who want a kneading feel plus electrical stimulation.",
  bullets: [
    "Rotating massage balls on the collar",
    "EMS pulse with adjustable intensity",
    "Built-in heat for tight shoulders",
    "Shaped to rest on the neck",
    "90-Day Money-Back Guarantee",
  ],
  images: [
    { src: assetPath("/images/neck-ems-front.png"), alt: "White EMS neck massager with red massage balls" },
    { src: assetPath("/images/neck-ems-balls.png"), alt: "Close-up of red massage balls inside the collar" },
    { src: assetPath("/images/neck-ems-lifestyle.png"), alt: "EMS neck massager worn in a living room" },
  ],
  landing: "standard",
  highlights: [
    { title: "Kneading balls", body: "A ring of spheres works the muscle along the back of the neck." },
    { title: "EMS assist", body: "Pulse modes add a contracted, gym-like feel under the knead." },
    { title: "Heat on tap", body: "Warmth helps the tissue feel looser before a deeper setting." },
    { title: "Shoulder reach", body: "The arms of the collar sit on the shoulders so the balls stay in place." },
  ],
  accordions: [
    {
      title: "Modes",
      body: "Switch heat, kneading, and EMS independently. Keep EMS on a low gear the first few sessions.",
    },
    {
      title: "Care",
      body: "Wipe the balls after use. Charge with the included cable. Do not soak the collar.",
    },
    ...shippingAccordions,
  ],
  bestSeller: true,
  source: {
    store: "https://circuitrelax.com",
    originalTitle: "CircuitRelax Electric Pulse Neck Massager with Heat, EMS",
    originalHandle: "electric-pulse-neck-massager-heat-ems",
    originalId: "cr-neck-ems",
    originalVariantId: "cr-neck-ems-default",
  },
};

const ledMask: CatalogProduct = {
  id: "led-face-mask",
  handle: "led-face-mask-anti-aging-acne-care",
  aliases: [],
  title: "LED Face Mask for Anti-Aging and Acne Care",
  price: 126.99,
  compareAtPrice: 219.99,
  sku: "led-face-mask",
  grams: 520,
  available: true,
  rating: 4.8,
  reviewCount: 70,
  description:
    "A full-face LED mask for at-home light sessions aimed at dull skin, fine lines, and breakout-prone areas. Sit for about 10 minutes with the mask on, then take it off.",
  bullets: [
    "Full-face LED coverage",
    "Made for anti-aging and acne-care routines",
    "Short timed sessions",
    "Lightweight wearable mask",
    "90-Day Money-Back Guarantee",
  ],
  images: [
    { src: assetPath("/images/mask-front.png"), alt: "Black LED face mask worn in a studio shot" },
    { src: assetPath("/images/mask-interior.png"), alt: "Interior LED grid of the face mask" },
    { src: assetPath("/images/mask-kit.png"), alt: "LED face mask standing on a white table" },
  ],
  landing: "standard",
  highlights: [
    { title: "Full-face lights", body: "LEDs sit close to the skin across forehead, cheeks, and chin." },
    { title: "Routine-friendly", body: "A short session fits after cleansing, before moisturizer." },
    { title: "Hands-free", body: "The mask stays on your face so you can sit still and wait it out." },
    { title: "At-home care", body: "A compact alternative to booking a clinic light appointment." },
  ],
  accordions: [
    {
      title: "How to use",
      body: "Clean dry skin. Put the mask on, start a session, then apply your usual serum or cream. Use eye protection if the manual calls for it.",
    },
    {
      title: "Frequency",
      body: "Most people use it 3 to 5 times a week. Skip a day if skin feels irritated.",
    },
    ...shippingAccordions,
  ],
  bestSeller: true,
  source: {
    store: "https://circuitrelax.com",
    originalTitle: "CircuitRelax LED Face Mask for Anti-Aging & Acne Care",
    originalHandle: "led-face-mask-anti-aging-acne-care",
    originalId: "cr-led-mask",
    originalVariantId: "cr-led-mask-default",
  },
};

export const products: CatalogProduct[] = [
  pulseHeatWrap,
  neckTens,
  neckVib,
  neckEms,
  ledMask,
  handMassager,
];

export const product = handMassager;

export const bestSellers = products.filter((item) => item.bestSeller);

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

export function discountPercent(item: CatalogProduct) {
  return Math.round((1 - item.price / item.compareAtPrice) * 100);
}
