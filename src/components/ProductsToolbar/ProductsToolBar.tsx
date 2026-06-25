import Breadcrumbs from "./Breadcrumbs";
import Sort from "./Sort";

const ProductsToolbar = () => {
    return (
        <div className="mb-8 flex items-center justify-between border-b border-[var(--color-light-300)] pb-6">

            <Breadcrumbs
                items={[
                    {
                        label: "Home",
                        to: "/",
                    },
                    {
                        label: "Products",
                    },
                ]}
            />

            <Sort />
        </div>
    );
};

export default ProductsToolbar;