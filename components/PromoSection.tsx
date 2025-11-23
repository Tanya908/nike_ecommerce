import Image from "next/image";
import Button from "components/Button";

type PromoSectionProps = {
    bgSrc?: string;
    imageSrc: string;
    eyebrow?: string;
    title: string;
    description?: string;
    btnLabel?: string;
    btnVariant?: "dark" | "light";
    noBottomPadding?: boolean;
};

export default function PromoSection({
                                         bgSrc,
                                         imageSrc,
                                         eyebrow,
                                         title,
                                         description,
                                         btnLabel,
                                         btnVariant = "dark",
                                         noBottomPadding = false,
                                     }: PromoSectionProps) {
    return (
        <section
            className={`relative pt-6 text-dark-900 ${
                noBottomPadding ? "pb-0" : "pb-8"
            }`}
        >
            {bgSrc && (
                <div className="absolute inset-0">
                    <Image
                        src={bgSrc}
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover opacity-50"
                    />
                </div>
            )}

            <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pt-10 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:pt-16">
                <div className="relative z-10 flex-1 space-y-6">
                    <div className="space-y-4">
                        {eyebrow && <p className="text-lead text-red">{eyebrow}</p>}
                        <h2 className="text-heading-1 leading-tight">{title}</h2>
                        {description && (
                            <p className="max-w-lg text-lead">{description}</p>
                        )}
                    </div>
                    {btnLabel && (
                        <Button variant={btnVariant}>
                            {btnLabel}
                        </Button>
                    )}
                </div>

                <div className="relative z-10 flex-1">
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={900}
                        height={700}
                        priority
                        className="h-auto w-full"
                    />
                </div>
            </div>
        </section>
    );
}
