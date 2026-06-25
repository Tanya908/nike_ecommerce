import Sidebar from "../../components/Sidebar/Sidebar.tsx";
import ProductsToolbar from "../../components/ProductsToolbar/ProductsToolBar.tsx";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid.tsx";
import {products} from "../../data/products.ts";
import {filterGroups} from "../../data/filters.ts";
import { useState } from "react";
import type {SelectedFilters} from "../../types/product.ts";
import {filterProducts} from "../../utils/filterProducts.ts";
import {sortProducts} from "../../utils/sortProducts.ts";


const Men = () => {

    const [sortOption, setSortOption] = useState("Featured");

    const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
        gender: ["men"],
        size: [],
        color: [],
        price: [],
    });

    const filteredProducts = filterProducts(products, selectedFilters);
    const sortedProducts = sortProducts(filteredProducts, sortOption);

    return (
        <div className="page-spacing my-8 flex gap-10">
            <Sidebar
                title={`New (${filteredProducts.length})`}
                filters={filterGroups}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
            />

            <div className="flex-1">
                <ProductsToolbar
                    sortOption={sortOption}
                    setSortOption={setSortOption}
                    breadcrumbs={[
                        { label: "Home", to: "/" },
                        { label: "Men" },
                    ]}
                />

                <ProductsGrid products={sortedProducts} />
            </div>
        </div>
    );
}
export default Men
