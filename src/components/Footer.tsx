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
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "X", href: "https://www.x.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
];

const socialIconMap: Record<string, string> = {
  Instagram: "/instagram.svg",
  X: "/x.svg",
  Facebook: "/facebook.svg",
};

const footerNavLinks: FooterLink[] = [
  { label: "Guides", href: "#guides" },
  { label: "Terms of Sale", href: "#terms-of-sale" },
  { label: "Terms of Use", href: "#terms-of-use" },
  { label: "Nike Privacy Policy", href: "#privacy" },
];

export default function Footer({
  sections = defaultSections,
  socialLinks = defaultSocial,
  localeLabel = "Croatia",
  copyright = "© 2025 Nike, Inc. All Rights Reserved",
}: FooterProps) {
  return (
    <footer className="w-full bg-[var(--color-dark-900)] text-[var(--color-light-100)]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-[var(--color-dark-700)] pb-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex items-start justify-start lg:col-span-1">
            <Image src="/logo-black.svg" alt="Nike" width={56} height={56} />
          </div>
          {sections.map((section, index) => (
            <div key={section.title ?? `links-${index}`} className="space-y-4">
              {section.title && (
                <h4 className="text-[var(--text-body-medium)] font-medium leading-[var(--text-body-medium--line-height)] text-[var(--color-light-100)]">
                  {section.title}
                </h4>
              )}
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[var(--text-caption)] text-[var(--color-light-200)] transition-colors hover:text-[var(--color-light-100)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 border-b border-[var(--color-dark-700)] py-6 text-[var(--text-caption)] text-[var(--color-light-200)] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-[var(--color-light-100)]">
              <Image src="/globe.svg" alt="Locale" width={18} height={18} />
              <span>{localeLabel}</span>
            </div>
            <span aria-hidden className="hidden text-[var(--color-dark-700)] md:inline">
              |
            </span>
            <span className="text-[var(--color-light-200)]">{copyright}</span>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-light-100)]/10 transition-colors hover:bg-[var(--color-light-100)]/20"
              >
                {socialIconMap[social.label] ? (
                  <Image
                    src={socialIconMap[social.label]}
                    alt={social.label}
                    width={18}
                    height={18}
                  />
                ) : (
                  <span className="text-[var(--color-light-200)]">{social.label}</span>
                )}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 text-[var(--text-caption)] text-[var(--color-light-200)] sm:flex-row sm:items-center sm:justify-end">
          <div className="flex flex-wrap items-center gap-4">
            {footerNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[var(--color-light-200)] transition-colors hover:text-[var(--color-light-100)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
