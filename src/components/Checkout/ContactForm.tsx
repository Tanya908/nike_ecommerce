import { useFormContext } from "react-hook-form";
import {emailValidation} from "../../utils/validation/email.ts";
import {usePhoneField} from "../../hooks/usePhoneField.ts";
import type { CheckoutFormValues } from "../../types/checkout";

const ContactForm = () => {

    const {register, formState: { errors },} = useFormContext<CheckoutFormValues>();

    const phoneRegister = usePhoneField(register, "phone");

    return (
            <section className="rounded-2xl border border-[var(--color-light-300)] p-8">
                <h2 className="mb-8 text-h3">
                    Contact
                </h2>

                <div className="space-y-6">

                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-body-medium"
                        >
                            Email Address
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            className={`checkout-input${errors.email ? ' !border-[var(--color-red)]' : ''}`}
                            {...register("email", emailValidation)}
                        />

                        {errors.email && (
                            <p className="error-message">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="tel"
                            className="mb-2 block text-body-medium"
                        >
                            Phone Number
                        </label>

                        <input
                            id="tel"
                            type="tel"
                            placeholder="Phone number"
                            className={`checkout-input${errors.phone ? " !border-[var(--color-red)]" : ""}`}
                            {...phoneRegister}
                        />

                        {errors.phone && (
                            <p className="error-message">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>

                </div>
            </section>
    );
};

export default ContactForm;
