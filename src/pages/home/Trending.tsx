import { Link } from "react-router-dom";
import Button from "../../components/Button";
import TrendingHero from "../../assets/trending-1.webp";
import TrendingLeft from "../../assets/trending-2.webp";
import TrendingRight from "../../assets/trending-3.webp";

const trendingPromos = [
    {
        title: "Nike Air Max Dn",
        description: "Feel the unreal with the latest Air Max innovation.",
        imageSrc: TrendingHero,
        btn: "Shop Now",
        to: "/collections",
    },
    {
        title: "Lifestyle",
        imageSrc: TrendingLeft,
        to: "/collections",
    },
    {
        title: "Running",
        imageSrc: TrendingRight,
        to: "/collections",
    },
];

const Trending = () => {
    return (
        <section className="page-spacing pb-4 mb-14">
            <h3 className="text-h3">
                Trending Now
            </h3>

            <article className="relative mt-8 overflow-hidden bg-[var(--color-dark-900)]">
                <div className="relative h-[280px] sm:h-[320px] lg:h-[420px]">
                    <img
                        src={trendingPromos[0].imageSrc}
                        alt={trendingPromos[0].title}
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                </div>

                <div className="absolute left-4 top-1/2 -translate-y-1/2 space-y-2 text-[var(--color-light-100)] sm:left-10 sm:space-y-4">
                    <h2 className="max-w-[220px] text-4xl font-bold leading-none sm:max-w-none sm:text-h2">
                        {trendingPromos[0].title}
                    </h2>

                    <p className="max-w-[220px] text-sm leading-6 text-[var(--color-light-200)] sm:max-w-xl sm:text-lead">
                        {trendingPromos[0].description}
                    </p>

                    <Link to={trendingPromos[0].to}>
                        <Button
                            variant="light"
                            className="px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-body-medium"
                        >
                            {trendingPromos[0].btn}
                        </Button>
                    </Link>
                </div>
            </article>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                {trendingPromos.slice(1).map((promo) => (
                    <Link
                        key={promo.title}
                        to={promo.to}
                        className="group relative block overflow-hidden bg-[var(--color-light-200)]"
                    >
                        <div className="aspect-[16/9] overflow-hidden">
                            <img
                                src={promo.imageSrc}
                                alt={promo.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                        </div>

                        <div className="absolute bottom-4 left-4">
                            <h4 className="text-heading-3 text-[var(--color-light-100)]">
                                {promo.title}
                            </h4>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Trending;