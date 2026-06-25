import Header from "./layout/Header.tsx";
import AppRouter from "./router/AppRouter.tsx";
import Footer from "./layout/Footer.tsx";

const App = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <Header />
            <AppRouter/>
            <Footer/>
        </div>
    )
}
export default App
