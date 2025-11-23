"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { buildQueryUrl, updateQueryParams } from "lib/utils/query";

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
        <label className="flex items-center gap-8 text-body text-dark-900">
            <span className="whitespace-nowrap">Sort By</span>
            <select
                className="bg-transparent border-0 p-0 m-0 text-body text-dark-900 shadow-none outline-none focus:outline-none focus:ring-0 focus-visible:ring-0"
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
