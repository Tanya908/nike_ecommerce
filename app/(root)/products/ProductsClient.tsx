"use client";

import { useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


import { FilterGroup, FilterKey, Gender, Product, ShoeHeight, filterGroups as defaultGroups, priceRanges } from "./data";
import { buildQueryUrl, parseMultiValueParam, removeQueryParams, toggleArrayValue } from "lib/utils/query";
import Card from "components/Card";
import Filters from "components/Filters";
import Sort from "components/Sort";

interface ProductsClientProps {
    products: Product[];
    groups?: FilterGroup[];
}

const priceRangeMap = Object.fromEntries(priceRanges.map((range) => [range.value, range]));

const heightLabel = (height: ShoeHeight) => {
    switch (height) {
        case "mid":
            return "Mid Top";
        case "high":
            return "High Top";
        default:
            return "Low Top";
    }
};

const formatColors = (colors: string[]) => colors.map((color) => color[0]?.toUpperCase() + color.slice(1)).join(", ");

type FilterState = Record<FilterKey, string[]>;

const defaultFilterState: FilterState = {
    gender: [],
    size: [],
    color: [],
    price: [],
    height: [],
};

export default function ProductsClient({ products, groups = defaultGroups }: ProductsClientProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const featuredOrder = useMemo(() => {
        const order = new Map<string, number>();
        products.forEach((product, index) => {
            order.set(product.id, index);
        });
        return order;
    }, [products]);

    const filters = useMemo(() => {
        const values: FilterState = { ...defaultFilterState };
        (Object.keys(values) as FilterKey[]).forEach((key) => {
            values[key] = parseMultiValueParam(searchParams.get(key));
        });
        return values;
    }, [searchParams]);

    const sort = searchParams.get("sort") ?? "featured";

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            if (filters.gender.length) {
                const matchesGender = filters.gender.some((value) => product.genders.includes(value as Gender));
                if (!matchesGender) return false;
            }

            if (filters.size.length) {
                const matchesSize = filters.size.some((size) => product.sizes.includes(size));
                if (!matchesSize) return false;
            }

            if (filters.color.length) {
                const matchesColor = filters.color.some((color) => product.colors.includes(color));
                if (!matchesColor) return false;
            }

            if (filters.height.length) {
                const matchesHeight = filters.height.includes(product.height);
                if (!matchesHeight) return false;
            }

            if (filters.price.length) {
                const matchesPrice = filters.price.some((rangeValue) => {
                    const range = priceRangeMap[rangeValue];
                    if (!range) return false;

                    const aboveMin = range.min === undefined ? true : product.price >= range.min;
                    const belowMax = range.max === undefined ? true : product.price < range.max;
                    return aboveMin && belowMax;
                });

                if (!matchesPrice) return false;
            }

            return true;
        });
    }, [filters, products]);

    const sortedProducts = useMemo(() => {
        const list = [...filteredProducts];

        switch (sort) {
            case "price_desc":
                return list.sort((a, b) => b.price - a.price);
            case "price_asc":
                return list.sort((a, b) => a.price - b.price);
            case "newest":
                return list.sort(
                    (a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime(),
                );
            default:
                return list.sort((a, b) => (featuredOrder.get(a.id) ?? 0) - (featuredOrder.get(b.id) ?? 0));
        }
    }, [filteredProducts, sort, featuredOrder]);

    const optionLookup = useMemo(() => {
        const lookup: Record<FilterKey, Record<string, string>> = {
            gender: {},
            size: {},
            color: {},
            price: {},
            height: {},
        };

        groups.forEach((group) => {
            group.options.forEach((option) => {
                lookup[group.key][option.value] = option.label;
            });
        });

        return lookup;
    }, [groups]);

    const activeChips = useMemo(() => {
        const chips: { key: FilterKey; value: string; label: string }[] = [];
        (Object.keys(filters) as FilterKey[]).forEach((key) => {
            filters[key].forEach((value) => {
                const label = optionLookup[key][value] ?? value;
                chips.push({ key, value, label });
            });
        });
        return chips;
    }, [filters, optionLookup]);

    const handleRemoveChip = (key: FilterKey, value: string) => {
        const queryString = toggleArrayValue(searchParams, key, value);
        router.push(buildQueryUrl(pathname, queryString), { scroll: false });
    };

    const handleClearFilters = () => {
        const queryString = removeQueryParams(searchParams, groups.map((group) => group.key));
        router.push(buildQueryUrl(pathname, queryString), { scroll: false });
    };

    return (
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <div className="w-full md:w-[280px]  md:shrink-0 md:pt-2">
                <Filters groups={groups} />
            </div>

            <div className="min-w-0 flex-1 space-y-6 lg:space-y-8">
                <div className="flex flex-col gap-3 border-b border-light-300 pb-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="space-y-1">
                        <nav className="flex items-center gap-2 text-caption text-dark-700" aria-label="Breadcrumb">
                            <Link href="/">Home</Link>
                            <span aria-hidden>/</span>
                            <span className="text-dark-900">Products</span>
                        </nav>
                    </div>
                    <div className="flex items-center justify-between gap-4 lg:justify-end">
                        <Sort />
                    </div>
                </div>

                {activeChips.length > 0 && (
                    <div className="flex flex-wrap items-center gap-3">
                        {activeChips.map((chip) => (
                            <button
                                key={`${chip.key}-${chip.value}`}
                                type="button"
                                className="group flex items-center gap-2 rounded-full border border-light-300 bg-light-200 px-3 py-1.5 text-caption text-dark-900 transition hover:-translate-y-0.5 hover:border-dark-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-500"
                                onClick={() => handleRemoveChip(chip.key, chip.value)}
                            >
                                <span>{chip.label}</span>
                                <span aria-hidden className="text-dark-700 group-hover:text-dark-900">
                                    ×
                                </span>
                                <span className="sr-only">Remove {chip.label}</span>
                            </button>
                        ))}
                        <button
                            type="button"
                            className="text-caption font-medium text-dark-700 underline-offset-4 transition hover:text-dark-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-500"
                            onClick={handleClearFilters}
                        >
                            Clear all
                        </button>
                    </div>
                )}

                <div>
                    {sortedProducts.length === 0 ? (
                        <div className="rounded-2xl border border-light-300 bg-light-200 p-10 text-center text-body text-dark-700">
                            No products match your filters. Try adjusting the filters to see more options.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {sortedProducts.map((product) => (
                                <Card
                                    key={product.id}
                                    title={product.title}
                                    description={product.description}
                                    meta={[formatColors(product.colors), heightLabel(product.height)]}
                                    price={product.price}
                                    imageSrc={product.imageSrc}
                                    badge={product.badge}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
