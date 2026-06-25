import { Link } from "react-router-dom";

type BreadcrumbsProps = {
    items: {
        label: string;
        to?: string;
    }[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    return (
        <nav className="flex items-center gap-3 text-body">
            {items.map((item, index) => (
                <div
                    key={item.label}
                    className="flex items-center gap-3"
                >
                    {item.to ? (
                        <Link
                            to={item.to}
                            className="text-[var(--color-dark-700)] hover:text-[var(--color-dark-900)]"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span>{item.label}</span>
                    )}

                    {index < items.length - 1 && <span>/</span>}
                </div>
            ))}
        </nav>
    );
};

export default Breadcrumbs;