import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Landing = () => {
    return (
      <section id="landing" className="bg-[#FEFDFD] min-h-[50vh] flex items-center md:item-center pt-28 pb-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 ">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <p className="text-2xl mb-2">Hello,</p>

            <h2 className="text-4xl lg:text-5xl font-bold mb-2">
              Muh. Fajri Kanugraha Agung
            </h2>

            <p className="text-2xl mb-4">here!</p>

            <h2 className="text-3xl font-semibold mb-6">
              Fresh Graduate IT
            </h2>

            <a href="/CV_Muh. Fajri Kanugraha Agung.pdf" download="CV_Muh. Fajri Kanugraha Agung.pdf" className="inline-block px-6 py-3 mb-8 text-white text-lg font-semibold rounded-lg shadow-lg bg-gradient-to-r from-[#B23039] to-[#1B1F4D] hover:opacity-90 hover:scale-105 transition">
              My Resume
            </a>

            {/* SOCIAL */}
              <div className="flex justify-center md:justify-start space-x-5">
                {/* <a
                  href="https://www.linkedin.com/in/fajri-kanugraha-agung-28337233a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#171515] hover:opacity-80 hover:scale-110"
                  >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a> */}
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
                  href="https://www.youtube.com/@pajjriikanugraha8111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#171515] hover:opacity-80 hover:scale-110"
                  >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img src="/myportov1/fajri.png" alt="Muh Fajri Kanugraha Agung" className=" w-64 sm:w-72 lg:w-80 h-auto object-contain"/>
          </div>

        </div>
      </div>
</section>

      );
};

export default Landing;