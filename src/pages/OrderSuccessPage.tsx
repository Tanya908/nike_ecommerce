import { Link } from "react-router-dom";
import Button from "../components/Button";

const OrderSuccessPage = () => {
    return (
        <section className="page-spacing flex min-h-[70vh] items-center justify-center py-16">

            <div className="max-w-lg text-center">

                <div className="mb-6 text-6xl">
                    🎉
                </div>

                <h1 className="text-h1">
                    Order Confirmed!
                </h1>

                <p className="mt-4 text-body text-[var(--color-dark-600)]">
                    Thank you for your purchase. Your order has been placed successfully.
                    We’ll send you a confirmation email with your order details shortly.
                </p>

                <Link to="/collections">
                    <Button className="mt-10 px-10 py-4">
                        Continue Shopping
                    </Button>
                </Link>

            </div>

        </section>
    );
};

export default OrderSuccessPage;