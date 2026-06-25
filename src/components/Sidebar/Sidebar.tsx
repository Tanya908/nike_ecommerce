import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import SidebarContent from "./SidebarContent";
import type {FilterGroup} from "../../types/product.ts";

type SidebarProps = {
    title: string;
    filters: FilterGroup[];
};

const Sidebar = ({ title, filters }: SidebarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="mx-4 mb-6 flex items-center gap-2 rounded-full border px-4 py-2 lg:hidden"
            >
                <SlidersHorizontal size={18} />
                Filters
            </button>

            <aside className="hidden w-[250px] shrink-0 lg:block">
                <SidebarContent
                    title={title}
                    filters={filters}
                />
            </aside>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                >
                    <aside
                        className="absolute left-0 top-0 h-full w-[320px] overflow-y-auto bg-[var(--color-light-100)] p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-h3">Filters</h2>

                            <button onClick={() => setIsOpen(false)}>
                                <X />
                            </button>
                        </div>

                        <SidebarContent
                            title={title}
                            filters={filters}
                        />
                    </aside>
                </div>
            )}
        </>
    );
};

export default Sidebar;