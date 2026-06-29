type SelectOption = {
    value: string;
    label: string;
};

export type CheckoutFormValues = {
    email: string;
    phone: string;

    fullName: string;
    streetAddress: string;
    country: SelectOption | null;
    city: SelectOption | null;
    zipCode: string;

    cardNumber: string;
    expiry: string;
    cvv: string;
    cardholder: string;
};