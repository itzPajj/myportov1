import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Project = () => {
  return (
    <section id="project">
      <div className="container mx-auto px-4 md:px-6 bg-[#FFFFF] py-16">
        {/* Project Section */}
        <div className="text-center text-white mb-12">
          <h3 className="text-3xl font-bold mb-4">Project</h3>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#FFFFFF] max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl hover:pointer-selected">
            <img
              src="././ss1.png"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">UI/UX Money Infinite</h3>
              <p className="text-gray-600">
                A digital payment application design that allows transfers to all platforms with minimal admin fees.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFFFFF] max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
            <img
              src="././ss2.png"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Website Pengaduan Infrastruktur (Petruk)</h3>
              <p className="text-gray-600">
                A complaint website for infrastructure that is no longer functional or suitable and needs repair.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFFFFF] max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
            <img
              src="././collab.png"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Analisis Sentimen YouTube (Boxing Jefri vs El Rumi)
              </h3>
              <p className="text-gray-600">
                Sentiment analysis of YouTube comments on the boxing match between Jefri and El Rumi using the Naive Bayes method.
              </p>
            </div>
          </div>
        </div>

        <p className="my-5 text-center text-white">
          <a
            href="https://www.linkedin.com/in/fajri-kanugraha-agung-28337233a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0e76a8] pr-1 hover:opacity-80"
          >
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
          <a href="https://www.linkedin.com/in/fajri-kanugraha-agung-28337233a/">View Detail on my LinkedIn</a>
        </p>
      </div>
    </section>
  );
};

export default Project;
