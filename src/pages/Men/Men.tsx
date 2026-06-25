import Sidebar from "../../components/Sidebar/Sidebar.tsx";
import ProductsToolbar from "../../components/ProductsToolbar/ProductsToolBar.tsx";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid.tsx";
import {products} from "../../data/products.ts";
import {filterGroups} from "../../data/filters.ts";

const Men = () => {
    return (
        <div className="page-spacing my-8 flex gap-10">
            <Sidebar
                title="New (500)"
                filters={filterGroups}
            />

            <div className="flex-1">
                <ProductsToolbar />

                <ProductsGrid
                    products={products}
                />
            </div>
        </div>
    )
}
export default Men
