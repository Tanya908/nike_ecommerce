import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.tsx";
import Men from "../pages/сategoryPage/Men.tsx";
import Women from "../pages/сategoryPage/Women.tsx";
import Kids from "../pages/сategoryPage/Kids.tsx";



const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/men" element={<Men/>} />
            <Route path="/women" element={<Women/>} />
            <Route path="/kids" element={<Kids/>} />
        </Routes>
    );
};

export default AppRouter;