import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.tsx";
import Men from "../pages/Men/Men.tsx";



const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/men" element={<Men/>} />
        </Routes>
    );
};

export default AppRouter;