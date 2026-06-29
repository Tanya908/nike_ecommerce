import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.tsx";
import Men from "../pages/сategoryPage/Men.tsx";
import Women from "../pages/сategoryPage/Women.tsx";
import Kids from "../pages/сategoryPage/Kids.tsx";
import Product from "../pages/product/Product.tsx";
import CartPage from "../pages/CartPage.tsx";
import OrderSuccessPage from "../pages/OrderSuccessPage.tsx";
import Collection from "../pages/Collection.tsx";
import Contact from "../pages/Contact.tsx";
import { lazy, Suspense } from "react";

const CheckoutPage = lazy(() => import("../pages/CheckoutPage.tsx"));


const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/men" element={<Men/>} />
                <Route path="/women" element={<Women/>} />
                <Route path="/kids" element={<Kids/>} />
                <Route path="/collections" element={<Collection/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />}/>
                <Route path="/order-success" element={<OrderSuccessPage />}/>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;