import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Header from "../component/header/Header";


const Root = () => {
    return (
        <div className="">
            <div className="max-w-6xl mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;