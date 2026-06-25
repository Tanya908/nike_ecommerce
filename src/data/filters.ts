// src/data/filters.ts

import type { FilterGroup, PriceRange } from "../types/product";

export const priceRanges: PriceRange[] = [
    {
        value: "25-50",
        label: "$25 - $50",
        min: 25,
        max: 50,
    },
    {
        value: "50-100",
        label: "$50 - $100",
        min: 50,
        max: 100,
    },
    {
        value: "100-150",
        label: "$100 - $150",
        min: 100,
        max: 150,
    },
    {
        value: "150+",
        label: "Over $150",
        min: 150,
    },
];

export const filterGroups: FilterGroup[] = [
    {
        key: "gender",
        label: "Gender",
        options: [
            {
                value: "men",
                label: "Men",
            },
            {
                value: "women",
                label: "Women",
            },
            {
                value: "kids",
                label: "Kids",
            },
        ],
    },

    {
        key: "color",
        label: "Color",
        options: [
            {
                value: "white",
                label: "White",
                swatch: "#FFFFFF",
            },
            {
                value: "black",
                label: "Black",
                swatch: "#111111",
            },
            {
                value: "brown",
                label: "Brown",
                swatch: "#8B4513",
            },
            {
                value: "multicolor",
                label: "Multicolor",
                swatch: "linear-gradient(90deg,#ef4444,#f59e0b,#22c55e,#3b82f6,#8b5cf6)",
            },
        ],
    },

    {
        key: "price",
        label: "Shop By Price",
        options: priceRanges.map(({ value, label }) => ({
            value,
            label,
        })),
    },
];