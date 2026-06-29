import { Controller, useFormContext } from "react-hook-form";
import type { CheckoutFormValues } from "../../types/checkout";
import {
    fullNameValidation,
    streetAddressValidation,
    zipCodeValidation,
} from "../../utils/validation/shipping";
import CountrySelect from "./CountrySelect.tsx";
import CitySelect from "./CitySelect.tsx";

const ShippingForm = () => {
    const {
        register,
        control,
        setValue,
        watch,
        formState: { errors },
    } = useFormContext<CheckoutFormValues>();

    const selectedCountry = watch("country");

    return (
        <section className="mt-10 rounded-2xl border border-[var(--color-light-300)] p-8">

            <h2 className="mb-8 text-h3">
                Shipping Address
            </h2>

            <div className="space-y-6">

                <div>
                    <label className="mb-2 block text-body-medium">
                        Full Name
                    </label>

                    <input
                        type="text"
                        placeholder="John Doe"
                        className={`checkout-input${errors.fullName ? " !border-[var(--color-red)]" : ""}`}
                        {...register("fullName", fullNameValidation)}
                    />

                    {errors.fullName && (
                        <p className="error-message">{errors.fullName.message}</p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-body-medium">
                        Street Address
                    </label>

                    <input
                        type="text"
                        placeholder="123 Main St"
                        className={`checkout-input${errors.streetAddress ? " !border-[var(--color-red)]" : ""}`}
                        {...register("streetAddress", streetAddressValidation)}
                    />

                    {errors.streetAddress && (
                        <p className="error-message">{errors.streetAddress.message}</p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-body-medium">
                        Country
                    </label>

                    <Controller
                        name="country"
                        control={control}
                        rules={{ required: "Please select a country" }}
                        render={({ field }) => (
                            <CountrySelect
                                value={field.value}
                                isError={!!errors.country}
                                onChange={(option) => {
                                    field.onChange(option);
                                    setValue("city", null, { shouldValidate: false });
                                }}
                            />
                        )}
                    />

                    {errors.country && (
                        <p className="error-message">{errors.country.message}</p>
                    )}
                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    <div>
                        <label className="mb-2 block text-body-medium">
                            City
                        </label>

                        <Controller
                            name="city"
                            control={control}
                            rules={{ required: "Please select a city" }}
                            render={({ field }) => (
                                <CitySelect
                                    countryCode={selectedCountry?.value}
                                    value={field.value}
                                    isError={!!errors.city}
                                    onChange={field.onChange}
                                />
                            )}
                        />

                        {errors.city && (
                            <p className="error-message">{errors.city.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block text-body-medium">
                            ZIP Code
                        </label>

                        <input
                            type="text"
                            placeholder="10001"
                            className={`checkout-input${errors.zipCode ? " !border-[var(--color-red)]" : ""}`}
                            {...register("zipCode", zipCodeValidation)}
                        />

                        {errors.zipCode && (
                            <p className="error-message">{errors.zipCode.message}</p>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ShippingForm;
