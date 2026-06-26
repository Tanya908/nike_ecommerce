import type { CartItem as CartItemType } from "../../types/cart";
import { products } from "../../data/products";
import { Trash2, Minus, Plus } from "lucide-react";
import {useCart} from "../../context/CartContext.tsx";

type CartItemProps = {
    item: CartItemType;
};

const CartItem = ({ item }: CartItemProps) => {

    const {
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    const product = products.find(
        (p) => p.id === item.productId
    );

    if (!product) return null;

    return (
        <article className="flex flex-col gap-6 border-b border-[var(--color-light-300)] py-8 sm:flex-row">
            <div className="mx-auto h-56 w-full max-w-[260px] bg-[var(--color-light-200)] sm:mx-0 sm:h-52 sm:w-52 sm:flex-shrink-0">
                <img
                    src={product.imageSrc}
                    alt={product.title}
                    className="h-full w-full object-contain"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between gap-6 sm:flex-row">

                <div className="flex flex-col">

                    <h3 className="text-lead">
                        {product.title}
                    </h3>

                    <p className="mt-2 text-body text-[var(--color-dark-700)]">
                        {product.subtitle}
                    </p>

                    <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10">

                        <p className="text-body">
                            Size{" "}
                            <span className="font-medium">
                            {item.size}
                        </span>
                        </p>

                        <div className="flex w-fit items-center gap-4 rounded-full bg-[var(--color-light-200)] px-5 py-3">

                        <span className="text-body text-[var(--color-dark-600)]">
                            Quantity
                        </span>

                            <button
                                className="cursor-pointer"
                                onClick={() =>
                                    decreaseQuantity(
                                        item.productId,
                                        item.size
                                    )
                                }
                            >
                                <Minus size={18} />
                            </button>

                            <span className="font-medium">
                            {item.quantity}
                        </span>

                            <button
                                className="cursor-pointer"
                                onClick={() =>
                                    increaseQuantity(
                                        item.productId,
                                        item.size
                                    )
                                }
                            >
                                <Plus size={18} />
                            </button>

                        </div>

                    </div>

                </div>

                <div className="flex flex-row items-center justify-between sm:flex-col sm:items-end">

                    <p className="text-h3">
                        ${product.price.toFixed(2)}
                    </p>

                    <button
                        className="cursor-pointer text-[var(--color-red)] transition hover:text-red-700"
                        onClick={() =>
                            removeFromCart(
                                item.productId,
                                item.size
                            )
                        }
                    >
                        <Trash2 size={22} />
                    </button>

                </div>

            </div>
        </article>
    );
};

export default CartItem;