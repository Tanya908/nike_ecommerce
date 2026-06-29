import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import type { ChangeEvent } from "react";
import { normalizeExpiry, validateExpiry } from "../utils/validation/payment";

export const useExpiryField = <T extends FieldValues>(
    register: UseFormRegister<T>,
    name: Path<T>
) => {
    const expiryRegister = register(name, {
        required: "Expiration date is required",
        validate: validateExpiry,
    });

    return {
        ...expiryRegister,
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
            e.target.value = normalizeExpiry(e.target.value);
            void expiryRegister.onChange(e);
        },
    };
};
