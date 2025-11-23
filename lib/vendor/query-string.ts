export type Primitive = string | number | boolean | null | undefined;
export type QueryValue = Primitive | Primitive[];
export type ParsedQuery = Record<string, string | string[]>;

const encode = (value: string) => encodeURIComponent(value);
const decode = (value: string) => decodeURIComponent(value.replace(/\+/g, " "));

const shouldSkip = (value: Primitive, { skipNull, skipEmptyString }: { skipNull?: boolean; skipEmptyString?: boolean }) => {
    if (skipNull && value === null) return true;
    if (skipEmptyString && value === "") return true;
    return value === undefined;
};

export function parse(query: string): ParsedQuery {
    const input = query.startsWith("?") ? query.slice(1) : query;
    const params = new URLSearchParams(input);
    const result: ParsedQuery = {};

    params.forEach((value, key) => {
        if (key in result) {
            const existing = result[key];
            result[key] = Array.isArray(existing) ? [...existing, decode(value)] : [existing, decode(value)];
        } else {
            result[key] = decode(value);
        }
    });

    return result;
}

export function stringify(query: Record<string, QueryValue>, options?: { arrayFormat?: "none" | "comma"; skipNull?: boolean; skipEmptyString?: boolean }) {
    const { arrayFormat = "none", skipNull, skipEmptyString } = options ?? {};
    const segments: string[] = [];

    Object.entries(query).forEach(([key, rawValue]) => {
        if (Array.isArray(rawValue)) {
            const values = rawValue.filter((value) => !shouldSkip(value, { skipNull, skipEmptyString }));
            if (!values.length) return;

            if (arrayFormat === "comma") {
                segments.push(`${encode(key)}=${values.map((value) => encode(String(value))).join(",")}`);
            } else {
                values.forEach((value) => {
                    segments.push(`${encode(key)}=${encode(String(value))}`);
                });
            }
        } else {
            if (shouldSkip(rawValue, { skipNull, skipEmptyString })) return;
            if (rawValue === null) {
                segments.push(encode(key));
                return;
            }
            segments.push(`${encode(key)}=${encode(String(rawValue))}`);
        }
    });

    return segments.join("&");
}

export function parseUrl(url: string) {
    const [base, queryString] = url.split("?");
    return {
        url: base,
        query: queryString ? parse(queryString) : {},
    };
}

export function stringifyUrl(
    input: {
        url: string;
        query?: Record<string, QueryValue>;
        skipNull?: boolean;
        skipEmptyString?: boolean;
        arrayFormat?: "none" | "comma";
    },
) {
    const { url, query = {}, skipNull, skipEmptyString, arrayFormat } = input;
    const queryString = stringify(query, { skipNull, skipEmptyString, arrayFormat });

    if (!queryString) return url;
    const cleanUrl = url.split("?")[0];
    return `${cleanUrl}?${queryString}`;
}

const queryString = {
    parse,
    stringify,
    parseUrl,
    stringifyUrl,
};

export default queryString;
