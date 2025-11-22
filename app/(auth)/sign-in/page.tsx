

import Link from "next/link";
import AuthForm from "@/components/AuthForm";

export default function SignInPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-center gap-2 text-sm text-dark-700">
        <span>New to Nike?</span>
        <Link href="/sign-up" className="font-medium text-dark-900 underline underline-offset-4 ">
          Create an account
        </Link>
      </div>
      <AuthForm variant="sign-in" />
    </div>
  );
}
