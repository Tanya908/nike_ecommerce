import React from "react";

export type ButtonVariant = "dark" | "light";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
};

export default function Button({
                                   variant = "dark",
                                   className = "",
                                   children,
                                   ...props
                               }: ButtonProps) {
    const base =
        "rounded-full px-4 py-2.5 text-body-medium transition hover:-translate-y-0.5 ";

    const variants = {
        dark: "bg-dark-900 text-light-100 ",
        light: "bg-light-100 text-dark-900 ",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
