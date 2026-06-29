import { useFormContext } from "react-hook-form";
import type { CheckoutFormValues } from "../../types/checkout";
import { useCardNumberField } from "../../hooks/useCardNumberField";
import { useExpiryField } from "../../hooks/useExpiryField";
import { useCVVField } from "../../hooks/useCVVField";
import { validateCardholderName } from "../../utils/validation/payment";

const PaymentForm = () => {
    const {register, formState: { errors },} = useFormContext<CheckoutFormValues>();

    const cardNumberRegister = useCardNumberField(register, "cardNumber");
    const expiryRegister = useExpiryField(register, "expiry");
    const cvvRegister = useCVVField(register, "cvv");

    return (
            <section className="mt-10 rounded-2xl border border-[var(--color-light-300)] p-8">

                <h2 className="mb-8 text-h3">
                    Payment
                </h2>

                <div className="space-y-6">

                    <div>
                        <label
                            htmlFor="cardNumber"
                            className="mb-2 block text-body-medium"
                        >
                            Card Number
                        </label>

                        <input
                            id="cardNumber"
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            className={`checkout-input${errors.cardNumber ? " !border-[var(--color-red)]" : ""}`}
                            {...cardNumberRegister}
                        />

                        {errors.cardNumber && (
                            <p className="error-message">{errors.cardNumber.message}</p>
                        )}
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">

                        <div>
                            <label
                                htmlFor="expiry"
                                className="mb-2 block text-body-medium"
                            >
                                Expiration Date
                            </label>

                            <input
                                id="expiry"
                                type="text"
                                placeholder="MM / YY"
                                maxLength={7}
                                className={`checkout-input${errors.expiry ? " !border-[var(--color-red)]" : ""}`}
                                {...expiryRegister}
                            />

                            {errors.expiry && (
                                <p className="error-message">{errors.expiry.message}</p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="cvv"
                                className="mb-2 block text-body-medium"
                            >
                                CVV
                            </label>

                            <input
                                id="cvv"
                                type="password"
                                placeholder="CVV"
                                maxLength={4}
                                className={`checkout-input${errors.cvv ? " !border-[var(--color-red)]" : ""}`}
                                {...cvvRegister}
                            />

                            {errors.cvv && (
                                <p className="error-message">{errors.cvv.message}</p>
                            )}
                        </div>

                    </div>

                    <div>
                        <label
                            htmlFor="cardholder"
                            className="mb-2 block text-body-medium"
                        >
                            Cardholder Name
                        </label>

                        <input
                            id="cardholder"
                            type="text"
                            placeholder="John Doe"
                            className={`checkout-input${errors.cardholder ? " !border-[var(--color-red)]" : ""}`}
                            {...register("cardholder", {
                                required: "Cardholder name is required",
                                validate: validateCardholderName,
                            })}
                        />

                        {errors.cardholder && (
                            <p className="error-message">{errors.cardholder.message}</p>
                        )}
                    </div>

                </div>

            </section>
    );
};

export default PaymentForm;
