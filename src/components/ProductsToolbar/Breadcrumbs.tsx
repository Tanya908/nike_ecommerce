import { Link } from "react-router-dom";

export type BreadcrumbItem = {
    label: string;
    to?: string;
};

type BreadcrumbsProps = {
    items: BreadcrumbItem[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-3 text-body">
                {items.map((item, index) => (
                    <li
                        key={item.label}
                        className="flex items-center gap-3"
                    >
                        {item.to ? (
                            <Link
                                to={item.to}
                                className="text-[var(--color-dark-700)] transition-colors hover:text-[var(--color-dark-900)]"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-[var(--color-dark-900)]">
                                {item.label}
                            </span>
                        )}

                        {index < items.length - 1 && (
                            <span className="text-[var(--color-dark-500)]">
                                /
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;