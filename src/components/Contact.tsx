import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";
import Button from "./Button";
import {emailValidation} from "../utils/validation/email.ts";

type FormValues = {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<FormValues>({ mode: "onTouched" });

    const onSubmit = async (data: FormValues) => {
        try {
            console.table(data);
            reset();
        } catch (error) {
            console.error(error);
        }
    };

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

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full rounded-lg border border-[var(--color-light-300)] p-4 outline-none"
                            {...register("name", {
                                required: "Name is required",
                                validate: (v) =>
                                    /^[\p{L}\s'-]+$/u.test(v.trim()) ||
                                    "Name may only contain letters, apostrophes, spaces, and hyphens",
                            })}
                        />
                        {errors.name && (
                            <p className="error-message">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full rounded-lg border border-[var(--color-light-300)] p-4 outline-none"
                            {...register("email", emailValidation)}
                        />
                        {errors.email && (
                            <p className="error-message">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <textarea
                            rows={6}
                            placeholder="Message"
                            className="w-full rounded-lg border border-[var(--color-light-300)] p-4 outline-none resize-none"
                            {...register("message", {
                                required: "Message is required",
                                validate: (v) =>
                                    v.trim().length > 0 || "Message cannot be blank",
                            })}
                        />
                        {errors.message && (
                            <p className="error-message">{errors.message.message}</p>
                        )}
                    </div>

                    <Button
                        type="submit"
                        className="px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!isValid}
                    >
                        Send Message
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
