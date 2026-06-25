import {type Dispatch, type SetStateAction, useState} from "react";
import { ChevronDown } from "lucide-react";

type SortProps = {
    sortOption: string;
    setSortOption: Dispatch<SetStateAction<string>>;
};

const sortOptions = [
    "Featured",
    "Newest",
    "Price: High → Low",
    "Price: Low → High",
];

const Sort = ({
                  sortOption,
                  setSortOption,
              }: SortProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-8"
            >
                <span className="text-body">Sort By</span>

                <div className="flex items-center gap-2">
                    <span className="text-body">{sortOption}</span>

                    <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    />
                </div>
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full z-50 mt-3 w-60 rounded-xl border border-[var(--color-light-300)] bg-[var(--color-light-100)] py-2 shadow-lg">
                    {sortOptions.map((option) => (
                        <button
                            key={option}
                            type="button"
                            onClick={() => {
                                setSortOption(option);
                                setIsOpen(false);
                            }}
                            className={`block w-full px-5 py-3 text-left transition-colors hover:bg-[var(--color-light-200)]
                                ${
                                sortOption === option
                                    ? "font-medium text-[var(--color-dark-900)]"
                                    : "text-[var(--color-dark-700)]"
                            }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Sort;