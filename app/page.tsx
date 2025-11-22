import Image from "next/image";
import Card, { CardProps } from "@/components/Card";

const bestOfAirMax: CardProps[] = [
    {
        title: "Nike Air Force 1 '07",
        subtitle: "Men's Shoes",
        meta: "1 Colour",
        price: 89.99,
        imageSrc: "/shoes/shoe-10.avif",
    },
    {
        title: "Nike Court Vision Low",
        subtitle: "Men's Shoes",
        meta: "1 Colour",
        price: 55.99,
        imageSrc: "/shoes/shoe-7.avif",
    },
    {
        title: "Nike Air Max 90 LTR",
        subtitle: "Women's Shoes",
        meta: "1 Colour",
        price: 124.99,
        imageSrc: "/shoes/shoe-9.avif",
    },
];

type TrendingPromo = {
    title: string;
    description?: string;
    imageSrc: string;
    cta: string;
    eyebrow?: string;
};

const trendingPromos: TrendingPromo[] = [
    {
        title: "Nike Air Max Pulse",
        description: "Extreme comfort. Hyper durable. Max volume.",
        imageSrc: "/trending-1.png",
        cta: "Shop",
        eyebrow: "Nike App",
    },
    {
        title: "Nike Force 1 LE",
        imageSrc: "/trending-2.png",
        cta: "Shop",
        eyebrow: "Nike App",
    },
    {
        title: "Air Jordan 1 Retro Low LE",
        imageSrc: "/trending-3.png",
        cta: "Shop",
        eyebrow: "Nike App",
    },
];

export default function Home() {
    return (
        <main className="bg-light-100">
            <section className="relative isolate overflow-hidden bg-dark-900 text-light-100">
                <div className="absolute inset-0">
                    <Image
                        src="/hero-bg.png"
                        alt="Colourful abstract background"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover opacity-60"
                    />
                </div>

                <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-16 pt-10 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="relative z-10 flex-1 space-y-6">
                        <div className="flex items-center gap-3 text-caption uppercase tracking-[0.2em]">
                            <span className="h-0.5 w-10 bg-light-100" aria-hidden />
                            <span>Just Do It</span>
                        </div>

                        <div className="space-y-4">
                            <p className="text-body text-light-200">Nike &amp; SNKRS</p>
                            <h1 className="text-heading-1 leading-tight text-light-100">
                                Style That Moves With You.
                            </h1>
                            <p className="max-w-xl text-lead text-light-200">
                                Not just style, but comfort. Footwear that effortlessly adapts to your
                                movement.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                            <button className="rounded-full bg-light-100 px-6 py-3 text-body-medium text-dark-900 transition hover:-translate-y-0.5 hover:bg-light-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-light-100">
                                Shop Now
                            </button>
                            <div className="text-caption text-light-200">
                                Best of Air<br />
                                <span className="font-semibold">Jordan</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 flex-1">
                        <div className="relative mx-auto w-full max-w-xl">
                            <div className="absolute -left-10 top-16 text-[110px] font-bold uppercase leading-none text-dark-700/40 sm:-left-6 sm:top-6 sm:text-[140px] lg:-left-14 lg:top-12 lg:text-[170px]">
                                Nike
                            </div>
                            <div className="absolute -right-6 bottom-12 text-6xl font-semibold uppercase tracking-widest text-dark-700/60 sm:-right-10 sm:text-7xl lg:-right-16 lg:text-8xl">
                                Air
                            </div>
                            <Image
                                src="/hero-shoe.png"
                                alt="Colourful Nike shoe"
                                width={900}
                                height={700}
                                priority
                                className="relative z-10 h-auto w-full drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <p className="text-caption text-dark-700">Shoe &amp; Sneaker</p>
                        <h2 className="text-heading-2 text-dark-900">Best of Air Max</h2>
                    </div>
                    <button className="rounded-full border border-light-300 px-6 py-2 text-body-medium text-dark-900 transition hover:-translate-y-0.5 hover:bg-light-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-500">
                        Shop All
                    </button>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {bestOfAirMax.map((product) => (
                        <Card key={product.title} {...product} className="rounded-2xl shadow-sm" />
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-heading-2 text-dark-900">Trending Now</h2>
                    <button className="rounded-full border border-light-300 px-6 py-2 text-body-medium text-dark-900 transition hover:-translate-y-0.5 hover:bg-light-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-500">
                        Shop All
                    </button>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-[2fr,1fr]">
                    <article className="relative isolate overflow-hidden rounded-3xl bg-dark-900 px-6 py-10 sm:px-10 sm:py-16">
                        <Image
                            src="/trending-1.png"
                            alt="Nike Air Max Pulse trainers"
                            fill
                            sizes="(min-width: 1024px) 60vw, 100vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 via-dark-900/70 to-dark-900/10" />
                        <div className="relative max-w-xl space-y-4 text-light-100">
                            {trendingPromos[0].eyebrow && (
                                <p className="text-body text-light-200">{trendingPromos[0].eyebrow}</p>
                            )}
                            <h3 className="text-heading-2 leading-tight">{trendingPromos[0].title}</h3>
                            <p className="text-lead text-light-200">
                                {trendingPromos[0].description ?? "Just when you thought it couldn&apos;t get any better."}
                            </p>
                            <button className="rounded-full bg-light-100 px-6 py-3 text-body-medium text-dark-900 transition hover:-translate-y-0.5 hover:bg-light-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-light-100">
                                {trendingPromos[0].cta}
                            </button>
                        </div>
                    </article>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                        {trendingPromos.slice(1).map((promo) => (
                            <article
                                key={promo.title}
                                className="relative overflow-hidden rounded-3xl bg-light-200"
                                aria-label={promo.title}
                            >
                                <div className="relative aspect-[4/3]">
                                    <Image
                                        src={promo.imageSrc}
                                        alt={promo.title}
                                        fill
                                        sizes="(min-width: 1024px) 35vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-dark-900/10 to-transparent" />
                                <div className="absolute bottom-4 left-4 space-y-2 text-light-100">
                                    {promo.eyebrow && <p className="text-body text-light-200">{promo.eyebrow}</p>}
                                    <h4 className="text-heading-3">{promo.title}</h4>
                                    <button className="rounded-full bg-light-100 px-4 py-2 text-body-medium text-dark-900 transition hover:-translate-y-0.5 hover:bg-light-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-light-100">
                                        {promo.cta}
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
                <div className="grid gap-10 overflow-hidden rounded-3xl bg-light-200 p-8 shadow-sm lg:grid-cols-2 lg:items-center lg:p-12">
                    <div className="relative h-full space-y-5">
                        <p className="text-caption text-dark-700">Shoe &amp; Sneaker</p>
                        <h2 className="text-heading-1 text-dark-900">Nike React Presto By You</h2>
                        <p className="text-lead text-dark-700">
                            It&apos;s back. Last time, you took design into your own hands and created a
                            React Presto that was undeniably you.
                        </p>
                        <button className="rounded-full bg-dark-900 px-6 py-3 text-body-medium text-light-100 transition hover:-translate-y-0.5 hover:bg-dark-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-700">
                            Customise Your Design
                        </button>
                        <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 -rotate-6 rounded-full bg-orange/10 blur-3xl" />
                    </div>

                    <div className="relative">
                        <div className="absolute -right-10 top-10 h-64 w-64 -rotate-6 bg-gradient-to-br from-orange/30 via-light-100 to-light-200" />
                        <Image
                            src="/feature.png"
                            alt="Custom Nike React Presto shoe"
                            width={700}
                            height={500}
                            className="relative z-10 w-full max-w-xl drop-shadow-2xl"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
