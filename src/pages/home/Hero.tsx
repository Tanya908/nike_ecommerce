import HeroShoe from "../../assets/hero-shoe.webp";
import HeroBackground from "../../assets/hero-bg.webp";
import Button from "../../components/Button.tsx";

const Hero = () => {
    return (
        <section className="relative overflow-hidden py-8 ">

            <div className="absolute inset-0">
                <img
                    src={HeroBackground}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover opacity-50"
                />
            </div>

            <div className="relative z-10 mx-auto flex flex-col items-center gap-8 pt-10 lg:flex-row lg:pt-16 page-spacing">

                <div className="flex-1 space-y-6">
                    <div className="space-y-4">
                        <p className="text-lead text-[var(--color-red)]">
                            New Collection
                        </p>

                        <h1 className="text-h1">
                            Nike Air Max Pulse
                        </h1>

                        <p className="max-w-lg text-lead">
                            Step into the future with the newest Nike collection.
                            Premium comfort, bold design, and everyday performance.
                        </p>
                    </div>

                    <Button>
                        Shop Now
                    </Button>
                </div>

                <div className="flex-1">
                    <img
                        src={HeroShoe}
                        alt="Nike Air Max Pulse"
                        className="h-full w-full object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;