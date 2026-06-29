import ContactForm from "../components/Checkout/ContactForm.tsx";
import ShippingForm from "../components/Checkout/ShippingForm.tsx";
import PaymentForm from "../components/Checkout/PaymentForm.tsx";
import OrderSummary from "../components/Checkout/OrderSummary.tsx";
import Button from "../components/Button.tsx";
import {
    FormProvider,
    useForm,
} from "react-hook-form";

import type { CheckoutFormValues } from "../types/checkout";

const CheckoutPage = () => {
    const methods = useForm<CheckoutFormValues>({
        mode: "onTouched",
    });

    const onSubmit = (data: CheckoutFormValues) => {
        console.log(data);
    };
    return (
        <section className="page-spacing py-12">

            <h1 className="text-h1">
                Checkout
            </h1>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_420px]">

                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <ContactForm />
                        <ShippingForm />
                        <PaymentForm />

                        <Button
                            type="submit"
                            className="mt-4 w-full py-4"
                        >
                            Place Order
                        </Button>
                    </form>
                </FormProvider>

                <OrderSummary />
            </div>
        </section>
    );
};

export default CheckoutPage;
