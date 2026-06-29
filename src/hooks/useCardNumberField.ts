import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import type { ChangeEvent } from "react";
import { normalizeCardNumber, validateCardNumber } from "../utils/validation/payment";

export const useCardNumberField = <T extends FieldValues>(
    register: UseFormRegister<T>,
    name: Path<T>
) => {
    const cardRegister = register(name, {
        required: "Card number is required",
        validate: validateCardNumber,
    });

    return {
        ...cardRegister,
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
            e.target.value = normalizeCardNumber(e.target.value);
            void cardRegister.onChange(e);
        },
    };
};
