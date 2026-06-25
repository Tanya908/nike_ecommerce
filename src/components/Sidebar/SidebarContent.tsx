import type {FilterGroup} from "../../types/product.ts";

type SidebarContentProps = {
    title: string;
    filters: FilterGroup[];
};

const SidebarContent = ({
                            title,
                            filters,
                        }: SidebarContentProps) => {
    return (
        <div className="my-8 page-spacing">
            <h3 className="mb-8 text-h3">
                {title}
            </h3>

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