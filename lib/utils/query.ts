import qs from "query-string";

export type SearchParamsLike =
    | URLSearchParams
    | ReadonlyURLSearchParams
    | Record<string, string | string[] | undefined>;

export type QueryUpdates = Record<string, string | string[] | undefined>;

const normalizeSearchParams = (searchParams: SearchParamsLike): Record<string, string | string[]> => {
    if ("forEach" in searchParams) {
        const result: Record<string, string | string[]> = {};
        (searchParams as URLSearchParams).forEach((value, key) => {
            if (result[key]) {
                const existing = result[key];
                result[key] = Array.isArray(existing) ? [...existing, value] : [existing, value];
            } else {
                result[key] = value;
            }
        });
        return result;
    }

    return Object.fromEntries(
        Object.entries(searchParams).filter(([, value]) => value !== undefined),
    ) as Record<string, string | string[]>;
};

const cleanQuery = (query: QueryUpdates) => {
    const cleaned: QueryUpdates = {};
    Object.entries(query).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            if (value.length) cleaned[key] = value;
            return;
        }

        if (value !== undefined && value !== "") {
            cleaned[key] = value;
        }
    });
    return cleaned;
};

export const parseMultiValueParam = (value?: string | string[] | null) => {
    if (!value) return [] as string[];
    const parts = Array.isArray(value)
        ? value.flatMap((entry) => entry.split(","))
        : value.split(",");
    return parts
        .map((entry) => entry.trim())
        .filter(Boolean);
};

export const updateQueryParams = (searchParams: SearchParamsLike, updates: QueryUpdates) => {
    const current = normalizeSearchParams(searchParams);
    const merged = { ...current, ...updates };
    const queryString = qs.stringify(cleanQuery(merged), {
        arrayFormat: "comma",
        skipEmptyString: true,
        skipNull: true,
    });

    return queryString;
};

export const removeQueryParams = (searchParams: SearchParamsLike, keys: string[]) => {
    const current = normalizeSearchParams(searchParams);
    keys.forEach((key) => {
        delete current[key];
    });

    return qs.stringify(current, {
        arrayFormat: "comma",
        skipEmptyString: true,
        skipNull: true,
    });
};

export const toggleArrayValue = (searchParams: SearchParamsLike, key: string, value: string) => {
    const current = normalizeSearchParams(searchParams);
    const nextValues = parseMultiValueParam(current[key]);

    const exists = nextValues.includes(value);
    const updated = exists ? nextValues.filter((item) => item !== value) : [...nextValues, value];

    return updateQueryParams(searchParams, { [key]: updated.length ? updated : undefined });
};

export const buildQueryUrl = (pathname: string, queryString: string) =>
    queryString ? `${pathname}?${queryString}` : pathname;

export const getQueryObject = (searchParams: SearchParamsLike) => normalizeSearchParams(searchParams);
