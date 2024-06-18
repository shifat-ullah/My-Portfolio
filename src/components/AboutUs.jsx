import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AboutUs = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 40px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { duration: 1000 }
  });

  return (
    <div className=" text-white py-20 px-5 md:px-20">
      <animated.div style={fadeIn} className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-5">About Us</h2>
        <p className="text-lg mb-5">
          I am a CSE student at Bangladesh University, with a deep passion for web development and programming. I have completed a comprehensive course on complete web development, covering everything from basic programming concepts to advanced full-stack development.
        </p>
        <p className="text-lg mb-5">
          Throughout my studies and personal projects, I have gained proficiency in various programming languages and frameworks, including HTML, CSS, JavaScript, React, Node.js, and MongoDB. My dedication to learning and improving my skills has driven me to take on challenging projects and collaborate with peers.
        </p>
        
        <p className="text-lg mb-5">
          I am highly motivated to continue expanding my knowledge and experience in web development. My goal is to become a proficient full-stack developer and contribute to innovative and impactful projects. I am always eager to learn new technologies and take on new challenges in the tech industry.
        </p>
        <p className="text-lg">
          Thank you for visiting my profile. Feel free to reach out to me for collaboration or any queries.
        </p>
      </animated.div>
    </div>
  );
};

export default AboutUs;
