import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-[1.1fr,1fr] bg-light-100 text-dark-900">
      <div className="relative hidden lg:flex overflow-hidden bg-dark-900 text-light-100">
        <Image
          src="/hero-bg.png"
          alt="Nike runners"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/90 to-dark-900" />
        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16">
          <div className="flex items-center gap-3 text-light-100">
            <Image src="/logo.svg" alt="Nike logo" width={48} height={48} />
            <span className="text-heading-3 font-semibold">Nike</span>
          </div>
          <div className="space-y-6 max-w-md">
            <p className="text-heading-2 leading-tight">Just Do It</p>
            <p className="text-lead text-light-200">
              Join millions of athletes and fitness enthusiasts who trust Nike for their performance
              needs.
            </p>
          </div>
          <p className="text-footnote text-light-400">© 2024 Nike. All rights reserved.</p>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-12">
        <div className="w-full max-w-xl">
          <div className="rounded-2xl border border-light-300 bg-light-100/80 backdrop-blur shadow-sm p-6 sm:p-8">
            {children}
          </div>
          <p className="mt-6 text-center text-footnote text-dark-700">
            By continuing, you agree to our {" "}
            <Link href="#" className="underline underline-offset-4">Terms of Service</Link>
            {" "}and{" "}
            <Link href="#" className="underline underline-offset-4">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
