import { Routes, Route } from "react-router-dom";



const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<div className="h-[50vh] bg-yellow-300">Home</div>} />
        </Routes>
    );
};

export default AppRouter;