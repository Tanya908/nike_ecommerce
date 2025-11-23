"use client";

import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";

type FieldErrors = Partial<
    Record<"name" | "email" | "password" | "confirmPassword", string>
>;

type FormValues = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/;

type Params = {
    variant: "sign-in" | "sign-up";
};

export function useAuthForm({ variant }: Params) {
    const isSignUp = variant === "sign-up";

    const initialValues = useMemo<FormValues>(
        () => ({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        }),
        []
    );

    const [values, setValues] = useState<FormValues>(initialValues);
    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
    const [formError, setFormError] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // Reset when switching between sign-in and sign-up flows.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setValues(initialValues);
        setFieldErrors({});
        setFormError("");
    }, [initialValues, variant]);

    const validate = (currentValues: FormValues): FieldErrors => {
        const errors: FieldErrors = {};

        const email = currentValues.email.trim();
        const password = currentValues.password.trim();

        // sign-up specific
        if (isSignUp) {
            const name = currentValues.name.trim();
            const confirmPassword = currentValues.confirmPassword.trim();

            if (!name) errors.name = "Name is required";
            else if (name.length < 2) errors.name = "Name must be at least 2 characters";

            if (!confirmPassword) {
                errors.confirmPassword = "Confirm password is required";
            } else if (password && confirmPassword !== password) {
                errors.confirmPassword = "Passwords do not match";
            }
        }

        // shared
        if (!email) errors.email = "Email is required";
        else if (!emailPattern.test(email)) errors.email = "Enter a valid email address";

        if (!password) errors.password = "Password is required";
        else if (password.length < 8) {
            errors.password = "Password must be at least 8 characters";
        }

        return errors;
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setValues((prev) => ({ ...prev, [name]: value }));

        const fieldName = name as keyof FieldErrors;

        if (fieldErrors[fieldName]) {
            setFieldErrors((prev) => ({ ...prev, [fieldName]: undefined }));
        }

        if (formError) setFormError("");
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormError("");

        const errors = validate(values);
        setFieldErrors(errors);

        if (Object.keys(errors).length > 0) return;

        // backend ще нема — тому просто імітуємо submit-state
        setIsSubmitting(true);

        // якщо хочеш, можеш одразу скинути назад:
        setTimeout(() => setIsSubmitting(false), 400);
    };

    return {
        isSignUp,
        values,
        fieldErrors,
        formError,
        isSubmitting,
        handleChange,
        handleSubmit,
    };
}
