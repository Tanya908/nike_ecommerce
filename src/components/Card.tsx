import Image from "next/image";
import Link from "next/link";

export type CardProps = {
  title: string;
  description: string;
  price?: string;
  variantLabel?: string;
  badge?: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
};

export default function Card({
  title,
  description,
  price,
  variantLabel,
  badge,
  imageSrc,
  imageAlt = title,
  href = "#",
}: CardProps) {
  return (
    <article className="flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-[var(--color-light-300)] bg-[var(--color-light-100)] shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative h-72 w-full bg-[var(--color-light-200)]">
        {badge && (
          <span className="absolute left-4 top-4 rounded-full bg-[var(--color-orange)] px-3 py-1 text-[var(--text-caption)] text-[var(--color-light-100)]">
            {badge}
          </span>
        )}
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          sizes="(min-width: 1024px) 320px, (min-width: 768px) 280px, 100vw"
          priority
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-[var(--text-heading-3)] font-medium leading-[var(--text-heading-3--line-height)] text-[var(--color-dark-900)]">
              {title}
            </h3>
            <p className="text-[var(--text-body)] leading-[var(--text-body--line-height)] text-[var(--color-dark-700)]">
              {description}
            </p>
            {variantLabel && (
              <p className="text-[var(--text-caption)] font-medium leading-[var(--text-caption--line-height)] text-[var(--color-dark-500)]">
                {variantLabel}
              </p>
            )}
          </div>
          {price && (
            <span className="text-[var(--text-body)] font-medium text-[var(--color-dark-900)]">{price}</span>
          )}
        </div>
        <Link
          href={href}
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-dark-900)] px-4 py-2 text-[var(--text-caption)] font-medium text-[var(--color-light-100)] transition-colors hover:bg-black"
        >
          View Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
