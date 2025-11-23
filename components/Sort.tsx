"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { buildQueryUrl, updateQueryParams } from "@/lib/utils/query";

const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "newest", label: "Newest" },
    { value: "price_desc", label: "Price: High → Low" },
    { value: "price_asc", label: "Price: Low → High" },
];

export default function Sort() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const selected = searchParams.get("sort") ?? "featured";

    const handleChange = (value: string) => {
        const nextSort = value === "featured" ? undefined : value;
        const queryString = updateQueryParams(searchParams, { sort: nextSort });
        router.push(buildQueryUrl(pathname, queryString), { scroll: false });
    };

    return (
        <label className="flex items-center gap-2 text-body text-dark-900">
            <span className="whitespace-nowrap">Sort By</span>
            <select
                className="rounded-full border border-light-300 bg-light-100 px-3 py-2 text-body text-dark-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-500"
                value={selected}
                onChange={(event) => handleChange(event.target.value)}
                aria-label="Sort products"
            >
                {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    );
}
