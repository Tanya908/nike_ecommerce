export type BadgeTone = "red" | "green" | "orange";

type CardBadgeProps = {
    label: string;
    tone?: BadgeTone;
    className?: string;
};

const toneClasses = {
    red: "text-[var(--color-red)]",
    green: "text-[var(--color-green)]",
    orange: "text-[var(--color-orange)]",
};

const CardBadge = ({
                       label,
                       tone = "orange",
                       className = "",
                   }: CardBadgeProps) => {
    return (
        <span
            className={`inline-flex items-center rounded-full bg-[var(--color-light-100)] px-3 py-1.5 text-footnote 
                        shadow-sm sm:px-4 sm:py-2 lg:px-5 ${toneClasses[tone]} ${className}`}
        >
            {label}
        </span>
    );
};

export default CardBadge;