import React, { useState } from "react";

const About = () => {
  return (
    <section id="about" className="bg-[#FEFDFD] pt-16 pb-13">
      {/* About Me Section */}
      <div className="bg-[#D9D9D9] py-20 mt-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            I am a Junior Frontend Developer and Data Analyst who focuses on building scalable frontend applications and extracting insights from data. I work with React, Tailwind CSS, and modern web tools, and I have experience in sentiment analysis using Naive Bayes.
            <br /> I am eager to continuously learn, improve, and contribute to impactful projects.
          </p>
        </div>

        {/* Skills Section */}
        <div className="flex flex-wrap gap-y-12">
          {/* Soft Skills */}
          <div className="w-full md:w-1/2 px-6">
            <h4 className="text-2xl font-semibold mb-6 text-center">Soft Skills</h4>
            <div className="flex justify-center flex-wrap gap-6">
              {/* Skill Items */}
              {["Teamwork", "Brainstorming", "Communication", "Time Management"].map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <img
                      src={`././image${index + 1}.png`}
                      alt={skill}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <p className="mt-3 text-center">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hard Skills */}
          <div className="w-full md:w-1/2 px-6">
            <h4 className="text-2xl font-semibold mb-6 text-center">Hard Skills</h4>
            <div className="flex justify-center flex-wrap gap-6">
              {/* Skill Items */}
              {["Design", "Programming", "Data Analyst"].map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <img
                      src={`././image${index + 5}.png`}
                      alt={skill}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <p className="mt-3 text-center">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
