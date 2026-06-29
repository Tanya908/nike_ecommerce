import ContactForm from "../components/Checkout/ContactForm.tsx";
import ShippingForm from "../components/Checkout/ShippingForm.tsx";
import PaymentForm from "../components/Checkout/PaymentForm.tsx";
import OrderSummary from "../components/Checkout/OrderSummary.tsx";

const CheckoutPage = () => {
    return (
        <section className="page-spacing py-12">

            <h1 className="text-h1">
                Checkout
            </h1>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_420px]">

                <div>
                    <ContactForm />
                    <ShippingForm />
                    <PaymentForm />
                </div>

                <OrderSummary />
            </div>
        </section>
    );
};

export default CheckoutPage;
