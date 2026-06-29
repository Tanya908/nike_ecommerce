const ShippingForm = () => {
    return (
        <section className="mt-10 rounded-2xl border border-[var(--color-light-300)] p-8">

            <h2 className="mb-8 text-h3">
                Shipping Address
            </h2>

            <div className="space-y-6">

                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-[var(--color-light-300)] px-4 py-4 outline-none transition focus:border-[var(--color-dark-900)]"
                />

                <input
                    type="text"
                    placeholder="Street Address"
                    className="w-full rounded-xl border border-[var(--color-light-300)] px-4 py-4 outline-none transition focus:border-[var(--color-dark-900)]"
                />

                <div className="grid gap-6 md:grid-cols-2">

                    <input
                        type="text"
                        placeholder="City"
                        className="rounded-xl border border-[var(--color-light-300)] px-4 py-4 outline-none transition focus:border-[var(--color-dark-900)]"
                    />

                    <input
                        type="text"
                        placeholder="ZIP Code"
                        className="rounded-xl border border-[var(--color-light-300)] px-4 py-4 outline-none transition focus:border-[var(--color-dark-900)]"
                    />

                </div>

                <input
                    type="text"
                    placeholder="Country"
                    className="w-full rounded-xl border border-[var(--color-light-300)] px-4 py-4 outline-none transition focus:border-[var(--color-dark-900)]"
                />

            </div>

        </section>
    );
};

export default ShippingForm;