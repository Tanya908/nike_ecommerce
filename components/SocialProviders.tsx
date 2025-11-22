import Image from "next/image";

const providers = [
  {
    name: "Google",
    icon: "/GoogleIcon.svg",
  },
  {
    name: "Apple",
    icon: "/AppleIcon.svg",
  },
];

export default function SocialProviders() {
  return (
    <div className="flex flex-col gap-3">
      {providers.map((provider) => (
        <button
          key={provider.name}
          type="button"
          className="flex items-center justify-center gap-3 rounded-full border border-light-300 bg-light-100 px-4 py-3 text-body-medium text-dark-900 transition hover:-translate-y-[1px] hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-900"
        >
          <Image src={provider.icon} alt={`${provider.name} icon`} width={20} height={20} />
          <span className="whitespace-nowrap">Continue with {provider.name}</span>
        </button>
      ))}
    </div>
  );
}
