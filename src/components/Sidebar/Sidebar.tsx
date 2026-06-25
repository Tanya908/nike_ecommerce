import {useState,type Dispatch,type SetStateAction} from "react";
import { SlidersHorizontal, X } from "lucide-react";
import SidebarContent from "./SidebarContent";
import type {FilterGroup, SelectedFilters} from "../../types/product";

type SidebarProps = {
    title: string;
    filters: FilterGroup[];

    selectedFilters: SelectedFilters;
    setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
};

const Sidebar = ({
                     title,
                     filters,
                     selectedFilters,
                     setSelectedFilters,
                 }: SidebarProps) => {
    const [isOpen, setIsOpen] = useState(false);

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
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                    onClearAll={handleClearAll}
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
                            selectedFilters={selectedFilters}
                            setSelectedFilters={setSelectedFilters}
                            onClearAll={handleClearAll}
                        />
                    </aside>
                </div>
            )}
        </>
    );
};

export default Sidebar;