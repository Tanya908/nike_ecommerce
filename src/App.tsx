import Header from "./layout/Header.tsx";
import AppRouter from "./router/AppRouter.tsx";

const App = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <Header />
            <AppRouter/>
        </div>
    )
}
export default App
