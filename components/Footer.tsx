import Image from "next/image";
import Link from "next/link";

type FooterLink = {
    label: string;
    href: string;
};

type FooterSection = {
    title?: string;
    links: FooterLink[];
};

export type FooterProps = {
    sections?: FooterSection[];
    socialLinks?: FooterLink[];
    localeLabel?: string;
    copyright?: string;
};

const defaultSections: FooterSection[] = [
    {
        title: "Featured",
        links: [
            { label: "Air Force 1", href: "#air-force" },
            { label: "Huarache", href: "#huarache" },
            { label: "Air Max 90", href: "#air-max-90" },
            { label: "Air Max 95", href: "#air-max-95" },
        ],
    },
    {
        title: "Shoes",
        links: [
            { label: "All Shoes", href: "#all-shoes" },
            { label: "Custom Shoes", href: "#custom-shoes" },
            { label: "Jordan Shoes", href: "#jordan-shoes" },
            { label: "Running Shoes", href: "#running-shoes" },
        ],
    },
    {
        title: "Clothing",
        links: [
            { label: "All Clothing", href: "#all-clothing" },
            { label: "Modest Wear", href: "#modest-wear" },
            { label: "Hoodies & Pullovers", href: "#hoodies" },
            { label: "Shirts & Tops", href: "#shirts" },
        ],
    },
    {
        title: "Kids'",
        links: [
            { label: "Infant & Toddler Shoes", href: "#infant" },
            { label: "Kids' Shoes", href: "#kids-shoes" },
            { label: "Kids' Jordan Shoes", href: "#kids-jordan" },
            { label: "Kids' Basketball Shoes", href: "#kids-basketball" },
        ],
    },
];

const defaultSocial: FooterLink[] = [
    { label: "X", href: "https://www.x.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
];

const policiesLinks: FooterLink[] = [
    { label: "Guides", href: "#" },
    { label: "Terms of Sale", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Nike Privacy Policy", href: "#" },
];

const socialIconMap: Record<string, string> = {
    Instagram: "/instagram.svg",
    X: "/x.svg",
    Facebook: "/facebook.svg",
};

export default function Footer({
                                   sections = defaultSections,
                                   socialLinks = defaultSocial,
                                   localeLabel = "Croatia",
                                   copyright = "© 2025 Nike, Inc. All Rights Reserved",
                               }: FooterProps) {
    return (
        <footer className="w-full bg-dark-900 text-light-100">
            <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10  pb-10 md:grid-cols-3 lg:grid-cols-6">
                    <div className="flex items-start justify-start lg:col-span-1 md:col-start-1 md:row-start-1">
                        <Image src="/logo.svg" alt="Nike" width={80} height={28} />
                    </div>
                    {sections.map((section, index) => (
                        <div key={section.title ?? `links-${index}`} className={`space-y-4 md:order-${index + 2} lg:order-none`}>
                            {section.title && (
                                <h4 className="text-body ">
                                    {section.title}
                                </h4>
                            )}
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-caption text-dark-500 transition-colors hover:text-light-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="flex w-full items-center justify-center gap-4
                            md:col-start-1 md:row-start-2 md:justify-start
                            lg:col-start-6 lg:row-start-1 lg:justify-end lg:items-start"
                    >
                        {socialLinks.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full
                                    bg-light-100 transition-colors hover:bg-[var(--color-light-100)]/10"
                            >
                                {socialIconMap[social.label] ? (
                                    <Image
                                        src={socialIconMap[social.label]}
                                        alt={social.label}
                                        width={18}
                                        height={18}
                                    />
                                ) : (
                                    <span className="text-light-200">{social.label}</span>
                                )}
                            </Link>
                        ))}
                    </div>

                </div>
                <div className="grid-cols-5 gap-10  ">
                    <div className="flex flex-col gap-6 py-6 text-caption text-dark-500
                        md:flex-row md:items-center md:justify-between"
                    >
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2">
                                <Image src="/location.svg" alt="Locale" width={18} height={18} />
                                <span className="text-dark-500">{localeLabel}</span>
                            </div>
                            <span className="text-dark-500">{copyright}</span>
                        </div>

                        <div className="ml-auto">
                            <ul className="flex flex-wrap items-center gap-6 text-caption text-dark-500">
                                {policiesLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="transition-colors hover:text-light-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}