import { Link } from "react-router-dom";
import CardBadge from "./CardBadge";

export type BadgeTone = "red" | "green" | "orange";

export type CardProps = {
    title: string;
    imageSrc: string;
    price: number;

    to?: string;
    description?: string;
    meta?: string | string[];
    className?: string;

    badge?: {
        label: string;
        tone?: BadgeTone;
    };
};

const ShoeCard = ({
                      title,
                      description,
                      meta,
                      imageSrc,
                      price,
                      to,
                      badge,
                      className = "",
                  }: CardProps) => {
    const card = (
        <article
            className={`group bg-[var(--color-light-100)] transition-colors ${className}`}
        >
            <div className="relative aspect-square overflow-hidden bg-[var(--color-light-200)]">
                {badge && (
                    <CardBadge
                        label={badge.label}
                        tone={badge.tone}
                        className="absolute left-3 top-3 z-10"
                    />
                )}

                <img
                    src={imageSrc}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="p-4">
                <div className="mb-1 flex items-baseline justify-between gap-3">
                    <h3 className="text-heading-3">
                        {title}
                    </h3>

                    <span className="text-body-medium ">
                        ${price.toFixed(2)}
                    </span>
                </div>

                {description && (
                    <p className="text-body text-[var(--color-dark-700)]">
                        {description}
                    </p>
                )}

                {meta && (
                    <p className="mt-1 text-caption text-[var(--color-dark-700)]">
                        {Array.isArray(meta) ? meta.join(" • ") : meta}
                    </p>
                )}
            </div>
        </article>
    );

    if (to) {
        return (
            <Link
                to={to}
                className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-500)]"
            >
                {card}
            </Link>
        );
    }

    return card;
};

export default ShoeCard;