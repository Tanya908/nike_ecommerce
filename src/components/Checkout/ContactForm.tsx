import { useForm } from 'react-hook-form';
import {emailValidation} from "../../utils/validation/email.ts";
import {usePhoneField} from "../../hooks/usePhoneField.ts";

type ContactFormValues = {
    email: string;
    phone: string;
};

const ContactForm = () => {
    const {register, handleSubmit, formState: { errors },} = useForm<ContactFormValues>({ mode: 'onTouched' });

    const onSubmit = (data: ContactFormValues) => { console.log(data) };

    const phoneRegister = usePhoneField(register, "phone");

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                            className={`checkout-input${errors.email ? ' !border-[var(--color-red)]' : ''}`}
                            {...register("email", emailValidation)}
                        />

                        {errors.email && (
                            <p className="error-message">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block text-body-medium">
                            Phone Number
                        </label>

                        <input
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
        </form>
    );
};

export default ContactForm;
