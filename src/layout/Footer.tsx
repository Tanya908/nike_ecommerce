import Logo from "../assets/logo.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import X from "../assets/x.svg";
import { MapPin } from "lucide-react";

const footerSections = [
    {
        title: "Featured",
        links: [
            { label: "Air Force 1", href: "#" },
            { label: "Huarache", href: "#" },
            { label: "Air Max 90", href: "#" },
            { label: "Air Max 95", href: "#" },
        ],
    },
    {
        title: "Shoes",
        links: [
            { label: "All Shoes", href: "#" },
            { label: "Custom Shoes", href: "#" },
            { label: "Jordan Shoes", href: "#" },
            { label: "Running Shoes", href: "#" },
        ],
    },
    {
        title: "Clothing",
        links: [
            { label: "All Clothing", href: "#" },
            { label: "Modest Wear", href: "#" },
            { label: "Hoodies & Pullovers", href: "#" },
            { label: "Shirts & Tops", href: "#" },
        ],
    },
    {
        title: "Kids'",
        links: [
            { label: "Infant & Toddler Shoes", href: "#" },
            { label: "Kids' Shoes", href: "#" },
            { label: "Kids' Jordan Shoes", href: "#" },
            { label: "Kids' Basketball Shoes", href: "#" },
        ],
    },
];

const socialLinks = [
    { icon: X, href: "https://x.com", label: "X" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const policies = [
    { label: "Guides", href: "#" },
    { label: "Terms of Sale", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Nike Privacy Policy", href: "#" },
];

const Footer = () => {
    return (
        <footer className="bg-[var(--color-dark-900)] text-[var(--color-light-100)]">
            <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-8 py-10">

                <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-3 lg:grid-cols-6">
                    <a href="/">
                        <img src={Logo} alt="Nike" className="w-20" />
                    </a>

                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h4 className="mb-4 text-body">{section.title}</h4>

                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-caption text-[var(--color-dark-500)] transition-colors hover:text-[var(--color-light-200)]"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="flex items-start justify-start gap-4 lg:justify-end">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-light-100)] hover:bg-[var(--color-light-400)] transition-colors"
                            >
                                <img src={social.icon} alt={social.label} className="w-[18px]" />
                            </a>
                        ))}
                    </div>

                </div>

                <div className="flex flex-col gap-6 border-t border-[var(--color-dark-700)] pt-6 md:flex-row md:justify-between md:items-center">

                    <div className="flex flex-wrap items-center gap-4 text-caption text-[var(--color-dark-500)]">
                        <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-[var(--color-light-100)]" strokeWidth={2} />
                            <span>Croatia</span>
                        </div>

                        <span>© 2025 Nike, Inc. All Rights Reserved</span>
                    </div>

                    <ul className="flex flex-wrap gap-6 text-caption text-[var(--color-dark-500)]">
                        {policies.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="hover:text-[var(--color-light-200)] transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;