import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.tsx";
import Men from "../pages/сategoryPage/Men.tsx";
import Women from "../pages/сategoryPage/Women.tsx";
import Kids from "../pages/сategoryPage/Kids.tsx";
import Collection from "../components/Collection.tsx";
import Contact from "../components/Contact.tsx";
import Product from "../pages/product/Product.tsx";
import CartPage from "../pages/CartPage.tsx";
import CheckoutPage from "../pages/CheckoutPage.tsx";
import OrderSuccessPage from "../pages/OrderSuccessPage.tsx";



const AppRouter = () => {
    return (
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
    );
};

export default AppRouter;