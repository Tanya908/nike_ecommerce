import type {BadgeTone} from "../components/CardBadge.tsx";

export type Gender = "men" | "women" | "kids";

export type Product = {
    id: string;

    title: string;
    subtitle: string;

    description?: string;
    longDescription: string;

    imageSrc: string;
    price: number;

    genders: Gender[];
    sizes: string[];
    colors: string[];

    badge?: {
        label: string;
        tone?: BadgeTone;
    };

    releaseDate: string;
};

export type FilterKey =
    | "gender"
    | "size"
    | "color"
    | "price";

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

export type PriceRange = {
    value: string;
    label: string;
    min: number;
    max?: number;
};

export type SelectedFilters = {
    gender: string[];
    color: string[];
    price: string[];
    size: string[];
};

export type Review = {
    id: string;
    productId: string;

    author: string;
    rating: number;

    title: string;
    comment: string;

    date: string;
};