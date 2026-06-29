import Button from "../Button";

const PaymentForm = () => {
    return (
        <section className="mt-10 rounded-2xl border border-[var(--color-light-300)] p-8">

            <h2 className="mb-8 text-h3">
                Payment
            </h2>

            <div className="space-y-6">

                <input
                    type="text"
                    placeholder="Card Number"
                    className="checkout-input"
                />

                <div className="grid gap-6 md:grid-cols-2">
                    <input
                        type="text"
                        placeholder="MM / YY"
                        className="checkout-input"
                    />

                    <input
                        type="text"
                        placeholder="CVV"
                        className="checkout-input"
                    />
                </div>

                <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="checkout-input"
                />

                <Button className="mt-4 w-full py-4">
                    Place Order
                </Button>

            </div>

        </section>
    );
};

export default PaymentForm;