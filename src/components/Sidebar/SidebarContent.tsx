import type { Dispatch, SetStateAction } from "react";
import type {FilterGroup, SelectedFilters} from "../../types/product";

type SidebarContentProps = {
    title: string;
    filters: FilterGroup[];
    onClearAll: () => void;
    selectedFilters: SelectedFilters;
    setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
};

const SidebarContent = ({
                            title,
                            filters,
                            onClearAll,
                            setSelectedFilters,
                            selectedFilters
                        }: SidebarContentProps) => {


    const toggleFilter = (
        key: keyof SelectedFilters,
        value: string,
    ) => {
        setSelectedFilters((prev) => ({
            ...prev,
            [key]: prev[key].includes(value)
                ? prev[key].filter((item) => item !== value)
                : [...prev[key], value],
        }));
    };

    return (
        <div className="my-8 page-spacing">
            <div className="mb-6 flex items-center justify-between">
                <h3 className="text-h3">{title}</h3>

                <button
                    type="button"
                    onClick={onClearAll}
                    className="text-sm underline hover:no-underline"
                >
                    Clear All
                </button>
            </div>

            {filters.map((filter) => (
                <div key={filter.key}>
                    <div className="my-8 border-b border-[var(--color-light-300)]" />

                    <h3 className="mb-4 text-body-medium">
                        {filter.label}
                    </h3>

                    <div className="space-y-3">
                        {filter.options.map((option) => (
                            <label
                                key={option.value}
                                className="flex cursor-pointer items-center gap-3"
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedFilters[filter.key].includes(option.value)}
                                    onChange={() => toggleFilter(filter.key, option.value)}
                                    className="h-4 w-4 cursor-pointer accent-[var(--color-dark-900)]"
                                />

                                {option.swatch && (
                                    <span
                                        className={`h-5 w-5 rounded-full ${
                                            option.value
                                                ? "border border-gray-300"
                                                : ""
                                        }`}
                                        style={{
                                            background: option.swatch,
                                        }}
                                    />
                                )}

                                <span>{option.label}</span>
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SidebarContent;