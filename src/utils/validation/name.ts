const NAME_PATTERN = /^[\p{L}\s'-]+$/u;

export const createNameValidation = (requiredMessage: string, patternMessage: string) => ({
    required: requiredMessage,
    validate: (v: string) => NAME_PATTERN.test(v.trim()) || patternMessage,
});

export const fullNameValidation = createNameValidation(
    "Full name is required",
    "Please enter a valid full name"
);
