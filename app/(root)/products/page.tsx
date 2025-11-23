import ProductsClient from "./ProductsClient";
import { filterGroups, products } from "./data";

export default async function ProductsPage() {
    return (
        <main className="bg-light-100">
            <section className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:px-0">
                <ProductsClient products={products} groups={filterGroups} />
            </section>
        </main>
    );
}
