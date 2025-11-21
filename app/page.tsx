import Image from "next/image";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const featuredShoes = [
  {
    title: "Air Max 270",
    description: "Breathable mesh with responsive Air cushioning for all-day wear.",
    price: "$159.99",
    variantLabel: "Men's Shoes",
    badge: "New",
    imageSrc: "/trending-1.png",
  },
  {
    title: "Air Jordan 1 Retro",
    description: "Heritage high-top with premium leather and bold color blocking.",
    price: "$189.99",
    variantLabel: "Women's Shoes",
    badge: "Trending",
    imageSrc: "/trending-2.png",
  },
  {
    title: "Nike Pegasus Trail 4",
    description: "Trail-ready traction meets soft React foam for smooth runs.",
    price: "$139.99",
    variantLabel: "Kids' Shoes",
    badge: "Popular",
    imageSrc: "/trending-3.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-light-200)] text-[var(--color-dark-900)]">
      <Navbar />

      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 md:px-6 lg:px-8">
        <section className="grid grid-cols-1 gap-10 rounded-3xl bg-[var(--color-light-100)] p-8 shadow-sm md:grid-cols-2 md:items-center md:p-12">
          <div className="space-y-6">
            <p className="text-[var(--text-caption)] font-medium uppercase tracking-[0.08em] text-[var(--color-dark-700)]">
              Featured Drop
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-[var(--color-dark-900)] md:text-5xl">
              Elevate your stride with the latest Nike essentials
            </h1>
            <p className="text-lg leading-7 text-[var(--color-dark-700)]">
              Explore breathable meshes, responsive Air cushioning, and statement silhouettes designed to move with you.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-[var(--color-dark-900)] px-6 py-3 text-[var(--text-caption)] font-medium text-[var(--color-light-100)] transition-colors hover:bg-black">
                Shop New Arrivals
              </button>
              <button className="rounded-full border border-[var(--color-light-300)] px-6 py-3 text-[var(--text-caption)] font-medium text-[var(--color-dark-900)] transition-colors hover:border-[var(--color-dark-900)]">
                View Collections
              </button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative h-[260px] w-full max-w-md overflow-hidden rounded-3xl bg-[var(--color-light-200)] md:h-[340px]">
              <Image
                src="/hero-shoe.png"
                alt="Nike shoe display"
                fill
                className="object-contain"
                priority
                sizes="(min-width: 1024px) 400px, (min-width: 768px) 360px, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[var(--text-caption)] font-medium uppercase tracking-[0.08em] text-[var(--color-dark-700)]">Trending now</p>
              <h2 className="text-3xl font-semibold text-[var(--color-dark-900)]">Fresh picks</h2>
            </div>
            <button className="hidden rounded-full border border-[var(--color-light-300)] px-4 py-2 text-[var(--text-caption)] font-medium text-[var(--color-dark-900)] transition-colors hover:border-[var(--color-dark-900)] md:inline-flex">
              View all
            </button>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredShoes.map((shoe) => (
              <Card key={shoe.title} {...shoe} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
