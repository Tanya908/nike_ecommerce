import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import Button from "../Button";

const CartSummary = () => {
    const { cartItems } = useCart();

    const subtotal = cartItems.reduce((total, item) => {
        const product = products.find(
            (p) => p.id === item.productId
        );

        if (!product) return total;

        return total + product.price * item.quantity;
    }, 0);

    const shipping = subtotal >= 100 ? 0 : 10;

    const total = subtotal + shipping;

    return (
        <aside className="sticky top-28 p-8">

            <h2 className="mb-8 text-h3">
                Order Summary
            </h2>

            <div className="space-y-5">

                <div className="flex justify-between">
                    <span className="text-body"> Subtotal </span>

                    <span className="font-medium"> ${subtotal.toFixed(2)} </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-body"> Shipping </span>

                    <span className="font-medium">
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                </div>

                <div className="border-t border-[var(--color-light-300)] pt-5">

                    <div className="flex justify-between">
                        <span className="text-lead"> Total </span>
                        <span className="text-lead"> ${total.toFixed(2)} </span>
                    </div>
                </div>
            </div>

            <Button className="mt-8 w-full py-4">Proceed to Checkout</Button>

            <p className="mt-4 text-center text-caption text-[var(--color-dark-600)]">Taxes calculated at checkout.</p>
        </aside>
    );
};

export default CartSummary;