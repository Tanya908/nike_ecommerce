import Link from "next/link";
import SocialProviders from "./SocialProviders";

type AuthFormProps = {
  variant: "sign-in" | "sign-up";
};

export default function AuthForm({ variant }: AuthFormProps) {
  const isSignUp = variant === "sign-up";

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm text-dark-700">
          {isSignUp ? "Create your account to start your fitness journey" : "Welcome back"}
        </p>
        <h1 className="text-heading-3 text-dark-900">
          {isSignUp ? "Join Nike Today" : "Sign in to Nike"}
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

      <form className="space-y-4">
        {isSignUp && (
          <div className="space-y-1">
            <label htmlFor="fullName" className="text-caption text-dark-900">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 placeholder:text-dark-500 focus:border-dark-900 focus:outline-none focus:ring-2 focus:ring-dark-900"
            />
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
          />
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
          />
        </div>

        <div className="flex items-center justify-between text-caption text-dark-700">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-light-300 text-dark-900 focus:ring-dark-900"
            />
            <span>Remember me</span>
          </label>
          {!isSignUp && (
            <Link href="#" className="font-medium text-dark-900 underline-offset-4 hover:underline">
              Forgot password?
            </Link>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-dark-900 px-6 py-3 text-body-medium text-light-100 transition hover:-translate-y-[1px] hover:bg-dark-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-900"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
    </div>
  );
}
