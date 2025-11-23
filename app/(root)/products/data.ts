import { BadgeTone } from "@/components/Card";

export type Gender = "men" | "women" | "kids";
export type ShoeHeight = "low" | "mid" | "high";

export type Product = {
    id: string;
    title: string;
    subtitle: string;
    description?: string;
    genders: Gender[];
    sizes: string[];
    colors: string[];
    price: number;
    height: ShoeHeight;
    imageSrc: string;
    badge?: { label: string; tone?: BadgeTone };
    releaseDate: string;
};

export type FilterKey = "gender" | "size" | "color" | "price" | "height";

export type FilterOption = {
    value: string;
    label: string;
    swatch?: string;
};

export type FilterGroup = {
    key: FilterKey;
    label: string;
    options: FilterOption[];
};

export const priceRanges = [
    { value: "0-50", label: "$0 - $50", min: 0, max: 50 },
    { value: "50-100", label: "$50 - $100", min: 50, max: 100 },
    { value: "100-150", label: "$100 - $150", min: 100, max: 150 },
    { value: "150+", label: "Over $150", min: 150 },
];

export const filterGroups: FilterGroup[] = [
    {
        key: "gender",
        label: "Gender",
        options: [
            { value: "men", label: "Men" },
            { value: "women", label: "Women" },
            { value: "kids", label: "Kids" },
        ],
    },
    {
        key: "size",
        label: "Size",
        options: ["6", "7", "8", "9", "10", "11", "12", "13"].map((size) => ({
            value: size,
            label: size,
        })),
    },
    {
        key: "color",
        label: "Color",
        options: [
            { value: "black", label: "Black", swatch: "#111111" },
            { value: "white", label: "White", swatch: "#f5f5f5" },
            { value: "red", label: "Red", swatch: "#d33918" },
            { value: "blue", label: "Blue", swatch: "#1d4ed8" },
            { value: "green", label: "Green", swatch: "#007d48" },
            { value: "grey", label: "Grey", swatch: "#9ca3af" },
            { value: "brown", label: "Brown", swatch: "#92400e" },
            { value: "pink", label: "Pink", swatch: "#db2777" },
        ],
    },
    {
        key: "price",
        label: "Price",
        options: priceRanges.map(({ value, label }) => ({ value, label })),
    },
    {
        key: "height",
        label: "Shoe Height",
        options: [
            { value: "low", label: "Low Top" },
            { value: "mid", label: "Mid Top" },
            { value: "high", label: "High Top" },
        ],
    },
];

