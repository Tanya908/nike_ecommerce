import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import CardBadge from "../../components/CardBadge";
import Breadcrumbs from "../../components/ProductsToolbar/Breadcrumbs.tsx";
import {adultSizes, kidsSizes} from "../../data/sizes.ts";
import {useState} from "react";
import Button from "../../components/Button.tsx";

const Product = () => {
    const { id } = useParams();

    const product = products.find((item) => item.id === id);

    if (!product) {
        return <h1>Product not found</h1>;
    }

    const category =
        product.genders[0].charAt(0).toUpperCase() +
        product.genders[0].slice(1);

    const sizes = product.genders.includes("kids")
        ? kidsSizes
        : adultSizes;

    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    return (
        <section className="page-spacing py-12">
                <Breadcrumbs
                    items={[
                        { label: "Home", to: "/" },
                        {
                            label: category,
                            to: `/${product.genders[0]}`,
                        },
                        {
                            label: product.title,
                        },
                    ]}
                />
            <div className="grid gap-16 lg:grid-cols-[0.9fr_1.2fr] mt-10 mx-auto">
                <div className="relative aspect-square overflow-hidden bg-[var(--color-light-200)]">
                    {product.badge && (
                        <CardBadge
                            label={product.badge.label}
                            tone={product.badge.tone}
                            className="absolute left-3 top-3 z-10"
                        />
                    )}

                    <img
                        src={product.imageSrc}
                        alt={product.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <div>
                    <h1 className="text-h1"> {product.title} </h1>

                    <p className="mt-2 text-body text-[var(--color-dark-700)]"> {product.subtitle} </p>

                    <p className="mt-6 text-h3"> ${product.price} </p>

                    <p className="mt-2 font-medium text-green-700"> Extra 20% off with code SPORT </p>

                    <div className="mt-10">
                        <h3 className="mb-5 text-body-medium">
                            Select Size
                        </h3>

                        <div className="grid grid-cols-4 gap-3">
                            {sizes.map((size) => {
                                const isAvailable = product.sizes.includes(size);
                                return (
                                    <button
                                        key={size}
                                        disabled={!isAvailable}
                                        onClick={() => setSelectedSize(size)}
                                        className={`rounded-lg border py-4 transition ${ selectedSize === size ? "border-[var(--color-green)] bg-[var(--color-green)] text-white"
                                                    : isAvailable ? "hover:border-black" : "cursor-not-allowed border-gray-300 text-gray-400 opacity-50"}`}
                                    >
                                        {size}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <Button
                        disabled={!selectedSize}
                        className="mt-8 w-full py-5"
                    >
                        Add to Cart
                    </Button>

                    <div className="mt-12 space-y-6">
                        <div className="border-b pb-6">
                            <h3 className="text-h3"> Product Details</h3>
                        </div>

                        <div className="border-b pb-6">
                            <h3 className="text-h3">Shipping & Returns</h3>
                        </div>

                        <div className="border-b pb-6">
                            <h3 className="text-h3">Reviews</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;