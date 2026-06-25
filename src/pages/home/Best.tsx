import ShoeCard, {type CardProps} from "../../components/ShoeCard.tsx";
import Shoe10 from "../../assets/shoes/shoe-10.webp"
import Shoe7 from "../../assets/shoes/shoe-7.webp"
import Shoe9 from "../../assets/shoes/shoe-9.webp"


const products: CardProps[] = [
    {
        title: "Nike Air Force 1 '07",
        meta: "1 Colour",
        price: 89.99,
        imageSrc: Shoe10,
    },
    {
        title: "Nike Court Vision Low",
        meta: "1 Colour",
        price: 55.99,
        imageSrc: Shoe7,
    },
    {
        title: "Nike Air Max 90 LTR",
        meta: "1 Colour",
        price: 124.99,
        imageSrc: Shoe9,
    },
];

const Best = () => {
    return (
        <section className="page-spacing py-14">
            <h2 className="text-h3">
                Best of Air Max
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <ShoeCard key={product.title} {...product} />
                ))}
            </div>
        </section>
    );
};

export default Best;