export const products: Product[] = [
    {
        id: "air-force-1-07",
        title: "Nike Air Force 1 '07",
        subtitle: "Men's Shoes",
        description: "The legend lives on in this low-cut classic.",
        genders: ["men", "women"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        colors: ["white"],
        price: 110,
        height: "low",
        imageSrc: "/shoes/shoe-1.jpg",
        badge: { label: "Best Seller", tone: "red" },
        releaseDate: "2024-09-18",
    },
    {
        id: "air-max-sc",
        title: "Nike Air Max SC",
        subtitle: "Men's Shoes",
        description: "A mix of airy mesh and suede overlays for everyday comfort.",
        genders: ["men"],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: ["white", "blue"],
        price: 100,
        height: "low",
        imageSrc: "/shoes/shoe-2.webp",
        badge: { label: "Sustainable Materials", tone: "green" },
        releaseDate: "2024-11-02",
    },
    {
        id: "dunk-low-retro",
        title: "Nike Dunk Low Retro",
        subtitle: "Men's Shoes",
        description: "Heritage hoops styling with padded comfort.",
        genders: ["men", "women"],
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        colors: ["blue", "white"],
        price: 125,
        height: "low",
        imageSrc: "/shoes/shoe-3.webp",
        badge: { label: "Best Seller", tone: "red" },
        releaseDate: "2024-08-12",
    },
    {
        id: "air-jordan-1-mid",
        title: "Air Jordan 1 Mid SE",
        subtitle: "Men's Shoes",
        description: "Premium leather with a supportive mid profile.",
        genders: ["men", "women"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        colors: ["black", "grey"],
        price: 135,
        height: "mid",
        imageSrc: "/shoes/shoe-4.webp",
        badge: { label: "Best Seller", tone: "red" },
        releaseDate: "2024-07-05",
    },
    {
        id: "pegasus-trail-4",
        title: "Nike Pegasus Trail 4 GORE-TEX",
        subtitle: "Men's Waterproof Shoes",
        description: "Weather-ready cushioning for off-road runs.",
        genders: ["men"],
        sizes: ["8", "9", "10", "11", "12"],
        colors: ["green", "black"],
        price: 165,
        height: "high",
        imageSrc: "/shoes/shoe-5.avif",
        badge: { label: "New Arrival", tone: "orange" },
        releaseDate: "2024-12-01",
    },
    {
        id: "invincible-3",
        title: "Nike Invincible 3",
        subtitle: "Women's Road Running Shoes",
        description: "Plush cushioning for long weekend miles.",
        genders: ["women"],
        sizes: ["6", "7", "8", "9", "10", "11"],
        colors: ["pink", "white"],
        price: 180,
        height: "low",
        imageSrc: "/shoes/shoe-6.avif",
        badge: { label: "Best Seller", tone: "red" },
        releaseDate: "2024-10-24",
    },
    {
        id: "court-vision-low",
        title: "Nike Court Vision Low",
        subtitle: "Women's Shoes",
        description: "Retro basketball vibes in a streamlined profile.",
        genders: ["women"],
        sizes: ["6", "7", "8", "9", "10", "11"],
        colors: ["white", "pink"],
        price: 75,
        height: "low",
        imageSrc: "/shoes/shoe-7.avif",
        badge: { label: "New Arrival", tone: "orange" },
        releaseDate: "2024-11-15",
    },
    {
        id: "air-max-90-ltr",
        title: "Nike Air Max 90 LTR",
        subtitle: "Women's Shoes",
        description: "Classic Air cushioning with leather overlays.",
        genders: ["women"],
        sizes: ["6", "7", "8", "9", "10", "11"],
        colors: ["white", "green"],
        price: 125,
        height: "low",
        imageSrc: "/shoes/shoe-9.avif",
        badge: { label: "Best Seller", tone: "red" },
        releaseDate: "2024-09-30",
    },
    {
        id: "blazer-mid-77",
        title: "Nike Blazer Mid '77 Vintage",
        subtitle: "Women's Shoes",
        description: "A heritage mid-top with retro suede accents.",
        genders: ["women"],
        sizes: ["6", "7", "8", "9", "10"],
        colors: ["white", "black"],
        price: 100,
        height: "mid",
        imageSrc: "/shoes/shoe-8.avif",
        badge: { label: "Classic", tone: "orange" },
        releaseDate: "2024-08-28",
    },
    {
        id: "free-metcon-5",
        title: "Nike Free Metcon 5",
        subtitle: "Women's Training Shoes",
        description: "Stable yet flexible for strength and cardio days.",
        genders: ["women"],
        sizes: ["6", "7", "8", "9", "10", "11"],
        colors: ["pink", "white"],
        price: 130,
        height: "low",
        imageSrc: "/shoes/shoe-10.avif",
        badge: { label: "Gym Essential", tone: "green" },
        releaseDate: "2024-09-12",
    },
    {
        id: "vomero-17",
        title: "Nike Air Zoom Vomero 17",
        subtitle: "Men's Road Running Shoes",
        description: "Responsive cushioning built for daily training.",
        genders: ["men"],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: ["black", "white"],
        price: 180,
        height: "low",
        imageSrc: "/shoes/shoe-11.avif",
        badge: { label: "New Arrival", tone: "orange" },
        releaseDate: "2024-12-05",
    },
    {
        id: "jordan-series-es",
        title: "Jordan Series ES",
        subtitle: "Men's Shoes",
        description: "Laid-back style inspired by Jordan heritage.",
        genders: ["men", "women"],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: ["green", "white"],
        price: 105,
        height: "low",
        imageSrc: "/shoes/shoe-12.avif",
        badge: { label: "Everyday Wear", tone: "green" },
        releaseDate: "2024-07-22",
    },
    {
        id: "revolution-7",
        title: "Nike Revolution 7",
        subtitle: "Kids' Road Running Shoes",
        description: "Lightweight feel for energetic runs.",
        genders: ["kids"],
        sizes: ["3", "4", "5", "6", "7"],
        colors: ["blue", "black"],
        price: 70,
        height: "low",
        imageSrc: "/shoes/shoe-13.avif",
        badge: { label: "Best Seller", tone: "red" },
        releaseDate: "2024-06-10",
    },
    {
        id: "pegasus-41",
        title: "Nike Pegasus 41",
        subtitle: "Men's Road Running Shoes",
        description: "Smooth transitions and breathable mesh upper.",
        genders: ["men", "women"],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: ["grey", "green"],
        price: 150,
        height: "low",
        imageSrc: "/shoes/shoe-14.avif",
        badge: { label: "Daily Trainer", tone: "green" },
        releaseDate: "2024-09-02",
    },
    {
        id: "flex-runner-2",
        title: "Nike Flex Runner 2",
        subtitle: "Kids' Easy On/Off Shoes",
        description: "Slip-on design with flexible cushioning.",
        genders: ["kids"],
        sizes: ["3", "4", "5", "6", "7"],
        colors: ["brown", "black"],
        price: 50,
        height: "low",
        imageSrc: "/shoes/shoe-15.avif",
        badge: { label: "Easy On", tone: "orange" },
        releaseDate: "2024-10-01",
    },
];
