import { FaFacebook,  FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-slate-600 to-black text-white py-10 px-5 md:px-20">
      <div className="container bottom-0 mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <h1 className='text-3xl font-bold'>My Portfolio</h1>
          <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/skills" className="hover:underline">Skills</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/shefatulla.allmahmud/" className="hover:text-blue-600 transition-all duration-300"><FaFacebook size="1.5em" /></a>
            <a href="https://github.com/shifat-ullah" className="hover:text-blue-400 transition-all duration-300"><FaGithub size="1.5em" /></a>
            <a href="https://www.instagram.com/ullahallmahmud/" className="hover:text-pink-600 transition-all duration-300"><FaInstagram size="1.5em" /></a>
            <a href="https://www.linkedin.com/in/shifatullahallmahmud/" className="hover:text-blue-700 transition-all duration-300"><FaLinkedin size="1.5em" /></a>
          </div>
          <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input type="email" placeholder="Enter your email" className="p-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all duration-300" />
            <button type="submit" className="bg-white text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">&copy; 2024 My Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
