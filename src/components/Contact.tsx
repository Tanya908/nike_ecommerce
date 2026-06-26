import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <div className="page-spacing my-12 max-w-5xl">
            <h1 className="mb-3 text-h1">
                Contact Us
            </h1>

            <p className="mb-10 max-w-2xl text-body text-[var(--color-dark-700)]">
                Have a question about an order or our products? We'd love to hear from you.
            </p>

            <div className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <Mail size={22} />
                        <div>
                            <h3 className="text-body-medium">Email</h3>
                            <p>support@nike.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Phone size={22} />
                        <div>
                            <h3 className="text-body-medium">Phone</h3>
                            <p>+1 (800) 123-4567</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <MapPin size={22} />
                        <div>
                            <h3 className="text-body-medium">Address</h3>
                            <p>One Bowerman Drive, Beaverton, OR</p>
                        </div>
                    </div>
                </div>

                <form className="space-y-5">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full rounded-lg border border-[var(--color-light-300)] p-4 outline-none"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full rounded-lg border border-[var(--color-light-300)] p-4 outline-none"
                    />

                    <textarea
                        rows={6}
                        placeholder="Message"
                        className="w-full rounded-lg border border-[var(--color-light-300)] p-4 outline-none resize-none"
                    />

                    <button
                        type="submit"
                        className="rounded-full bg-black px-8 py-4 text-white transition hover:opacity-90"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;