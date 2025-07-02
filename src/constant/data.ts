import { StaticImageData } from "next/image";
import img1 from "@/assets/nylon/one.webp";
import img2 from "@/assets/nylon/two.webp";
import img3 from "@/assets/nylon/3.jpg";

import nylonimg1 from "@/assets/nylon/1.jpg";
import nylon from "@/assets/nylon/nylon.jpg";
import recycle from "@/assets/nylon/recycle.jpg";
import china from "@/assets/nylon/china.jpg";
type Product = {
  id: number;
  title: string;
  specifications?: { name: string; desc: string }[];
  keyFeatures?: string[];
  applications?: string[];
  short: string;
  short2?: string;
  desc1: string;
  desc2: string;
  desc3: string;
  image1?: string | StaticImageData;
  image2?: string | StaticImageData;
  image: string | StaticImageData;
  link: string;
  conc?: {
    title: string;
    desc: string;
  };
};
export const products: Product[] = [
  {
    id: 1,
    title: "100% Nylon Yarn",
    short: "Virgin Strength. Sweater-Ready Softness.",
    short2:
      "Premium-Grade Polyamide Yarn Designed for Strength, Stretch & Versatility",
    desc1:
      "100% Nylon Yarn is the foundation of premium sweater knitting. Crafted from virgin nylon, it provides a soft hand feel, reliable elasticity, and strong color absorption making it ideal for solid-colored, textured, or blended sweaters.",
    desc2:
      "Known for its high durability and abrasion resistance, this yarn ensures long-lasting wear and perfect form retention. Whether for fine gauge or chunky knits, it's trusted by global sweater brands seeking consistency, comfort, and scalable supply.",
    desc3:
      "Hun Hsin Textile’s 100% Nylon Yarn is engineered from virgin polyamide 6 or 6.6 chips, processed using advanced dyeing and spinning technology. It offers outstanding strength, durability, and elasticity, making it ideal for premium activewear, socks, underwear, seamless knits, and industrial applications. Its smooth finish and color vibrancy make it one of the most demanded synthetic yarns for modern textile manufacturing.",
    image: img1,
    image1: nylonimg1,
    image2: nylon,
    keyFeatures: [
      "Virgin-grade nylon chips ensure consistent output",
      "High strength & stretch for long-lasting garments",
      "Excellent dyeability ideal for fashion-forward brands",
      "Low pilling, abrasion-resistant",
      "Scalable MOQ from 1kg sample to 1000kg+ bulk",
      "Anti-static, anti-microbial (on request)",
    ],
    applications: [
      "Socks & Stockings",
      "Women’s Lingerie & Seamless Wear",
      "Compression Wear",
      "Outdoor Apparel",
      "Industrial Netting, Parachutes, Tents",
      "Automotive & Tech-Textile Components",
    ],
    specifications: [
      {
        name: "Denier/Filament Options",
        desc: "20D/1, 40D/2, 50D/2, 70D/1, 70D/2, 80D/1",
      },
      {
        name: "Yarn Types",
        desc: "FDY, DTY, ATY, POY ",
      },
      {
        name: "Luster Types",
        desc: "Semi-dull, Bright, Full-dull (customizable) ",
      },
      {
        name: "Color Options",
        desc: "Raw white or dyed to Pantone/custom shades ",
      },
      {
        name: "Strength",
        desc: "High tenacity, low elongation rate ",
      },
      {
        name: "Moisture Management",
        desc: "Excellent wicking & drying ",
      },
    ],
    link: "/nylon-yarn",
    conc: {
      title: "Why It Matters to You",
      desc: "If you’re looking for a dependable supply of virgin nylon yarn with strict quality standards and flexible customizations, Hun Hsin is your global sourcing partner. Backed by OEKO-TEX® and REACH compliance, our yarns are suitable for EU/US markets. ",
    },
  },
  {
    id: 2,
    title: "Recycled Nylon Yarn",
    short: "Circular Innovation for Sweater Fashion.",
    short2: "Sustainable. Strong. Certified for Circularity.",
    desc1:
      "Recycled Nylon Yarn is designed for sweater manufacturers who want to embrace sustainability without sacrificing quality. Produced from regenerated materials such as post-industrial waste and recovered fishing nets, this yarn combines environmental responsibility with sweater-friendly performance.",
    desc2:
      "Engineered for softness, warmth, and stretch, it blends seamlessly into modern knitwear from cozy pullovers to fashion-forward layering pieces. Ideal for brands aiming to align with circular fashion trends, our recycled nylon delivers style, comfort, and a cleaner footprint.",
    desc3:
      "Our Recycled Nylon Yarn is manufactured from post-consumer or post-industrial nylon waste and refined through eco-conscious processes. Designed to offer the same strength and performance as virgin nylon, it helps brands and manufacturers reduce environmental impact without compromising quality.",

    image: img2,
    image1: nylonimg1,
    image2: recycle,
    keyFeatures: [
      "Made from 100% recycled polyamide waste",
      "Comparable performance to virgin yarn",
      "Eco-dyeing compatibility (low water + AZO-free)",
      "Full GRS traceability with batch-level records",
      "Supports green marketing and sustainability goals",
      "MOQ from 300kg ideal for mid-to-large buyers",
    ],

    applications: [
      "Eco-friendly Activewear",
      "Sustainable Swimwear & Innerwear",
      "Circular Fashion & Knitwear",
      "Recyclable Technical Textiles",
      "Socks, Leggings, and Compression Garments",
    ],

    specifications: [
      {
        name: "Denier/Filament Options",
        desc: "40D/2, 50D/2, 70D/2, 100D/1",
      },
      {
        name: "Color Options",
        desc: " Raw white or dyed (AZO-free)",
      },
      {
        name: "GRS Certified",
        desc: "Verified supply chain & traceability",
      },
      {
        name: "Yarn Types",
        desc: "Available in DTY, ATY",
      },
      {
        name: "Luster",
        desc: "Custom options based on buyer needs",
      },
    ],
    link: "/nylon-yarn",
    conc: {
      title: "Why It Matters to You",
      desc: "Recycled Nylon Yarn is your brand’s opportunity to offer sustainability without sacrificing functionality. We work closely with buyers to align yarn specs with their eco-certification goals. ",
    },
  },
  {
    id: 3,
    title: "China Feather Yarn",
    short: "Plush Texture. Perfect for Statement Sweaters.",
    short2: "Voluminous, Feather-Light Yarn for Texture-Driven Fashion",
    desc1:
      "China Feather Yarn brings volume and tactile richness to fashion sweaters and winter collections. Crafted with synthetic blends and engineered to mimic feather softness, it delivers both structure and softness in each loop.",
    desc2:
      "Ideal for cardigans, oversized knits, trims, and cozy layering pieces, this specialty yarn turns everyday sweaters into standout garments. Easy to knit, dye, and style; Feather Yarn by Hun Hsin is where comfort meets runway-ready texture. ",
    desc3:
      "Our China Feather Yarn is a nylon-based textured yarn engineered to mimic feather softness and volume. It is ideal for knitting luxurious, fashion-forward pieces with high visual impact. Its tactile softness and fluffy structure make it a favorite in winter collections and premium lifestyle brands.",

    image: img3,
    keyFeatures: [
      "Fluffy, ultra-soft yarn ideal for statement pieces",
      "Stable structure retains shape after knitting",
      "Dye-friendly and breathable",
      "Excellent for novelty knits, trims, and scarves",
      "Lightweight feel with a bulky appearance",
      "Compatible with flat knitting, hand knitting, and Jacquard machines",
    ],

    applications: [
      "Winter Scarves, Beanies, and Shawls",
      "Statement Sweaters or Jackets",
      "Children’s Wear and Fashion Accessories",
      "Home Textiles (throws, blankets)",
      "Artistic or Decorative Knitwear",
    ],

    specifications: [
      {
        name: "Blend",
        desc: "100% Nylon or Nylon-Spandex mix (custom)",
      },
      {
        name: "Denier",
        desc: "100D–300D bulk yarns",
      },
      {
        name: "Texture",
        desc: "Extra-fluffy, feather-like loops",
      },
      {
        name: "Color Options",
        desc: "Raw white & custom-dyed",
      },
      {
        name: "Luster",
        desc: "Soft matte or high-shine (custom)",
      },
    ],
    image1: nylonimg1,
    image2: china,
    link: "/nylon-yarn",
    conc: {
      title: "Why It Matters to You",
      desc: "China Feather Yarn is a niche yet high-value option for buyers seeking texture-rich designs with tactile impact. We offer low MOQs for seasonal runs and full support for color development. ",
    },
  },
];
