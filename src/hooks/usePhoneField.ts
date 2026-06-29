import type {FieldValues, Path, UseFormRegister} from "react-hook-form";
import type { ChangeEvent } from "react";
import {normalizePhone, validatePhone} from "../utils/validation/phone";

export const usePhoneField = <
    T extends FieldValues
>(
    register: UseFormRegister<T>,
    name: Path<T>
) => {
    const phoneRegister = register(name, {
        required: "Phone number is required",
        validate: validatePhone,
    });

    return {
        ...phoneRegister,

        onChange: (
            e: ChangeEvent<HTMLInputElement>
        ) => {
            e.target.value = normalizePhone(
                e.target.value
            );

            void phoneRegister.onChange(e);
        },
    };
};