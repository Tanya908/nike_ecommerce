"use client";

import Link from "next/link";
import SocialProviders from "./SocialProviders";
import { useAuthForm } from "@/hooks/useAuthForm";

type AuthFormProps = {
    variant: "sign-in" | "sign-up";
};

export default function AuthForm({ variant }: AuthFormProps) {
    const {
        isSignUp,
        values,
        fieldErrors,
        formError,
        isSubmitting,
        handleChange,
        handleSubmit,
    } = useAuthForm({ variant });

    return (
        <div className="space-y-6">
            <header className="space-y-2">
                <p className="text-center text-sm text-dark-700">
                    {isSignUp
                        ? "Create your account to start your fitness journey"
                        : "Welcome back"}
                </p>
                <h1 className="text-center text-heading-3 text-dark-900">
                    {isSignUp ? "Join Nike Today !" : "Sign in to Nike"}
                </h1>
            </header>

            <div className="space-y-4">
                <SocialProviders />
                <div className="flex items-center gap-3 text-caption text-dark-700">
                    <span className="h-px flex-1 bg-light-300" aria-hidden />
                    <span>Or sign {isSignUp ? "up" : "in"} with email</span>
                    <span className="h-px flex-1 bg-light-300" aria-hidden />
                </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                {isSignUp && (
                    <div className="space-y-1">
                        <label htmlFor="name" className="text-caption text-dark-900">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="Enter your full name"
                            className="w-full rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 placeholder:text-dark-500 focus:border-dark-900 focus:outline-none focus:ring-2 focus:ring-dark-900"
                            value={values.name}
                            onChange={handleChange}
                        />
                        {fieldErrors.name && (
                            <p className="text-footnote text-red">{fieldErrors.name}</p>
                        )}
                    </div>
                )}

                <div className="space-y-1">
                    <label htmlFor="email" className="text-caption text-dark-900">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="john@doe.com"
                        className="w-full rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 placeholder:text-dark-500 focus:border-dark-900 focus:outline-none focus:ring-2 focus:ring-dark-900"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {fieldErrors.email && (
                        <p className="text-footnote text-red">{fieldErrors.email}</p>
                    )}
                </div>

                <div className="space-y-1">
                    <label htmlFor="password" className="text-caption text-dark-900">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete={isSignUp ? "new-password" : "current-password"}
                        placeholder={isSignUp ? "Minimum 8 characters" : "Enter your password"}
                        className="w-full rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 placeholder:text-dark-500 focus:border-dark-900 focus:outline-none focus:ring-2 focus:ring-dark-900"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {fieldErrors.password && (
                        <p className="text-footnote text-red">{fieldErrors.password}</p>
                    )}
                </div>

                {isSignUp && (
                    <div className="space-y-1">
                        <label htmlFor="confirmPassword" className="text-caption text-dark-900">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            autoComplete="new-password"
                            placeholder="Re-enter your password"
                            className="w-full rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 placeholder:text-dark-500 focus:border-dark-900 focus:outline-none focus:ring-2 focus:ring-dark-900"
                            value={values.confirmPassword}
                            onChange={handleChange}
                        />
                        {fieldErrors.confirmPassword && (
                            <p className="text-footnote text-red">{fieldErrors.confirmPassword}</p>
                        )}
                    </div>
                )}

                {!isSignUp && (
                    <div className="flex items-center justify-between text-caption text-dark-700">
                        <Link
                            href="#"
                            className="font-medium text-dark-900 underline-offset-4 hover:underline"
                        >
                            Forgot password?
                        </Link>
                    </div>
                )}

                {formError && (
                    <p className="text-center text-caption text-red">{formError}</p>
                )}

                <button
                    type="submit"
                    className="w-full rounded-full bg-dark-900 px-6 py-3 text-body-medium text-light-100 transition hover:-translate-y-[1px] hover:bg-dark-700 focus-visible:outline-offset-2 focus-visible:outline-dark-900 disabled:cursor-not-allowed disabled:opacity-70"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : isSignUp ? "Sign Up" : "Sign In"}
                </button>
            </form>
        </div>
    );
}
