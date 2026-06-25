import ShoeCard, { type CardProps } from "../ShoeCard";

type ProductsGridProps = {
    products: CardProps[];
};

const ProductsGrid = ({ products }: ProductsGridProps) => {
    if (products.length === 0) {
        return (
            <div className="rounded-2xl border border-[var(--color-light-300)] bg-[var(--color-light-200)] p-10 text-center">
                No products found.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
                <ShoeCard
                    key={product.title}
                    {...product}
                />
            ))}
        </div>
    );
};

export default ProductsGrid;