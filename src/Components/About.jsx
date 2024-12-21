import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-[#FEFDFD] pt-16 pb-13">
      {/* About Me Section */}
      <div className="bg-[#D9D9D9] py-20 mt-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            I am a 7th-semester Informatics student who is enthusiastic about technology and design.
            With creativity and logical analysis, I am capable of designing and building websites.
            I believe these skills position me as a Junior level of UI/UX designer and Web Developer.
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
                      src={`../../public/image${index + 1}.png`}
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
                      src={`../../public/image${index + 5}.png`}
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
