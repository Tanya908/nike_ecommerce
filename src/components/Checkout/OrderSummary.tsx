import Button from "../Button";

const OrderSummary = () => {
    return (
        <aside className="sticky top-28 rounded-2xl border border-[var(--color-light-300)] p-8 h-fit">

            <h2 className="mb-8 text-h3">
                Order Summary
            </h2>

            <div className="space-y-4">

                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$320.00</span>
                </div>

                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>

                <div className="flex justify-between">
                    <span>Taxes</span>
                    <span>$28.80</span>
                </div>

            </div>

            <div className="my-8 border-t border-[var(--color-light-300)]" />

            <div className="flex justify-between text-h3">

                <span>Total</span>

                <span>$348.80</span>

            </div>

            <Button className="mt-8 w-full py-4">
                Place Order
            </Button>

            <p className="mt-5 text-center text-body text-[var(--color-dark-600)]">
                Secure payment powered by Stripe.
            </p>

        </aside>
    );
};

export default OrderSummary;