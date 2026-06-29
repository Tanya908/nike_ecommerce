import Button from "../Button";
import { useCart } from "../../context/CartContext.tsx";
import { products } from "../../data/products";

const FREE_SHIPPING_THRESHOLD = 100;
const SHIPPING_COST = 15;

const OrderSummary = () => {
    const { cartItems } = useCart();

    const subtotal = cartItems.reduce((total, item) => {
        const product = products.find(
            (p) => p.id === item.productId
        );

        if (!product) return total;

        return total + product.price * item.quantity;
    }, 0);

    const shipping =
        subtotal >= FREE_SHIPPING_THRESHOLD
            ? 0
            : SHIPPING_COST;

    const total = subtotal + shipping;

    return (
        <aside className="sticky top-28 h-fit rounded-2xl border border-[var(--color-light-300)] p-8">

            <h2 className="text-h3">
                Order Summary
            </h2>

            <p className="mt-6 mb-4 text-body-medium">
                Items ({cartItems.length})
            </p>

            <div className="space-y-4">

                {cartItems.length === 0 ? (
                    <p className="text-body text-[var(--color-dark-600)]">
                        Your cart is empty.
                    </p>
                ) : (
                    cartItems.map((item) => {
                        const product = products.find(
                            (p) => p.id === item.productId
                        );

                        if (!product) return null;

                        const productTotal =
                            product.price * item.quantity;

                        return (
                            <div
                                key={`${item.productId}-${item.size}`}
                                className="flex items-start justify-between gap-4"
                            >
                                <div className="flex-1">
                                    <p className="font-medium">
                                        {product.title}
                                    </p>

                                    <p className="mt-1 text-sm text-[var(--color-dark-600)]">
                                        Size {item.size} • Qty {item.quantity}
                                    </p>
                                </div>

                                <span className="whitespace-nowrap font-medium">
                                    ${productTotal.toFixed(2)}
                                </span>
                            </div>
                        );
                    })
                )}

            </div>

            <div className="my-8 border-t border-[var(--color-light-300)]" />

            <div className="space-y-4">

                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                    <span>Shipping</span>

                    <span>
                        {shipping === 0
                            ? "Free"
                            : `$${shipping.toFixed(2)}`}
                    </span>
                </div>

            </div>

            <div className="my-8 border-t border-[var(--color-light-300)]" />

            <div className="flex justify-between text-h3">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>

            <Button
                type="submit"
                className="mt-8 w-full py-4"
            >
                Place Order
            </Button>

            <p className="mt-5 text-center text-body text-[var(--color-dark-600)]">
                Secure payment powered by Stripe.
            </p>

        </aside>
    );
};

export default OrderSummary;