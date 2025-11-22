import Link from "next/link";
import AuthForm from "@/components/AuthForm";

export default function SignInPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-end gap-2 text-sm text-dark-700">
        <span>New to Nike?</span>
        <Link href="/sign-up" className="font-medium text-dark-900 underline-offset-4 hover:underline">
          Create an account
        </Link>
      </div>
      <AuthForm variant="sign-in" />
    </div>
  );
}
