/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Navbar from "../shared/navber/Navbar";
import Footer from "../shared/footer/Footer";
import ResumeDownload from "../components/ResumeDownlode";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ResumeDownload></ResumeDownload>
            <Experience></Experience>
            <Skills></Skills>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;