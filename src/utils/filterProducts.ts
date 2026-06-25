import type { Product, SelectedFilters } from "../types/product";

export const filterProducts = (
    products: Product[],
    selectedFilters: SelectedFilters,
) => {
    return products.filter((product) => {
        const matchesGender =
            selectedFilters.gender.length === 0 ||
            product.genders.some((gender) =>
                selectedFilters.gender.includes(gender)
            );

        const matchesColor =
            selectedFilters.color.length === 0 ||
            product.colors.some((color) =>
                selectedFilters.color.includes(color)
            );

        const matchesSize =
            selectedFilters.size.length === 0 ||
            product.sizes.some((size) =>
                selectedFilters.size.includes(size)
            );

        const matchesPrice =
            selectedFilters.price.length === 0 ||
            selectedFilters.price.some((range) => {
                switch (range) {
                    case "25-50":
                        return product.price >= 25 && product.price <= 50;

                    case "50-100":
                        return product.price >= 50 && product.price <= 100;

                    case "100-150":
                        return product.price >= 100 && product.price <= 150;

                    case "150+":
                        return product.price >= 150;

                    default:
                        return true;
                }
            });

        return (
            matchesGender &&
            matchesColor &&
            matchesSize &&
            matchesPrice
        );
    });
};