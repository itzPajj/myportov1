import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Landing = () => {
    return (
      <section id="landing" className="bg-[#FEFDFD] py-16">
    {/* Header Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-wrap">

        {/* Left Side */}
        <div className="w-full md:w-1/2 text-[#00000] text-center md:text-left mb-10 md:mb-0">
          <p className="text-2xl leading-relaxed mb-2">Hello,</p>
          <h2 className="text-5xl font-bold mb-2">Muh. Fajri Kanugraha Agung</h2>
          <p className="text-2xl leading-relaxed mb-4">here!</p>
          <h2 className="text-3xl font-semibold mb-6">UI/UX Designer & Web Developer</h2>

          {/* Download Resume Button */}
          <a
            href="/CV_Muh. Fajri Kanugraha Agung.pdf"
            download="Muh. Fajri Kanugraha Agung.pdf"
            className="inline-block px-6 py-3 mb-6 text-white text-xl font-semibold rounded-lg shadow-lg bg-gradient-to-r from-[#B23039] to-[#1B1F4D] hover:opacity-90 transition-opacity duration-300 hover:scale-110"
            >
            My Resume
          </a>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-5">
            <a
              href="https://www.linkedin.com/in/fajri-kanugraha-agung-28337233a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#171515] hover:opacity-80 hover:scale-110"
              >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/itzPajj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#171515] hover:opacity-80 hover:scale-110"
              >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/pajjrii/profilecard/?igsh=azQ4Nm0yZGtwNjJm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#171515] hover:opacity-80 hover:scale-110"
              >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#171515] hover:opacity-80 hover:scale-110"
              >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.youtube.com/@pajjriikanugraha8111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#171515] hover:opacity-80 hover:scale-110"
              >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/fajri.png"
            alt="Muh Fajri Kanugraha Agung"
            className="w-96 h-auto"
            />
        </div>
      </div>
    </section>
      );
};

export default Landing;