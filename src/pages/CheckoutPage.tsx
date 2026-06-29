import ContactForm from "../components/Checkout/ContactForm.tsx";
import ShippingForm from "../components/Checkout/ShippingForm.tsx";
import PaymentForm from "../components/Checkout/PaymentForm.tsx";
import OrderSummary from "../components/Checkout/OrderSummary.tsx";
import {FormProvider,useForm} from "react-hook-form";
import type { CheckoutFormValues } from "../types/checkout";
import {useNavigate} from "react-router-dom";
import {useCart} from "../context/CartContext.tsx";

const CheckoutPage = () => {

    const methods = useForm<CheckoutFormValues>({
        mode: "onTouched",
        defaultValues: {
            country: null,
            city: null,
        },
    });

    const navigate = useNavigate();
    const { clearCart } = useCart();

    const onSubmit = (data: CheckoutFormValues) => {
        console.log(data);

        clearCart();

        navigate("/order-success");
    };

    return (
        <section className="page-spacing py-12">

            <h1 className="text-h1">
                Checkout
            </h1>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-12 grid gap-12 lg:grid-cols-[1fr_420px]">
                    <div>
                        <ContactForm />
                        <ShippingForm />
                        <PaymentForm />
                    </div>
                    <OrderSummary />
                </form>
            </FormProvider>
        </section>
    );
};

export default CheckoutPage;
