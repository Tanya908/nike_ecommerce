import Breadcrumbs, {type BreadcrumbItem} from "./Breadcrumbs";
import Sort from "./Sort";

type ProductsToolbarProps = {
    sortOption: string;
    setSortOption: React.Dispatch<React.SetStateAction<string>>;
    breadcrumbs: BreadcrumbItem[];
};

const ProductsToolbar = ({
                             sortOption,
                             setSortOption,
                             breadcrumbs,
                         }: ProductsToolbarProps) => {
    return (
        <div className="mb-8 flex items-center justify-between border-b border-[var(--color-light-300)] pb-6">

            <Breadcrumbs items={breadcrumbs} />

            <Sort
                sortOption={sortOption}
                setSortOption={setSortOption}
            />
        </div>
    );
};

export default ProductsToolbar;