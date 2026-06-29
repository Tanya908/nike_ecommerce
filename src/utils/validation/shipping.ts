export { fullNameValidation } from "./name";

export const streetAddressValidation = {
    required: "Street address is required",
    validate: (v: string) => v.trim().length >= 5 || "Please enter a valid street address",
};

export const zipCodeValidation = {
    required: "ZIP code is required",
    validate: (v: string) =>
        (v.trim().length >= 3 && v.trim().length <= 10) || "Please enter a valid ZIP code",
};
