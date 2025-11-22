import { type ChangeEvent, type FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SocialProviders from "./SocialProviders";
import { AuthResult, SignInValues, SignUpValues } from "@/lib/auth/types";

type AuthFormProps = {
  variant: "sign-in" | "sign-up";
  onSubmit?: (values: SignInValues | SignUpValues) => Promise<AuthResult> | AuthResult;
};

type FieldErrors = Partial<Record<"name" | "email" | "password" | "confirmPassword", string>>;

type FormValues = SignInValues | SignUpValues;

const emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/;

const allowedFieldNames: (keyof FieldErrors)[] = ["name", "email", "password", "confirmPassword"];

export default function AuthForm({ variant, onSubmit }: AuthFormProps) {
  const isSignUp = variant === "sign-up";

  const initialValues = useMemo<FormValues>(
    () =>
      isSignUp
        ? { name: "", email: "", password: "", confirmPassword: "" }
        : { email: "", password: "" },
    [isSignUp]
  );

  const [values, setValues] = useState<FormValues>(initialValues);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setValues(initialValues);
    setFieldErrors({});
    setFormError("");
  }, [initialValues]);

  const mapFieldErrors = (errors?: Record<string, string>) => {
    if (!errors) return {} as FieldErrors;

    return allowedFieldNames.reduce<FieldErrors>((acc, field) => {
      if (errors[field]) {
        acc[field] = errors[field];
      }

      return acc;
    }, {} as FieldErrors);
  };

  const validate = (currentValues: FormValues) => {
    const errors: FieldErrors = {};

    const email = currentValues.email?.trim();
    const password = currentValues.password?.trim();

    if (isSignUp) {
      const signUpValues = currentValues as SignUpValues;
      const name = signUpValues.name?.trim();
      const confirmPassword = signUpValues.confirmPassword?.trim();

      if (!name) {
        errors.name = "Name is required";
      } else if (name.length < 2) {
        errors.name = "Name must be at least 2 characters";
      }

      if (!confirmPassword) {
        errors.confirmPassword = "Confirm password is required";
      } else if (password && confirmPassword !== password) {
        errors.confirmPassword = "Passwords do not match";
      }
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(email)) {
      errors.email = "Enter a valid email address";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    return errors;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }) as FormValues);

    const fieldName = name as keyof FieldErrors;

    if (fieldErrors[fieldName]) {
      setFieldErrors((prev) => ({ ...prev, [fieldName]: undefined }));
    }

    if (formError) {
      setFormError("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");

    const errors = validate(values);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);

    try {
      if (!onSubmit) return;

      const result = await onSubmit(values);

      if (!result.ok) {
        const mappedFieldErrors = mapFieldErrors(result.fieldErrors);

        if (Object.keys(mappedFieldErrors).length > 0) {
          setFieldErrors((prev) => ({ ...prev, ...mappedFieldErrors }));
        }

        if (result.error) {
          setFormError(result.error);
        }
      }
    } catch {
      setFormError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-center text-sm text-dark-700">
          {isSignUp ? "Create your account to start your fitness journey" : "Welcome back"}
        </p>
        <h1 className="text-center text-heading-3  text-dark-900">
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
              value={(values as SignUpValues).name}
              onChange={handleChange}
            />
            {fieldErrors.name && <p className="text-footnote text-red-600">{fieldErrors.name}</p>}
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
          {fieldErrors.email && <p className="text-footnote text-red-600">{fieldErrors.email}</p>}
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
          {fieldErrors.password && <p className="text-footnote text-red-600">{fieldErrors.password}</p>}
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
              value={(values as SignUpValues).confirmPassword}
              onChange={handleChange}
            />
            {fieldErrors.confirmPassword && (
              <p className="text-footnote text-red-600">{fieldErrors.confirmPassword}</p>
            )}
          </div>
        )}

        <div className="flex items-center justify-between text-caption text-dark-700">
          {!isSignUp && (
            <Link href="#" className="font-medium text-dark-900 underline-offset-4 hover:underline">
              Forgot password?
            </Link>
          )}
        </div>

        {formError && <p className="text-center text-caption text-red-600">{formError}</p>}

        <button
          type="submit"
          className="w-full rounded-full bg-dark-900 px-6 py-3 text-body-medium text-light-100 transition hover:-translate-y-[1px] hover:bg-dark-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-900 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
    </div>
  );
}
