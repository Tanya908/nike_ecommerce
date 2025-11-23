"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { FilterGroup, FilterKey } from "../app/(root)/products/data";
import { buildQueryUrl, parseMultiValueParam, removeQueryParams, toggleArrayValue } from "../lib/utils/query";


interface FiltersProps {
    groups: FilterGroup[];
}

type OpenState = Record<FilterKey, boolean>;

type GroupProps = {
    group: FilterGroup;
    openState: OpenState;
    onToggleOpen: (key: FilterKey) => void;
    onToggleValue: (key: FilterKey, value: string) => void;
    activeValues: string[];
};

const Swatch = ({ color }: { color?: string }) => (
    <span
        aria-hidden
        className="inline-block h-4 w-4 rounded-full border border-light-300"
        style={color ? { backgroundColor: color } : undefined}
    />
);

function FilterGroupSection({ group, openState, onToggleOpen, onToggleValue, activeValues }: GroupProps) {
    const isOpen = openState[group.key];

    return (
        <div className="border-b border-light-300 pb-4 last:border-0 last:pb-0">
            <button
                type="button"
                className="flex w-full items-center justify-between text-left text-body-medium text-dark-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-500"
                onClick={() => onToggleOpen(group.key)}
                aria-expanded={isOpen}
                aria-controls={`${group.key}-options`}
            >
                <span>{group.label}</span>
                <img src="/Arrow.svg" alt="arrow" aria-hidden className={`transform transition-transform ${isOpen ? "rotate-0" : "rotate-180"}`}/>
            </button>

            <div id={`${group.key}-options`} className={isOpen ? "mt-4 space-y-2" : "hidden"}>
                {group.options.map((option) => {
                    const checked = activeValues.includes(option.value);
                    return (
                        <label
                            key={option.value}
                            className="flex cursor-pointer items-center gap-3 text-body text-dark-900"
                        >
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-light-400 text-dark-900 focus:ring-dark-900"
                                checked={checked}
                                onChange={() => onToggleValue(group.key, option.value)}
                            />
                            <span className="flex items-center gap-2">
                                {option.swatch && <Swatch color={option.swatch} />}
                                <span>{option.label}</span>
                            </span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
}

export default function Filters({ groups }: FiltersProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [open, setOpen] = useState(false);
    const [openGroups, setOpenGroups] = useState<OpenState>(() => {
        const initial: Partial<OpenState> = {};
        groups.forEach((group) => {
            initial[group.key] = true;
        });
        return initial as OpenState;
    });

    const activeValuesByGroup = useMemo(() => {
        const values: Record<FilterKey, string[]> = {
            gender: [],
            size: [],
            color: [],
            price: [],
            height: [],
        };

        groups.forEach((group) => {
            values[group.key] = parseMultiValueParam(searchParams.get(group.key));
        });

        return values;
    }, [groups, searchParams]);

    const totalActive = Object.values(activeValuesByGroup).reduce((total, current) => total + current.length, 0);

    const handleToggleValue = (key: FilterKey, value: string) => {
        const queryString = toggleArrayValue(searchParams, key, value);
        router.push(buildQueryUrl(pathname, queryString), { scroll: false });
    };

    const handleToggleOpen = (key: FilterKey) => {
        setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleClear = () => {
        const queryString = removeQueryParams(searchParams, groups.map((group) => group.key));
        router.push(buildQueryUrl(pathname, queryString), { scroll: false });
    };

    const renderGroups = () => (
        <div className="space-y-6" aria-label="Filter groups">
            {groups.map((group) => (
                <FilterGroupSection
                    key={group.key}
                    group={group}
                    openState={openGroups}
                    onToggleOpen={handleToggleOpen}
                    onToggleValue={handleToggleValue}
                    activeValues={activeValuesByGroup[group.key]}
                />
            ))}
        </div>
    );

    return (
        <aside className="md:w-64 md:flex-shrink-0" aria-label="Filters">
            <div className="mb-4 flex items-center justify-between md:hidden">
                <button
                    type="button"
                    className="rounded-full border border-light-300 px-4 py-2 text-body-medium text-dark-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-500"
                    onClick={() => setOpen(true)}
                >
                    Filters
                </button>
                <span className="text-caption text-dark-700">{totalActive} selected</span>
            </div>

            <div className="hidden bg-light-100 p-6 md:sticky md:top-24 md:block">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-body-medium text-dark-900">Filter By</h2>
                    <button
                        type="button"
                        className="text-caption font-medium text-dark-700 underline-offset-4 transition hover:text-dark-900"
                        onClick={handleClear}
                    >
                        Clear all
                    </button>
                </div>
                {renderGroups()}
            </div>

            {open && (
                <div className="fixed inset-0 z-40 flex md:hidden" role="presentation">
                    <div className="relative h-full w-11/12 max-w-sm overflow-y-auto bg-light-100 p-6 shadow-xl">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-body-medium text-dark-900">Filters</h2>
                            <button
                                type="button"
                                className="rounded-full border border-light-300 px-3 py-1.5 text-caption font-medium text-dark-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-500"
                                onClick={handleClear}
                            >
                                Clear
                            </button>
                        </div>
                        {renderGroups()}
                        <button
                            type="button"
                            className="mt-6 w-full rounded-full bg-dark-900 px-4 py-3 text-body-medium text-light-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-500"
                            onClick={() => setOpen(false)}
                        >
                            Show results
                        </button>
                    </div>
                    <button
                        type="button"
                        className="h-full flex-1 bg-dark-900/40"
                        aria-label="Close filters"
                        onClick={() => setOpen(false)}
                    />
                </div>
            )}
        </aside>
    );
}
