import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import p1 from "../assets/ss1.png";
import p2 from "../assets/ss2.png";
import p3 from "../assets/sentimenYT.png";
import p4 from "../assets/krl.png";

const projects = [
  {
    id: 1,
    title: "UI/UX Money Infinite",
    image: p1,
    short:
      "A digital payment application design that allows transfers to all platforms with minimal admin fees.",
    detail:
      "Money Infinite is a UI/UX design project for a digital payment application focused on simplicity, efficiency, and user trust. This project emphasizes a clean and modern interface with a clear user flow to minimize friction during transactions. The design process includes user journey mapping, wireframing, and high-fidelity prototyping to ensure intuitive navigation and accessibility. The goal of this project is to improve user experience in fintech applications by reducing cognitive load and enhancing transaction clarity."
  },
  {
    id: 2,
    title: "Website Pengaduan Infrastruktur (Petruk)",
    image: p2,
    short:
      "A complaint website for infrastructure that is no longer functional or suitable and needs repair.",
    detail:
      "Petruk is a web-based infrastructure complaint system designed to help citizens report damaged or non-functional public facilities. This project focuses on structured data input, clear reporting flow, and ease of use for both users and administrators. The system allows users to submit reports with descriptions and locations, enabling faster response and better documentation. This project demonstrates my ability to design and develop functional web applications that solve real-world problems using logical workflows and user-centered design."
  },
  {
    id: 3,
    title: "Sentiment Analysis YouTube",
    image: p3,
    short:
      "Sentiment analysis of YouTube comments on the boxing match using Naive Bayes.",
    detail:
      "This project analyzes public sentiment from YouTube comments related to a boxing match using the Naive Bayes classification algorithm. The workflow includes data scraping, text preprocessing (such as case folding, tokenization, stopword removal), and sentiment classification into positive, neutral, and negative categories. The project demonstrates my understanding of data analysis fundamentals, machine learning concepts, and how data-driven insights can be extracted from social media platforms."
  },
  {
    id: 4,
    title: "Sentiment Analysis KRL Jogja–Solo",
    image: p4,
    short:
      "Sentiment analysis of public opinions on KRL Jogja–Solo using Twitter and TikTok data.",
    detail:
      "This project analyzes public sentiment toward KRL Jogja–Solo services using data from Twitter and TikTok. The results show that neutral sentiment dominates user opinions. To address class imbalance, SMOTE was applied to the training data. Using TF-IDF features and a Multinomial Naïve Bayes classifier, the model achieved 76.21% accuracy, with the best performance on neutral sentiment classification, demonstrating that Naïve Bayes is an effective and efficient approach for sentiment analysis.",
  }
 
  // {
  //   id: 2,
  //   title: "Website Pengaduan Infrastruktur (Petruk)",
  //   image: p2,
  //   short:
  //     "A complaint website for infrastructure that is no longer functional or suitable and needs repair.",
  //   detail:
  //     "This website helps users report damaged infrastructure efficiently with structured data and clear reporting flow.",
  // },
  // {
  //   id: 3,
  //   title: "Sentiment Analysis YouTube",
  //   image: p3, 
  //   short:
  //     "Sentiment analysis of YouTube comments on the boxing match using Naive Bayes.",
  //   detail:
  //     "Data scraping, text preprocessing, and sentiment classification using Naive Bayes algorithm.",
  // },
  
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="project">
      <div className="px-4 md:px-6 py-16">
        {/* Title */}
        <div className="text-center text-white mb-12">
          <h3 className="text-3xl font-bold">Project</h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden
                         cursor-pointer transform transition-all
                         hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-justify">
                  {project.short}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn */}
        <p className="my-6 text-center text-white">
          <a
            href="https://www.linkedin.com/in/fajri-kanugraha-agung-28337233a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0e76a8] pr-1 hover:opacity-80"
          >
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
          <a
            href="https://www.linkedin.com/in/fajri-kanugraha-agung-28337233a/"
            className="hover:underline"
          >
            View Detail on my LinkedIn
          </a>
        </p>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="bg-white max-w-xl w-full rounded-lg p-6 relative animate-fadeIn">

            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-56 object-cover rounded mb-4"
            />

            <h3 className="text-2xl font-bold mb-3">
              {selectedProject.title}
            </h3>

            <p className="text-gray-600 text-justify">
              {selectedProject.detail}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
