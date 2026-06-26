import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionProps = {
    title: string;
    children: React.ReactNode;
};

const Accordion = ({
                       title,
                       children,
                   }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[var(--color-light-300)] py-6">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between"
            >
                <h3 className="text-h3">
                    {title}
                </h3>

                <ChevronDown
                    size={20}
                    className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {isOpen && (
                <div className="mt-4 text-body text-[var(--color-dark-700)]">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion;