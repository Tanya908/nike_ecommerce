import { useState } from "react";
import type {Gender, SelectedFilters} from "../../types/product.ts";
import {filterProducts} from "../../utils/filterProducts.ts";
import {sortProducts} from "../../utils/sortProducts.ts";
import {products} from "../../data/products.ts";
import {filterGroups} from "../../data/filters.ts";
import ProductsToolbar from "../../components/ProductsToolbar/ProductsToolBar.tsx";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid.tsx";
import Sidebar from "../../components/Sidebar/Sidebar.tsx";
import {adultSizes, kidsSizes} from "../../data/sizes.ts";

type CategoryPageProps = {
    gender: Gender;
    title: string;
};

const CategoryPage = ({
                          gender,
                          title,
                      }: CategoryPageProps) => {
    const [sortOption, setSortOption] = useState("Featured");

    const [selectedFilters, setSelectedFilters] =
        useState<SelectedFilters>({
            gender: [gender],
            size: [],
            color: [],
            price: [],
        });

    const filteredProducts = filterProducts(products, selectedFilters);
    const sortedProducts = sortProducts(filteredProducts, sortOption);

    const sidebarFilters = filterGroups.map((group) => {
        if (group.key !== "size") {
            return group;
        }

        const sizes =
            gender === "kids"
                ? kidsSizes
                : adultSizes;

        return {
            ...group,
            options: sizes.map((size) => ({
                value: size,
                label: size,
            })),
        };
    });

    return (
        <div className="page-spacing my-8 flex gap-10">
            <Sidebar
                title={`New (${filteredProducts.length})`}
                filters={sidebarFilters}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
            />

            <div className="flex-1">
                <ProductsToolbar
                    sortOption={sortOption}
                    setSortOption={setSortOption}
                    breadcrumbs={[
                        { label: "Home", to: "/" },
                        { label: title },
                    ]}
                />

                <ProductsGrid
                    products={sortedProducts}
                />
            </div>
        </div>
    );
};

export default CategoryPage;