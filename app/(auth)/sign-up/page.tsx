import Link from "next/link";
import AuthForm from "@/components/AuthForm";

export default function SignUpPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-end gap-2 text-sm text-dark-700">
        <span>Already a member?</span>
        <Link href="/sign-in" className="font-medium text-dark-900 underline-offset-4 hover:underline">
          Sign in
        </Link>
      </div>
      <AuthForm variant="sign-up" />
    </div>
  );
}
