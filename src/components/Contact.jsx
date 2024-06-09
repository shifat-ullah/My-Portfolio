
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
    const iconStyle = {
        backgroundColor: 'black',
        borderRadius: '50%',
        border: '2px solid yellow',
        padding: '10px',
        margin: '5px',
        color: 'white',
        fontSize: '24px'
    };
    return (
        <div className="lg:w-[900px] min-h-screen  mt-20 w-[400px] mx-auto ex">
            <h1 className=' text-3xl font-bold mb-10'>Contact Us!</h1>

            <div style={{ display: 'flex', gap:'30px', justifyContent: 'center', alignItems: 'center' }}>
                <a href="https://www.facebook.com/shefatulla.allmahmud/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                    <FaFacebook />
                </a>
                <a href="https://www.linkedin.com/in/shifatullahallmahmud/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/shifat-ullah" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/ullahallmahmud/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                    <FaInstagram />
                </a>
                <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                    <SiGmail />
                </a>
            </div>
        </div>
    );
};

export default Contact;