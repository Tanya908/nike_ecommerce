import type { CartItem as CartItemType } from "../../types/cart";
import { products } from "../../data/products";

type CartItemProps = {
    item: CartItemType;
};

const CartItem = ({
                      item,
                  }: CartItemProps) => {

    const product = products.find(
        (p) => p.id === item.productId
    );

    if (!product) return null;

    return (
        <div className="rounded-xl border p-6">

            <img
                src={product.imageSrc}
                alt={product.title}
                className="mb-4 h-40 w-40 object-contain"
            />

            <h3>{product.title}</h3>

            <p>Size: {item.size}</p>

            <p>Quantity: {item.quantity}</p>

            <p>${product.price}</p>

        </div>
    );
};

export default CartItem;