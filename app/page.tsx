import Image from "next/image";
import Card, { CardProps } from "@/components/Card";
import PromoSection from "@/components/PromoSection";
import Button from "@/components/Button";

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
    btn?: string;
};

const trendingPromos: TrendingPromo[] = [
    {
        title: "Nike Air Max Pulse",
        description: "Extreme comfort. Hyper durable. Max volume.",
        imageSrc: "/trending-1.png",
        btn: "Shop Now",
    },
    {
        title: "Nike Force 1 LE",
        imageSrc: "/trending-2.png",
    },
    {
        title: "Air Jordan 1 Retro Low LE",
        imageSrc: "/trending-3.png",
    },
];

export default function Home() {
    return (
        <main className="bg-light-100">
            <PromoSection
                bgSrc="/hero-bg.png"
                imageSrc="/hero-shoe.png"
                eyebrow="Bold & Sporty"
                title="Style That Moves With You."
                description="Not just style, but comfort. Footwear that effortlessly adapts to your movement."
                btnLabel="Find your shoe"
                btnVariant="dark"

            />

            <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <h2 className="text-heading-3 text-dark-900">Best of Air Max</h2>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {bestOfAirMax.map((product) => (
                        <Card key={product.title} {...product}  />
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
                <h2 className="text-heading-3 text-dark-900">Trending Now</h2>

                {/* TOP HERO (wide) */}
                <article className="relative mt-8 overflow-hidden  bg-dark-900">
                    <div className="relative h-[220px] sm:h-[320px] lg:h-[420px]">
                        <Image
                            src= "/trending-1.png"
                            alt={trendingPromos[0].title}
                            fill
                            sizes="(min-width: 1024px) 100vw, 100vw"
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 via-dark-900/60 to-transparent" />
                    </div>
                    <div className="absolute left-6 top-1/5 space-y-2 text-light-100 sm:left-10">

                        <h3 className="text-heading-2 leading-tight">
                            {trendingPromos[0].title}
                        </h3>

                        {trendingPromos[0].description && (
                        <p className="text-lead text-light-200 max-w-xl">
                            {trendingPromos[0].description }
                        </p>
                        )}

                        {trendingPromos[0].btn && (
                        <Button  variant="light" >
                            {trendingPromos[1].title}
                        </Button>
                        )}
                    </div>
                </article>

                {/* BOTTOM 2 CARDS (50/50) */}
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {trendingPromos.slice(1, 3).map((promo) => (
                        <article
                            key={promo.title}
                            className="relative overflow-hidden  bg-light-200"
                            aria-label={promo.title}
                        >
                            <div className="relative aspect-[16/9]">
                                <Image
                                    src={promo.imageSrc}
                                    alt={promo.title}
                                    fill
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-dark-900/10 to-transparent" />
                            </div>

                            <div className="absolute bottom-4 left-4 space-y-2 text-light-100">
                                <h4 className="text-heading-3">{promo.title}</h4>
                            </div>



                        </article>
                    ))}
                </div>
            </section>

            <PromoSection
                imageSrc="/feature.png"
                eyebrow="Bold & Sporty"
                title="Run Faster. Feel Lighter."
                description="Engineered for speed and everyday comfort."
                btnLabel="Shop now"
                btnVariant="dark"
                noBottomPadding
            />
        </main>
    );
}
