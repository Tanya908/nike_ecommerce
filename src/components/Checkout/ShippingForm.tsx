import CountrySelect from "./CountrySelect.tsx";
import {useState} from "react";
import CitySelect from "./CitySelect.tsx";

const ShippingForm = () => {
    const [selectedCountry, setSelectedCountry] = useState<{
        value: string;
        label: string;
    } | null>(null);

    const [selectedCity, setSelectedCity] = useState<{
        value: string;
        label: string;
    } | null>(null);

    return (
        <section className="mt-10 rounded-2xl border border-[var(--color-light-300)] p-8">

            <h2 className="mb-8 text-h3">
                Shipping Address
            </h2>

            <div className="space-y-6">

                <input
                    type="text"
                    placeholder="Full Name"
                    className="checkout-input"
                />

                <input
                    type="text"
                    placeholder="Street Address"
                    className="checkout-input"
                />

                <CountrySelect
                    value={selectedCountry}
                    onChange={(option) => setSelectedCountry(option)}
                />

                <div className="grid gap-6 md:grid-cols-2">

                    <CitySelect
                        countryCode={selectedCountry?.value}
                        value={selectedCity}
                        onChange={(option) => setSelectedCity(option)}
                    />

                    <input
                        type="text"
                        placeholder="ZIP Code"
                        className="rounded-xl border  border-[var(--color-light-300)] px-4 py-4 outline-none transition focus:border-[var(--color-dark-900)]"
                    />

                </div>
            </div>
        </section>
    );
};

export default ShippingForm;