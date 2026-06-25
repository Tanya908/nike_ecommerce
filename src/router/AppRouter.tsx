import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.tsx";



const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    );
};

export default AppRouter;