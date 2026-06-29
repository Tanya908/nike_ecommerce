const ContactForm = () => {
    return (
        <section className="rounded-2xl border border-[var(--color-light-300)] p-8">
            <h2 className="mb-8 text-h3">
                Contact
            </h2>

            <div className="space-y-6">

                <div>
                    <label className="mb-2 block text-body-medium">
                        Email Address
                    </label>

                    <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-[var(--color-light-300)] px-4 py-4 outline-none transition focus:border-[var(--color-dark-900)]"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-body-medium">
                        Phone Number
                    </label>

                    <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-xl border border-[var(--color-light-300)] px-4 py-4 outline-none transition focus:border-[var(--color-dark-900)]"
                    />
                </div>

            </div>
        </section>
    );
};

export default ContactForm;