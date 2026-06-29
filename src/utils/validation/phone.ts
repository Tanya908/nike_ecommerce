export const normalizePhone = (value: string) => {
    const hasPlus = value.startsWith("+");

    const digits = value
        .replace(/\D/g, "")
        .slice(0, 15);

    return (hasPlus ? "+" : "") + digits;
};

export const validatePhone = (value: string) => {
    const digits = value.replace(/\D/g, "");

    return (
        digits.length >= 7 ||
        "Phone number must contain at least 7 digits"
    );
};