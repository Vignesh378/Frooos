import image1 from "../assets/image  1.jpg";
import image2 from "../assets/image 2.jpg";
import image3 from "../assets/image 3.jpg";
import image4 from "../assets/image 4.jpg";
import lycheeImage from "../assets/lychee-juice-lychee-fruit.jpg";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "shop", label: "Shop" },
  { id: "juices", label: "Juices" },
  { id: "fruit-bowls", label: "Fruit Bowls" },
  { id: "cart", label: "Cart" },
  { id: "login", label: "Login" },
  { id: "logout", label: "Logout" },
];

export const juiceProducts = [
  {
    id: "citrus-splash",
    name: "Citrus Splash",
    category: "Juice",
    price: 8,
    description: "Orange, pineapple, and mint pressed at sunrise.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    icon: "🍊",
  },
  {
    id: "berry-burst",
    name: "Berry Burst",
    category: "Juice",
    price: 9,
    description: "Strawberry, raspberry, and acai with coconut water.",
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80",
    icon: "🍓",
  },
  {
    id: "tropical-glow",
    name: "Tropical Glow",
    category: "Juice",
    price: 9.5,
    description: "Mango, passionfruit, and ginger for sunny vibes.",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80",
    icon: "🥭",
  },
  {
    id: "emerald-press",
    name: "Emerald Press",
    category: "Juice",
    price: 9,
    description: "Green apple, kale, cucumber, and lime zest.",
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=900&q=80",
    icon: "🥝",
  },
];

export const bowlProducts = [
  {
    id: "sunrise-bowl",
    name: "Sunrise Bowl",
    category: "Bowl",
    price: 11,
    description: "Dragon fruit, mango, banana, and coconut crunch.",
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=80",
    icon: "🍍",
  },
  {
    id: "forest-bowl",
    name: "Forest Bowl",
    category: "Bowl",
    price: 12,
    description: "Blueberry, kiwi, pistachio, and chia drizzle.",
    image:
      "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=900&q=80",
    icon: "🫐",
  },
  {
    id: "cocoa-berry",
    name: "Cocoa Berry",
    category: "Bowl",
    price: 12.5,
    description: "Acai, cacao nibs, raspberry, and almond crunch.",
    image:
      "https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=900&q=80",
    icon: "🍫",
  },
];

export const testimonials = [
  {
    quote:
      "Every sip tastes like a mini vacation. The juices arrive chilled and vibrant every single time.",
    name: "Casey Rivera",
    role: "Wellness Coach",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Our café partnered with Frooos and customers can’t get enough of the fruit bowls. Pure sunshine!",
    name: "Morgan Lee",
    role: "Café Owner",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The team is obsessed with the Citrus Splash. It’s the perfect pick-me-up during long design sprints.",
    name: "Jordan Patel",
    role: "Product Designer",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
  },
];

export const fruitEmojis = ["🍓", "🍍", "🍑", "🍉", "🍋", "🍇"];

export const heroContent = {
  heading: "Dragon Fruit Feels · Our Emotion",
  tagline: "Electrolyte beverage crafted for the summer glow.",
  description:
    "Perfect for a summer day when the sun is shining, don’t forget your mint leaves! Add your choice of spirit and enjoy.",
  primaryCta: { label: "Buy Now", href: "#shop" },
  secondaryCta: { label: "Explore Menu", href: "#juices" },
  fruitImage: "/dragon-image.png",
  backgroundText: "Bruvana",
};

export const showcaseProducts = [
  {
    id: "remix-lychee",
    name: "Remix Lychee",
    description: "Beat the heat with Bruvana-approved Remix Lychee.",
    price: 60,
    image: lycheeImage,
  },
  {
    id: "sports-lychee",
    name: "Sports+ Lychee",
    description: "Electrolyte beverage crafted for summertime moves.",
    price: 50,
    image: image2,
  },
];

export const showcaseHighlights = [
  {
    title: "It’s Summertime!",
    description: "Beat the heat with Bruvana-approved Remix recipes.",
    icon: "☀️",
  },
  {
    title: "Make your mix!",
    description: "Endless cocktail pairings dreamed for sunny afternoons.",
    icon: "🧊",
  },
  {
    title: "BruFit!",
    description: "Stay on top of your game with fitness tips and ideas.",
    icon: "🏃",
  },
];

export const partnerLogos = [
  "Coca-Cola",
  "Kellogg's",
  "Nestlé",
  "Nutella",
  "KFC",
];

export const bestSellerProducts = [
  {
    id: "margarita",
    name: "Margarita",
    price: 50,
    description:
      "Rich beetroot blended with lime and mint. Add your choice of spirit and enjoy!",
    image: image3,
  },
  {
    id: "mojito",
    name: "Mojito",
    price: 50,
    description:
      "Dark grape and mint fusion. Perfect for a summer day when the sun is shining!",
    image: image1,
  },
];

export const tropicalPartyProducts = [
  {
    id: "sports-mango",
    name: "Sports+ Mango",
    price: 55,
    description:
      "Fresh squeezed orange juice with tropical vibes that refuel your whole crew.",
    image: image4,
  },
  {
    id: "mango-chili",
    name: "Mango Chili Mojito",
    price: 52,
    description:
      "Dark berry blend with mint layers that elevate every beach-side night.",
    image: image1,
  },
];

export const remixSignatureProducts = [
  {
    id: "remix-original",
    name: "Remix Original",
    price: 60,
    description: "Sunshine citrus blend with Bruvana-approved Remix party mix.",
    image: image4,
  },
  {
    id: "sports-lychee-plus",
    name: "Sports+ Lychee",
    price: 58,
    description: "Exotic lychee electrolyte beverage crafted for summertime moves.",
    image: lycheeImage,
  },
];

export const brandHighlights = {
  heading: "We have some perfect options you’ll love",
  points: [
    "Nature-fresh ingredients picked at sunrise",
    "Zero artificial colors, additives, or preservatives",
    "Deliveries packed chilled and ready to pour",
  ],
  cards: [
    {
      title: "Vision",
      description: "Craft feel-good fruit experiences that spark joy everyday.",
      tone: "rose",
    },
    {
      title: "Mission",
      description: "Connect communities with premium fruit wellness rituals.",
      tone: "blue",
    },
  ],
};

export const spotlightTestimonial = {
  quote:
    "I recently purchased a stunning mocktail box from Bruvana and wow, I loved the combination! The packaging was exceptional, the attention to detail is so evident in every aspect.",
  name: "Mohammed Aiyed Hassan",
  role: "Lifestyle Blogger",
};

