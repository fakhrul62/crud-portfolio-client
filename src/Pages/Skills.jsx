import React from "react";

const Skills = () => {
  return (
    <div
      className="bg-[url(https://i.ibb.co.com/yVXWVTY/pexels-rudy-kirchner-278171-1750823.jpg)]  bg-cover bg-no-repeat bg-center mt-3 rounded-2xl"
      style={{ minHeight: "calc(100vh - 102px)" }}
    >
      <div
        className="py-16 rounded-2xl  bg-[#111827c0]"
        style={{ minHeight: "calc(100vh - 102px)" }}
      >
        <div className="w-10/12 mx-auto">
          <div className="mb-10">
            <h4 className="text-accent uppercase font-heading text-xs">
              My Skills
            </h4>
            <h2 className="font-heading lg:text-5xl md:text-6xl text-3xl font-semibold mt-6">
              Always Evolving, Always Learning
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
            <div className="skill-card">
              <h2 className="text-xl text-center font-heading font-semibold mb-2">
                Frontend Development
              </h2>
              <p className="text-center font-body">
                React, HTML, CSS, JavaScript, Tailwind CSS
              </p>
            </div>
            <div className="skill-card">
              <h2 className="text-xl text-center font-heading font-semibold mb-2">
                Backend Development
              </h2>
              <p className="text-center font-body">Node.js, Express, Firebase, MongoDB</p>
            </div>
            <div className="skill-card">
              <h2 className="text-xl text-center font-heading font-semibold mb-2">Version Control</h2>
              <p className="text-center font-body">Git, GitHub, GitLab</p>
            </div>
            <div className="skill-card">
              <h2 className="text-xl text-center font-heading font-semibold mb-2">Web Design</h2>
              <p className="text-center font-body">UI/UX Design, Figma, Adobe XD</p>
            </div>
            <div className="skill-card">
              <h2 className="text-xl text-center font-heading font-semibold mb-2">
                Database Management
              </h2>
              <p className="text-center font-body">SQL, NoSQL, Firebase Firestore</p>
            </div>
            <div className="skill-card">
              <h2 className="text-xl text-center font-heading font-semibold mb-2">Cloud & Hosting</h2>
              <p className="text-center font-body">Firebase Hosting, Netlify, Vercel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
