import type { FilterGroup } from "./Sidebar";

export const filterGroups: FilterGroup[] = [
    {
        title: "Gender",
        options: [
            { label: "Men" },
            { label: "Women" },
            { label: "Kids" },
        ],
    },
    {
        title: "Color",
        options: [
            { label: "White", color: "#fff", border: true },
            { label: "Black", color: "#111" },
            { label: "Brown", color: "#8B4513" },
            {
                label: "Multicolor",
                color: "linear-gradient(90deg,#ef4444,#f59e0b,#22c55e,#3b82f6,#8b5cf6)",
            },
        ],
    },
    {
        title: "Shop By Price",
        options: [
            { label: "$25 - $50" },
            { label: "$50 - $100" },
            { label: "$100 - $150" },
            { label: "Over $150" },
        ],
    },
];