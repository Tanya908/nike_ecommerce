import Sidebar from "../../components/Sidebar/Sidebar.tsx";
import {filterGroups} from "../../components/Sidebar/filterData.ts";
import ProductsToolbar from "../../components/ProductsToolbar/ProductsToolBar.tsx";

const Men = () => {
    return (
        <div className="page-spacing my-8 flex gap-10">
            <Sidebar
                title="New (500)"
                filters={filterGroups}
            />

            <div className="flex-1">
                <ProductsToolbar />
            </div>
        </div>
    )
}
export default Men
