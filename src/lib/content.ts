import { assetPath } from "@/lib/paths";

export const faqs = [
  {
    q: "How does the hand massager work?",
    a: "Air compression gently squeezes the fingers, palm, and wrist. Optional heat helps muscles feel looser. Slide your hand inside, press the button, and sit for a few minutes.",
  },
  {
    q: "Who is this hand massager for?",
    a: "Anyone with tired, sore, or stiff hands. People often use it after typing, gaming, crafting, or a long day of work with their hands.",
  },
  {
    q: "How long should I use it for?",
    a: "Most people run a 10 to 15 minute session. That is usually enough to take the edge off tightness and restore comfort.",
  },
  {
    q: "Does it have different massage settings?",
    a: "Yes. Multiple massage modes and intensity levels let you pick a lighter squeeze or a deeper compression.",
  },
  {
    q: "Does the massager use heat?",
    a: "Yes. Optional soothing heat helps relax stiff hands and makes the compression feel more comfortable.",
  },
  {
    q: "Is it cordless?",
    a: "Yes. It is rechargeable and cordless, so you can use it on the couch, at a desk, or while traveling.",
  },
  {
    q: "Will it fit my hand?",
    a: "The cuff is built for most adult hand sizes and works on both left and right hands. Internal space is about 11.5 cm wide and 22.5 cm long.",
  },
  {
    q: "Is it safe to use every day?",
    a: "Yes. It is designed for daily use and includes an automatic shut-off timer at the end of a session.",
  },
  {
    q: "How long does shipping take?",
    a: "Orders are usually processed within 1 to 2 business days. Delivery is typically 4 to 14 working days by tracked courier. You get a tracking link once the parcel ships.",
  },
  {
    q: "What if I do not like it?",
    a: "If you are not satisfied, email us within 90 days of delivery and we will help make it right.",
  },
] as const;

export const reviews = [
  {
    title: "Instant Relief",
    body: "I type all day and my hands get stiff. After about 10 minutes the compression and heat left my palms noticeably looser.",
    author: "Priya S.",
    image: assetPath("/images/lifestyle-office.png"),
  },
  {
    title: "Perfect After Long Days",
    body: "The pressure feels closer to a real hand massage than a cheap vibrator. I run a session almost every night now.",
    author: "Marcus L.",
    image: assetPath("/images/lifestyle-evening.png"),
  },
  {
    title: "Helpful After Typing",
    body: "Mild wrist tightness from a laptop is part of my week. This has become a short daily reset when my hands feel numb or tight.",
    author: "Elena R.",
    image: assetPath("/images/lifestyle-armchair.png"),
  },
  {
    title: "Surprisingly Strong",
    body: "I expected a little buzz. The airbags actually squeeze, which feels like a spa treatment at home.",
    author: "Jonah P.",
    image: assetPath("/images/product-interior.png"),
  },
  {
    title: "Evening Routine",
    body: "I use it while a show is on. The warmth plus pressure is the part of the day my hands look forward to.",
    author: "Hannah C.",
    image: assetPath("/images/lifestyle-heat.png"),
  },
  {
    title: "Easy to Take Places",
    body: "No cord while it runs. I have used it on the couch, at my desk, and in a hotel. The battery lasted longer than I expected.",
    author: "Theo N.",
    image: assetPath("/images/lifestyle-music.png"),
  },
  {
    title: "Great Gift",
    body: "I bought one for myself, then ordered another for my mom. Simple to use and it feels well made.",
    author: "Lauren B.",
    image: assetPath("/images/lifestyle-gift.png"),
  },
  {
    title: "Worth It",
    body: "After workouts or long days working with my hands, heat plus compression takes the soreness down fast.",
    author: "Diego M.",
    image: assetPath("/images/product-charge.png"),
  },
] as const;

