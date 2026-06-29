import { Link } from "react-router-dom";
import type {Product} from "../types/product.ts";


type SearchDropdownProps = {
    search: string;
    results: Product[];
    onClose: () => void;
    mobile?: boolean;
};

const SearchDropdown = ({
                            search,
                            results,
                            onClose,
                            mobile = false,
                        }: SearchDropdownProps) => {
    if (!search.trim()) return null;

    return (
        <div
            className={`overflow-hidden rounded-2xl border border-[var(--color-light-300)] bg-white shadow-xl ${
                mobile
                    ? "mt-3 w-full"
                    : "absolute left-0 top-full mt-2 w-80 z-50"
            }`}
        >

            {results.length > 0 ? (
                results.map((product) => (
                    <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        onClick={onClose}
                        className="flex items-center gap-4 border-b border-[var(--color-light-300)] p-4 transition hover:bg-[var(--color-light-200)] last:border-0"
                    >
                        <img
                            src={product.imageSrc}
                            alt={product.title}
                            className="h-14 w-14 object-contain"
                        />

                        <div>
                            <p className="font-medium">
                                {product.title}
                            </p>

                            <p className="text-sm text-[var(--color-dark-600)]">
                                {product.subtitle}
                            </p>
                        </div>
                    </Link>
                ))
            ) : (
                <p className="p-4 text-sm text-[var(--color-dark-600)]">
                    No products found
                </p>
            )}
        </div>
    );
};

export default SearchDropdown;