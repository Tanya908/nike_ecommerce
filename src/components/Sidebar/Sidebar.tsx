import { type Dispatch, type SetStateAction } from "react";
import { X } from "lucide-react";
import SidebarContent from "./SidebarContent";
import type { FilterGroup, SelectedFilters } from "../../types/product";

type SidebarProps = {
    title: string;
    filters: FilterGroup[];
    selectedFilters: SelectedFilters;
    setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({
                     title,
                     filters,
                     selectedFilters,
                     setSelectedFilters,
                     isOpen,
                     setIsOpen,
                 }: SidebarProps) => {
    const handleClearAll = () => {
        setSelectedFilters({
            gender: [],
            color: [],
            price: [],
            size: [],
        });
    };

    return (
        <>
            {/* Desktop */}
            <aside className="hidden w-[250px] shrink-0 lg:block">
                <SidebarContent
                    title={title}
                    filters={filters}
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                    onClearAll={handleClearAll}
                />
            </aside>

            {/* Mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                >
                    <aside
                        className="absolute left-0 top-0 h-full w-[320px] overflow-y-auto bg-[var(--color-light-100)] p-6 shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-h3">
                                Filters
                            </h2>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded-full p-2 transition hover:bg-[var(--color-light-200)]"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        <SidebarContent
                            title={title}
                            filters={filters}
                            selectedFilters={selectedFilters}
                            setSelectedFilters={setSelectedFilters}
                            onClearAll={handleClearAll}
                        />

                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-8 w-full rounded-full bg-[var(--color-dark-900)] py-3 font-medium text-white transition hover:opacity-90"
                        >
                            Apply Filters
                        </button>
                    </aside>
                </div>
            )}
        </>
    );
};

export default Sidebar;