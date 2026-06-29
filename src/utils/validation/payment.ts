export const normalizeCardNumber = (value: string): string => {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.match(/.{1,4}/g)?.join(" ") ?? "";
};

export const validateCardNumber = (value: string): true | string => {
    const digits = value.replace(/\s/g, "");
    return digits.length === 16 || "Please enter a valid card number";
};

export const normalizeExpiry = (value: string): string => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)} / ${digits.slice(2)}`;
};

export const validateExpiry = (value: string): true | string => {
    const digits = value.replace(/\D/g, "");
    if (digits.length !== 4) return "Please enter a valid expiration date";

    const month = parseInt(digits.slice(0, 2), 10);
    const year = parseInt(digits.slice(2, 4), 10) + 2000;

    if (month < 1 || month > 12) return "Please enter a valid expiration date";

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
        return "Please enter a valid expiration date";
    }

    return true;
};

export const normalizeCVV = (value: string): string =>
    value.replace(/\D/g, "").slice(0, 4);

export const validateCVV = (value: string): true | string =>
    (value.length >= 3 && value.length <= 4) || "Please enter a valid CVV";

export const validateCardholderName = (value: string): true | string =>
    /^[A-Za-z\s'\-]+$/.test(value.trim()) || "Please enter a valid cardholder name";
