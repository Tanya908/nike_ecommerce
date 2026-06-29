import {useEffect, useState} from "react";
import Logo from "../assets/logo-black.svg";
import { Twirl } from "hamburger-react";
import { Search, ShoppingBag } from "lucide-react";
import {Link} from "react-router-dom";
import {useCart} from "../context/CartContext.tsx";
import {products} from "../data/products.ts";
import SearchDropdown from "../components/SearchDropdown.tsx";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const [search, setSearch] = useState("");
    const searchResults = products
        .filter((product) =>
            `${product.title} ${product.subtitle}`
                .toLowerCase()
                .includes(search.toLowerCase())
        )
        .slice(0, 5);

    const links = [
        { label: "Men", href: "/men" },
        { label: "Women", href: "/women" },
        { label: "Kids", href: "/kids" },
        { label: "Collections", href: "/collections" },
        { label: "Contact", href: "/contact" },
    ];

    const { cartItems } = useCart();
    const totalItems = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () =>
            window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-[var(--color-light-100)] z-50">
                <div className="flex h-[72px] items-center justify-between mx-auto max-w-[1600px] page-spacing">
                    <Link to="/" className="relative z-50 flex items-center">
                        <img src={Logo} alt="Nike" className="w-8 h-8" />
                    </Link>

                    <div className="md:hidden rounded-md hover:bg-[var(--color-light-200)] active:bg-[var(--color-light-200)] p-2 z-50">
                        <Twirl
                            toggled={isOpen}
                            aria-label="Toggle navigation menu"
                            toggle={setIsOpen}
                            size={24}
                            color="#1f2937"
                        />
                    </div>

                    <nav className="hidden md:flex items-center gap-10">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                to={link.href}
                                className="text-sm font-medium text-hover"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <div className="relative">
                            <div
                                className={`flex items-center overflow-hidden rounded-full bg-[var(--color-light-200)] transition-all duration-300 
                            ${isSearchOpen ? "w-64 px-3" : "w-10 justify-center"}`}
                            >
                                <button
                                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                                    className="flex h-10 w-10 items-center justify-center"
                                >
                                    <Search size={20} />
                                </button>

                                <input
                                    type="search"
                                    placeholder="Search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className={`bg-transparent outline-none text-sm transition-opacity duration-200 
                                            ${isSearchOpen ? "w-full opacity-100" : "w-0 opacity-0 pointer-events-none"}`}
                                />
                            </div>

                            {isSearchOpen && (
                                <SearchDropdown
                                    search={search}
                                    results={searchResults}
                                    onClose={() => {
                                        setIsSearchOpen(false);
                                        setSearch("");
                                    }}
                                />
                            )}
                        </div>

                        <Link
                            to="/cart"
                            className="flex items-center gap-2 text-hover"
                        >
                            <ShoppingBag size={20} />
                            <span>{totalItems}</span>
                        </Link>
                    </div>
                </div>

                <div
                    className={`fixed inset-0 pt-[72px] bg-[var(--color-light-100)] z-40 transition-transform duration-300 md:hidden ${
                        isOpen
                            ? "translate-y-0"
                            : "-translate-y-full"
                    }`}
                >
                    <div className="space-y-1 px-4 py-6">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                to={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-3 text-base font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="mt-6 border-t border-[var(--color-light-300)] pt-6">

                            <input
                                type="search"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full rounded-full border border-[var(--color-light-300)] px-4 py-3 outline-none"
                            />

                            {search && (
                                <SearchDropdown
                                    mobile
                                    search={search}
                                    results={searchResults}
                                    onClose={() => {
                                        setSearch("");
                                        setIsOpen(false);
                                    }}
                                />
                            )}

                            <Link
                                to="/cart"
                                onClick={() => setIsOpen(false)}
                                className="mt-6 flex items-center gap-2"
                            >
                                <ShoppingBag size={20} />
                                <span>My Cart ({totalItems})</span>
                            </Link>

                        </div>
                    </div>
                </div>
            </header>

            {/* Spacer */}
            <div aria-hidden="true" className="h-[72px]" />
        </>
    );
};

export default Header;