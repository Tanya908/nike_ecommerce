import type { Product } from "../types/product";

import Shoe1 from "../assets/shoes/shoe-1.webp";
import Shoe2 from "../assets/shoes/shoe-2.webp";
import Shoe3 from "../assets/shoes/shoe-3.webp";
import Shoe4 from "../assets/shoes/shoe-4.webp";
import Shoe5 from "../assets/shoes/shoe-5.webp";
import Shoe6 from "../assets/shoes/shoe-6.webp";
import Shoe7 from "../assets/shoes/shoe-7.webp";
import Shoe8 from "../assets/shoes/shoe-8.webp";
import Shoe9 from "../assets/shoes/shoe-9.webp";
import Shoe10 from "../assets/shoes/shoe-10.webp";
import Shoe11 from "../assets/shoes/shoe-11.webp";
import Shoe12 from "../assets/shoes/shoe-12.webp";
import Shoe13 from "../assets/shoes/shoe-13.webp";
import Shoe14 from "../assets/shoes/shoe-14.webp";
import Shoe15 from "../assets/shoes/shoe-15.webp";

export const products: Product[] = [
    {
        id: "air-force-1",
        title: "Nike Air Force 1 '07",
        subtitle: "Men's Shoes",
        description: "Classic everyday sneakers.",
        longDescription:
            "The Nike Air Force 1 '07 combines timeless basketball heritage with modern everyday comfort. Premium leather delivers durability and a clean look, while Nike Air cushioning provides lightweight support with every step. A durable rubber outsole offers reliable traction for daily wear.",
        genders: ["men"],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: ["multicolor", "white"],
        price: 120,
        imageSrc: Shoe1,
        badge: { label: "Best Seller", tone: "red" },
        releaseDate: "2025-01-12",
    },
    {
        id: "air-max-90",
        title: "Nike Air Max 90",
        subtitle: "Women's Shoes",
        description: "Legendary comfort and style.",
        longDescription:
            "The Nike Air Max 90 brings iconic style and all-day comfort to every look. Its visible Max Air unit delivers responsive cushioning with a retro aesthetic that stands out on any street. Reinforced overlays and a breathable upper make it as functional as it is fashionable.",
        genders: ["women"],
        sizes: ["6", "7", "8", "9", "10"],
        colors: ["multicolor"],
        price: 135,
        imageSrc: Shoe2,
        badge: { label: "New", tone: "orange" },
        releaseDate: "2025-02-18",
    },
    {
        id: "dunk-low",
        title: "Nike Dunk Low",
        subtitle: "Lifestyle Shoes",
        description: "Basketball icon turned streetwear.",
        longDescription:
            "Born on the basketball court, the Nike Dunk Low has become a cultural staple for streetwear enthusiasts. Its clean leather and suede upper offers a versatile canvas that pairs with any outfit, while a cushioned insole keeps you comfortable from morning to night. A durable rubber outsole provides everyday traction and lasting wearability.",
        genders: ["men", "women"],
        sizes: ["6", "7", "8", "9", "10", "11"],
        colors: ["brown", "white"],
        price: 115,
        imageSrc: Shoe3,
        badge: { label: "Popular", tone: "green" },
        releaseDate: "2025-03-10",
    },
    {
        id: "pegasus-41",
        title: "Nike Pegasus 41",
        subtitle: "Running Shoes",
        description: "Daily running companion.",
        longDescription:
            "The Nike Pegasus 41 is engineered to power through your daily miles with effortless ease. ReactX foam cushioning delivers a responsive, energized ride that keeps you moving step after step. A breathable mesh upper wraps your foot in lightweight support, making it the trusted choice for runners of all levels.",
        genders: ["men", "women"],
        sizes: ["7", "8", "9", "10", "11"],
        colors: ["black", "multicolor"],
        price: 160,
        imageSrc: Shoe4,
        badge: { label: "Running", tone: "green" },
        releaseDate: "2025-01-28",
    },
    {
        id: "air-jordan-1-mid",
        title: "Air Jordan 1 Mid",
        subtitle: "Basketball Shoes",
        description: "Premium leather construction.",
        longDescription:
            "The Air Jordan 1 Mid carries the legacy of basketball's greatest icon into every moment. Premium leather construction provides long-lasting durability and a structured fit, while a padded collar and Nike Air unit deliver comfort for all-day wear. Its mid-top silhouette offers classic ankle support with a bold, distinctive look.",
        genders: ["men"],
        sizes: ["8", "9", "10", "11", "12"],
        colors: ["white", "multicolor"],
        price: 170,
        imageSrc: Shoe5,
        badge: { label: "Limited", tone: "orange" },
        releaseDate: "2025-04-04",
    },
    {
        id: "court-vision",
        title: "Nike Court Vision Low",
        subtitle: "Women's Shoes",
        description: "Inspired by basketball heritage.",
        longDescription:
            "The Nike Court Vision Low draws on basketball's rich history to deliver clean, versatile everyday style. A leather upper with perforated toe and textured details keeps every step looking sharp, while a cushioned midsole provides comfortable all-day support. Lightweight and refined, it pairs effortlessly with any casual wardrobe.",
        genders: ["women"],
        sizes: ["6", "7", "8", "9"],
        colors: ["black"],
        price: 95,
        imageSrc: Shoe6,
        badge: { label: "Classic", tone: "green" },
        releaseDate: "2025-01-09",
    },
    {
        id: "blazer-mid",
        title: "Nike Blazer Mid '77",
        subtitle: "Lifestyle Shoes",
        description: "Retro design with modern comfort.",
        longDescription:
            "The Nike Blazer Mid '77 pays homage to the brand's basketball roots with a retro silhouette built for modern wear. A premium leather upper lends a vintage feel with long-lasting durability, while a vintage-inspired midsole adds a worn-in aesthetic. The padded collar and tongue deliver secure, cushioned comfort throughout the day.",
        genders: ["men", "women"],
        sizes: ["7", "8", "9", "10"],
        colors: ["multicolor", "black"],
        price: 110,
        imageSrc: Shoe7,
        badge: { label: "Vintage", tone: "orange" },
        releaseDate: "2025-02-20",
    },
    {
        id: "revolution-8",
        title: "Nike Revolution 8",
        subtitle: "Kids' Shoes",
        description: "Lightweight for everyday play.",
        longDescription:
            "The Nike Revolution 8 is designed to keep up with kids at their most active. A lightweight foam midsole cushions every jump and sprint on the playground, while the flexible outsole moves naturally with growing feet. The easy pull-on tab and breathable upper make getting dressed fast and comfortable.",
        genders: ["kids"],
        sizes: ["3", "4", "5", "6"],
        colors: ["multicolor"],
        price: 70,
        imageSrc: Shoe8,
        badge: { label: "Kids", tone: "green" },
        releaseDate: "2025-03-22",
    },
    {
        id: "vomero-18",
        title: "Nike Vomero 18",
        subtitle: "Running Shoes",
        description: "Maximum cushioning.",
        longDescription:
            "The Nike Vomero 18 sets the standard for premium daily running comfort. A thick stack of cushioned foam delivers plush, responsive support that absorbs impact mile after mile. The engineered mesh upper provides targeted breathability and structure, making every run feel smoother and more rewarding.",
        genders: ["men"],
        sizes: ["8", "9", "10", "11", "12"],
        colors: ["multicolor"],
        price: 185,
        imageSrc: Shoe9,
        badge: { label: "Premium", tone: "red" },
        releaseDate: "2025-04-01",
    },
    {
        id: "free-metcon",
        title: "Nike Free Metcon 6",
        subtitle: "Training Shoes",
        description: "Built for gym workouts.",
        longDescription:
            "The Nike Free Metcon 6 is purpose-built for the demands of the gym floor. A reinforced heel and wide, flat base provide stability for heavy lifts, while forefoot flex grooves allow natural foot movement during dynamic exercises. Durable overlays wrap the heel for a secure, supportive fit through every set.",
        genders: ["women"],
        sizes: ["6", "7", "8", "9", "10"],
        colors: ["multicolor"],
        price: 145,
        imageSrc: Shoe10,
        badge: { label: "Training", tone: "green" },
        releaseDate: "2025-03-01",
    },
    {
        id: "invincible-4",
        title: "Nike Invincible 4",
        subtitle: "Road Running Shoes",
        description: "Soft ZoomX cushioning.",
        longDescription:
            "The Nike Invincible 4 offers an unmatched level of cushioning for high-mileage road runners. Thick ZoomX foam in the midsole provides extreme softness and energy return, cradling your foot from the first mile to the last. A wide base and rocker geometry promote a smooth, stable stride for every type of runner.",
        genders: ["women"],
        sizes: ["6", "7", "8", "9"],
        colors: ["multicolor"],
        price: 190,
        imageSrc: Shoe11,
        badge: { label: "New", tone: "orange" },
        releaseDate: "2025-05-08",
    },
    {
        id: "air-max-plus",
        title: "Nike Air Max Plus",
        subtitle: "Lifestyle Shoes",
        description: "Bold Tuned Air cushioning.",
        longDescription:
            "The Nike Air Max Plus makes a bold statement with its aggressive wavy upper lines and signature Tuned Air cushioning. Multiple Air units target key pressure points to deliver responsive, all-day comfort on the move. Durable TPU overlays and a dynamic design make it a standout in any lifestyle rotation.",
        genders: ["men"],
        sizes: ["8", "9", "10", "11"],
        colors: ["white", "brown"],
        price: 180,
        imageSrc: Shoe12,
        badge: { label: "Trending", tone: "red" },
        releaseDate: "2025-02-12",
    },
    {
        id: "flex-runner",
        title: "Nike Flex Runner 3",
        subtitle: "Kids' Shoes",
        description: "Easy slip-on design.",
        longDescription:
            "The Nike Flex Runner 3 is made for little ones who are always on the go. Its slip-on construction with a stretchy upper means kids can put them on and take them off independently, building confidence with every wear. A lightweight foam midsole cushions active feet while a flexible outsole bends naturally with every step.",
        genders: ["kids"],
        sizes: ["2", "3", "4", "5"],
        colors: ["brown"],
        price: 65,
        imageSrc: Shoe13,
        badge: { label: "Easy On", tone: "orange" },
        releaseDate: "2025-01-25",
    },
    {
        id: "air-max-dn",
        title: "Nike Air Max Dn",
        subtitle: "Lifestyle Shoes",
        description: "Dynamic Air cushioning.",
        longDescription:
            "The Nike Air Max Dn pushes Air cushioning into new territory with its Dynamic Air unit that delivers differentiated pressure across the foot. Two distinct zones — firmer in the heel, softer in the forefoot — create a responsive feel that adapts to your movement. A sleek, futuristic upper makes it as visually striking as it is comfortable.",
        genders: ["men", "women"],
        sizes: ["7", "8", "9", "10", "11"],
        colors: ["multicolor"],
        price: 175,
        imageSrc: Shoe14,
        badge: { label: "Hot", tone: "red" },
        releaseDate: "2025-05-20",
    },
    {
        id: "zoom-fly-6",
        title: "Nike Zoom Fly 6",
        subtitle: "Performance Running Shoes",
        description: "Fast and responsive.",
        longDescription:
            "The Nike Zoom Fly 6 is engineered for runners who demand race-ready speed in their daily training. A carbon fiber-infused plate drives explosive toe-off energy, while a thick ReactX foam base cushions every high-impact stride. The lightweight engineered upper wraps the foot securely for a confident, aerodynamic feel.",
        genders: ["men", "women"],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: ["brown", "white", "multicolor"],
        price: 200,
        imageSrc: Shoe15,
        badge: { label: "Performance", tone: "green" },
        releaseDate: "2025-06-01",
    },
];