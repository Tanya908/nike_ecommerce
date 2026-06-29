import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import type { ChangeEvent } from "react";
import { normalizeCVV, validateCVV } from "../utils/validation/payment";

export const useCVVField = <T extends FieldValues>(
    register: UseFormRegister<T>,
    name: Path<T>
) => {
    const cvvRegister = register(name, {
        required: "CVV is required",
        validate: validateCVV,
    });

    return {
        ...cvvRegister,
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
            e.target.value = normalizeCVV(e.target.value);
            void cvvRegister.onChange(e);
        },
    };
};
