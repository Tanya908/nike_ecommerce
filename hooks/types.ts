export type SignInValues = { email: string; password: string };

export type SignUpValues = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type AuthResult =
    | { ok: true; redirectTo?: string }
    | { ok: false; error?: string; fieldErrors?: Record<string, string> };
