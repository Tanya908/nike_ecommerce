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
                    className="w-full rounded-xl border border-[var(--color-light-300)] px-4 py-4 outline-none transition focus:border-[var(--color-dark-900)]"
                />

                <div className="grid gap-6 md:grid-cols-2">

                    <input
                        type="text"
                        placeholder="MM / YY"
                        className="rounded-xl border border-[var(--color-light-300)] px-4 py-4 outline-none transition focus:border-[var(--color-dark-900)]"
                    />

                    <input
                        type="text"
                        placeholder="CVV"
                        className="rounded-xl border border-[var(--color-light-300)] px-4 py-4 outline-none transition focus:border-[var(--color-dark-900)]"
                    />

                </div>

                <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="w-full rounded-xl border border-[var(--color-light-300)] px-4 py-4 outline-none transition focus:border-[var(--color-dark-900)]"
                />

                <Button className="mt-4 w-full py-4">
                    Place Order
                </Button>

            </div>

        </section>
    );
};

export default PaymentForm;