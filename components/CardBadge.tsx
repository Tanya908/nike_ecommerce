export type BadgeTone = "red" | "green" | "orange";

type CardBadgeProps = {
    label: string;
    tone?: BadgeTone;
    className?: string;
};

const toneToText: Record<BadgeTone, string> = {
    red: "text-red",
    green: "text-green",
    orange: "text-orange-500",
};

export default function CardBadge({
                                      label,
                                      tone = "orange",
                                      className = "",
                                  }: CardBadgeProps) {
    return (
        <span
            className={[
                "text-footnote items-center rounded-full bg-light-100 shadow-sm " +
                "px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5  ",
                toneToText[tone],
                className,
            ].join(" ")}
        >
      {label}
    </span>
    );
}
