import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "dark" | "light";
};

const Button = ({
                    variant = "dark",
                    className = "",
                    children,
                    ...props
                }: ButtonProps) => {
    const base =
        "rounded-full px-4 py-2.5 text-body-medium transition hover:-translate-y-0.5";

    const variants = {
        dark: "bg-[var(--color-dark-900)] text-[var(--color-light-100)]",
        light: "bg-[var(--color-light-100)] text-[var(--color-dark-900)]",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;