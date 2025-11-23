"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export type NavLink = {
  label: string;
  href: string;
};

export type NavbarProps = {
  links?: NavLink[];
  showSearch?: boolean;
  cartLabel?: string;
  logoAlt?: string;
};

const defaultLinks: NavLink[] = [
  { label: "Men", href: "/products?gender=men" },
  { label: "Women", href: "/products?gender=women" },
  { label: "Kids", href: "/products?gender=kids" },
  { label: "Collections", href: "/products" },
  { label: "Contact", href: "#contact" },
];

const baseLinkClasses =
  "text-sm font-medium text-dark-900 transition-colors hover:text-dark-700";

export default function Navbar({
  links,
  showSearch = true,
  cartLabel = "My Cart (0)",
  logoAlt = "Nike",
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = useMemo(() => links ?? defaultLinks, [links]);

  return (
    <header className="w-full  bg-light-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center" aria-label="Home">
            <Image src="/logoBlack.svg" alt={logoAlt} width={32} height={32} priority />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-dark-900 hover:bg-light-200 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav className="hidden flex-1 items-center justify-center gap-10 md:flex" aria-label="Primary">
          {navigation.map((link) => (
            <Link key={link.label} href={link.href} className={baseLinkClasses}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          {showSearch && (
            <button
              type="button"
              className="text-sm font-medium text-dark-900 transition-colors hover:text-dark-700"
            >
              Search
            </button>
          )}
          <button
            type="button"
            className="text-sm font-medium text-dark-900 transition-colors hover:text-dark-700"
          >
            {cartLabel}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-light-300 bg-light-100 md:hidden" aria-label="Mobile menu">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`${baseLinkClasses} block px-3 py-2 text-base`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-light-300 pt-3 text-body text-dark-900">
              {showSearch && <button className="text-left">Search</button>}
              <button className="text-left">{cartLabel}</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
