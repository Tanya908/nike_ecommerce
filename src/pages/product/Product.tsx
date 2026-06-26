import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import CardBadge from "../../components/CardBadge";
import Breadcrumbs from "../../components/ProductsToolbar/Breadcrumbs.tsx";
import {adultSizes, kidsSizes} from "../../data/sizes.ts";

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
                        <h3 className="mb-5 text-body-medium"> Select Size </h3>

                        <div className="grid grid-cols-5 gap-6">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    className="rounded-lg border py-4 transition hover:border-black"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="mt-8 w-full rounded-full bg-black py-5 text-white">Add to Cart</button>

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