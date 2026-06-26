import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.tsx";
import Men from "../pages/сategoryPage/Men.tsx";
import Women from "../pages/сategoryPage/Women.tsx";
import Kids from "../pages/сategoryPage/Kids.tsx";
import Collection from "../components/Collection.tsx";
import Contact from "../components/Contact.tsx";
import Product from "../pages/product/Product.tsx";



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
        </Routes>
    );
};

export default AppRouter;