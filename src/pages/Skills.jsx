import React, { useState } from "react";
import ShinyText from "../components/ShinyText";

export const Skills = () => {
  const [activeTab, setActiveTab] = useState("tech");

  const techSkills = [
    { name: "HTML", icon: "/assets/skills/html.svg", level: "Beginner" },
    { name: "CSS", icon: "/assets/skills/css.svg", level: "Beginner" },
    { name: "JavaScript", icon: "/assets/skills/javascript.svg", level: "Beginner" },
    { name: "PHP", icon: "/assets/skills/php.svg", level: "Beginner" },
    { name: "Java", icon: "/assets/skills/java.svg", level: "Beginner" },
    { name: "Python", icon: "/assets/skills/python.svg", level: "Beginner" },
    { name: "React.js", icon: "/assets/skills/reactjs.svg", level: "Beginner" },
    { name: "Dart", icon: "/assets/skills/dart.svg", level: "Beginner" },
    { name: "Laravel", icon: "/assets/skills/laravel.svg", level: "Beginner" },
    { name: "Flutter", icon: "/assets/skills/flutter.svg", level: "Beginner" },
    { name: "Node.js", icon: "/assets/skills/nodejs.svg", level: "Beginner" },
    { name: "Figma", icon: "/assets/skills/figma.svg", level: "Beginner" },
  ];

  const toolSkills = [
    { name: "Linux", icon: "/assets/skills/linux.svg" },
    { name: "AWS", icon: "/assets/skills/aws.svg" },
    { name: "NPM", icon: "/assets/skills/npm.svg" },
    { name: "Git", icon: "/assets/skills/git.svg" },
    { name: "GitHub", icon: "/assets/skills/github.svg" },
    { name: "MySQL", icon: "/assets/skills/mysql.svg" },
    { name: "Oracle", icon: "/assets/skills/oracle.svg" },
    { name: "MongoDB", icon: "/assets/skills/mongo.svg" },
  ];

  const getActiveSkills = () => {
    return activeTab === "tech" ? techSkills : toolSkills;
  };

  return (
    <section id="skills" className="bg-slate-900 text-white py-20 px-4 md:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <span className="block h-1 w-10" style={{ backgroundColor: '#CABA66' }}></span>
          <ShinyText text="Skills" disabled={false} speed={3} className='text-4xl md:text-5xl font-extrabold text-white' /> {/* Tambahkan kelas dari h2 ke ShinyText */}
        </div>

        <div className="flex space-x-4 mb-8">
          <button
            className={`py-2 px-6 rounded-lg font-semibold transition-colors duration-200
              ${activeTab === "tech"
                ? "text-gray-900 shadow-md"
                : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            style={{ backgroundColor: activeTab === 'tech' ? '#CABA66' : '' }} 
            onClick={() => setActiveTab("tech")}
          >
            Programming
          </button>
          <button
            className={`py-2 px-6 rounded-lg font-semibold transition-colors duration-200
              ${activeTab === "tools"
                ? "text-gray-900 shadow-md"
                : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            style={{ backgroundColor: activeTab === 'tools' ? '#CABA66' : '' }} 
            onClick={() => setActiveTab("tools")}
          >
            Tools
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {getActiveSkills().map((skill, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg overflow-hidden
                         hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain mb-4" />
              <p className="text-lg font-semibold text-gray-200 text-center">{skill.name}</p>

              {skill.level && (
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain mb-2" />
                  <p className="text-white text-base font-semibold">{skill.name}</p>
                  <p className="text-yellow-400 text-sm" style={{ color: '#CABA66' }}>{skill.level}</p> 
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};