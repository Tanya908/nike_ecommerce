import Select from "react-select";
import { City, State } from "country-state-city";
import { useMemo } from "react";

type Option = {
    value: string;
    label: string;
};

type CitySelectProps = {
    countryCode: string | undefined;
    value: Option | null;
    onChange: (city: Option | null) => void;
    isError?: boolean;
};

const CitySelect = ({
                        countryCode,
                        value,
                        onChange,
                        isError,
                    }: CitySelectProps) => {

    const options = useMemo(() => {

        if (!countryCode) return [];

        const cities = City.getCitiesOfCountry(countryCode) ?? [];

        const states = State.getStatesOfCountry(countryCode);

        return cities.map((city) => {

            const state = states.find(
                (state) => state.isoCode === city.stateCode
            );

            return {
                value: city.name,
                label: state
                    ? `${city.name}, ${state.name}`
                    : city.name,
            };
        });

    }, [countryCode]);

    return (
        <Select
            unstyled
            options={options}
            value={value}
            onChange={onChange}
            placeholder="Select City"
            isSearchable
            isDisabled={!countryCode}
            classNames={{
                control: ({ isFocused }) =>
                    `w-full rounded-xl border px-4 py-4 outline-none transition ${
                        isError
                            ? "border-[var(--color-red)]"
                            : isFocused
                                ? "border-[var(--color-dark-900)]"
                                : "border-[var(--color-light-300)]"
                    }`,

                valueContainer: () => "p-0",

                input: () => "m-0 p-0",

                placeholder: () => "text-gray-400",

                menu: () =>
                    "mt-2 overflow-hidden rounded-xl border border-[var(--color-light-300)] bg-white shadow-lg",

                menuList: () => "max-h-60 overflow-y-auto",

                option: ({ isFocused, isSelected }) =>
                    `cursor-pointer px-4 py-3 transition ${
                        isSelected
                            ? "bg-[var(--color-dark-900)] text-white"
                            : isFocused
                                ? "bg-[var(--color-light-200)]"
                                : "bg-white"
                    }`,

                dropdownIndicator: () =>
                    "cursor-pointer text-[var(--color-dark-600)]",

                indicatorSeparator: () => "hidden",

                singleValue: () =>
                    "text-[var(--color-dark-900)]",
            }}
        />
    );
};

export default CitySelect;