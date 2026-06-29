import { Link } from "react-router-dom";

import WomenImage from "../assets/collection-women.webp";
import MenImage from "../assets/collection-man.webp";
import KidsImage from "../assets/collection-kids.webp";

const collections = [
    {
        title: "Men",
        image: MenImage,
        to: "/men",
    },
    {
        title: "Women",
        image: WomenImage,
        to: "/women",
    },
    {
        title: "Kids",
        image: KidsImage,
        to: "/kids",
    },
];

const Collections = () => {
    return (
        <div className="page-spacing my-12">
            <h1 className="mb-10 text-h1">
                Collections
            </h1>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {collections.map((collection) => (
                    <Link
                        key={collection.title}
                        to={collection.to}
                        className="group overflow-hidden rounded-2xl"
                    >
                        <img
                            src={collection.image}
                            alt={collection.title}
                            className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-105"
                        />

                        <div className="mt-4 flex items-center justify-between">
                            <h2 className="text-h2">
                                {collection.title}
                            </h2>

                            <span className="text-body">
                                Shop →
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Collections;