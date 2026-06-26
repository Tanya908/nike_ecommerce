import { Link } from "react-router-dom";
import ShoeCard from "../../components/ShoeCard";
import { products } from "../../data/products";

const bestProducts = products
    .filter((product) => product.badge)
    .slice(0, 3);

const Best = () => {
    return (
        <section className="page-spacing py-14">
            <h2 className="text-h3">
                Best of Air Max
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {bestProducts.map((product) => (
                    <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className="block"
                    >
                        <ShoeCard {...product} />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Best;