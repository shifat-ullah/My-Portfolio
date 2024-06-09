/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Navbar from "../shared/navber/Navbar";
import Footer from "../shared/footer/Footer";



const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;