export const features = [
  {
    title: "Soothing Heat",
    body: "Relaxes muscles and improves circulation",
    icon: "flame" as const,
  },
  {
    title: "Air Compression",
    body: "Gentle pressure massages fingers and palm",
    icon: "waves" as const,
  },
  {
    title: "Custom Modes",
    body: "Multiple massage modes and intensities",
    icon: "sliders" as const,
  },
  {
    title: "Cordless Design",
    body: "Rechargeable for use anywhere",
    icon: "battery" as const,
  },
] as const;

export const benefits = [
  { title: "Muscle Relaxation", body: "Loosens tight hand muscles" },
  { title: "Better Circulation", body: "Boosts healthy blood flow" },
  { title: "Pain Relief", body: "Eases aching, overworked hands" },
  { title: "Preventive Care", body: "Helps protect daily hand strain" },
] as const;

export const painTypes = [
  {
    title: "Arthritis discomfort",
    body: "Deep heat and gentle compression help loosen morning stiffness and take pressure off sore joints.",
  },
  {
    title: "Typing strain",
    body: "Rhythmic pressure encourages circulation and eases the tight, tingly feeling that shows up after long computer days.",
  },
  {
    title: "Finger tightness",
    body: "Daily compression and warmth give stiff fingers a short, consistent stretch without a clinic visit.",
  },
  {
    title: "Morning stiffness and swelling",
    body: "Heat comes on quickly to warm joints and restore some flexibility before the day starts.",
  },
  {
    title: "Numbness and tingling",
    body: "Improved circulation and even pressure help calm pins-and-needles in the fingers and palm.",
  },
  {
    title: "Post-activity soreness",
    body: "Use it after typing, gardening, or crafting to soothe tired muscles and speed up how recovered your hands feel.",
  },
] as const;

export const compareRows = [
  "Massage function",
  "90-day guarantee",
  "Heat plus compression",
  "Soothing heat therapy",
  "Personalized massage modes",
  "360° air compression",
  "Premium ergonomic fit",
] as const;

export const stats = [
  { value: "96%", label: "say they feel relief from tightness in the first session." },
  { value: "88%", label: "say 15 minutes is enough for their hands to feel reset." },
  { value: "76%", label: "say heat combined with compression is the right mix." },
] as const;

export const productAccordions = [
  {
    title: "Rapid Heating",
    body: "Warmth is noticeable in about 30 seconds, reaching up to 125°F in around a minute to help circulation in the fingers and palm.",
  },
  {
    title: "Advanced Hand Compression",
    body: "5 pressure levels and 3 massage modes (M1 Comprehensive, M2 Ladder, M3 Alternating) cover fingers through the wrist.",
  },
  {
    title: "Full-hand Coverage",
    body: "Airbags wrap each finger, the back of the hand, and the palm. Built for typing, instruments, studio work, and everyday chores.",
  },
  {
    title: "Fits Larger Hands",
    body: "Device size is about 7.41 × 9.64 × 3.93 inches, sized for most adult hands, including larger mens and womens sizes.",
  },
  {
    title: "Portable and Convenient",
    body: "Cordless battery use for 3 to 4 hours per charge, USB-C charging, and a 15-minute auto timer.",
  },
  {
    title: "How It Works",
    body: "Place your hand in the cuff and pick an intensity. Internal pads inflate and deflate with rhythmic pressure. Heat spreads through the palm while modes change the pattern. A 15-minute cycle is the default session.",
  },
  {
    title: "Shipping & Returns",
    body: "We ship within 1 to 2 working days. Delivery is 4 to 14 working days by tracked courier. If you are not satisfied, you can start a return within 90 days of delivery.",
  },
  {
    title: "90-Day Guarantee",
    body: "Every order includes a 90-day money-back guarantee from the delivery date. Email us if the device is not the right fit.",
  },
] as const;

export const trustItems = [
  "4.8/5 rating",
  "2,500 verified reviews",
  "90-day guarantee",
  "Free US shipping",
  "Cordless + rechargeable",
  "Heat & compression",
  "15-minute sessions",
  "Fits left and right hands",
] as const;
