import type { CartItem as CartItemType } from "../../types/cart";
import { products } from "../../data/products";
import { Trash2, Minus, Plus } from "lucide-react";

type CartItemProps = {
    item: CartItemType;
};

const CartItem = ({ item }: CartItemProps) => {
    const product = products.find(
        (p) => p.id === item.productId
    );

    if (!product) return null;

    return (
        <article className="flex gap-5 border-b border-[var(--color-light-300)] py-8">
            <div className="h-52 w-52 flex-shrink-0 bg-[var(--color-light-200)]">
                <img
                    src={product.imageSrc}
                    alt={product.title}
                    className="h-full w-full object-contain"
                />
            </div>

            <div className="flex flex-1 justify-between">
                <div className="flex flex-col">

                    <h3 className="text-lead">{product.title}</h3>

                    <p className="mt-2 text-body text-[var(--color-dark-700)]">{product.subtitle}</p>

                    <div className="mt-8 flex items-center gap-10">

                        <p className="text-body"> Size{" "} <span className="font-medium">{item.size}</span> </p>

                        <div className="flex items-center gap-4 rounded-full bg-[var(--color-light-200)] px-5 py-3">

                            <span className="text-body text-[var(--color-dark-600)]"> Quantity </span>

                            <button> <Minus size={18} /> </button>

                            <span className="font-medium"> {item.quantity} </span>

                            <button> <Plus size={18} /> </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-end justify-between">

                    <p className="text-h3">${product.price.toFixed(2)}</p>

                    <button className="text-[var(--color-red)] transition hover:text-red-700"> <Trash2 size={22} /></button>
                </div>
            </div>
        </article>
    );
};

export default CartItem;