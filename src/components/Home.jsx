import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import ResumeDownload from "./ResumeDownlode";
import Skills from "./Skills";




const Home = () => {
    return (
        <div>
           <ResumeDownload></ResumeDownload>
            <Experience></Experience>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;