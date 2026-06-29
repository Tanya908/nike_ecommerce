import Button from "../Button";

const summaryItems = [
    {
        label: "Subtotal",
        value: "$320.00",
    },
    {
        label: "Shipping",
        value: "Free",
    },
    {
        label: "Taxes",
        value: "$28.80",
    },
];

const OrderSummary = () => {
    return (
        <aside className="sticky top-28 rounded-2xl border border-[var(--color-light-300)] p-8 h-fit">

            <h2 className="mb-8 text-h3">
                Order Summary
            </h2>

            <div className="space-y-4">
                {summaryItems.map((item) => (
                    <div
                        key={item.label}
                        className="flex justify-between"
                    >
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>

            <div className="my-8 border-t border-[var(--color-light-300)]" />

            <div className="flex justify-between text-h3">

                <span>Total</span>

                <span>$348.80</span>

            </div>

            <Button type="submit" className="mt-8 w-full py-4">
                Place Order
            </Button>

            <p className="mt-5 text-center text-body text-[var(--color-dark-600)]">
                Secure payment powered by Stripe.
            </p>

        </aside>
    );
};

export default OrderSummary;