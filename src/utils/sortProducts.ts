import type { Product } from "../types/product";

export const sortProducts = (
    products: Product[],
    sortOption: string,
) => {
    const sorted = [...products];

    switch (sortOption) {
        case "Newest":
            return sorted.sort(
                (a, b) =>
                    new Date(b.releaseDate).getTime() -
                    new Date(a.releaseDate).getTime()
            );

        case "Price: High → Low":
            return sorted.sort((a, b) => b.price - a.price);

        case "Price: Low → High":
            return sorted.sort((a, b) => a.price - b.price);

        default:
            return sorted;
    }
};