import React from 'react';
import ShinyText from "../components/ShinyText";
import { motion } from "framer-motion";
import { Github, Link as LinkIcon, Figma } from "lucide-react";
import GradientText from "../components/GradientText";

const projects = [
  {
    title: "Hotel Reservation",
    description: "A website that is used to make it easier for visitors to make orders that has an interactive and responsive appearance",
    image: "/assets/project/hotel.png",
    githubLink: "https://github.com/qyuzies7/reservasi-hotel.git",
    tags: ["PHP", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "IoT GPS Tracker",
    description: "A website connected to an IoT GPS in the form of a key chain, to make it easier to track people and stuff.",
    image: "/assets/project/gps.png",
    githubLink: "https://github.com/qyuzies7/simple-gps.git",
    tags: ["PHP", "CSS", "JavaScript"],
  },
  {
    title: "Boarding house",
    description: "Boarding house search website that will make it easier for students and pupils in the Lamongan area",
    image: "/assets/project/kos.png",
    githubLink: "https://github.com/qyuzies7/pencarian-kos.git",
    tags: ["Java", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "College Student Financial manager",
    description: "Financial management application aimed at students to help them budget and plan their finances.",
    image: "/assets/project/celengin.png",
    githubLink: "https://github.com/qyuzies7/celengin-app.gits",
    tags: ["Dart", "PHP", "Laravel", "Flutter"],
  },
  {
    title: "Schedule Reminder",
    description: "Design that will be implemented into an application to help students in their studies. an application that will serve as a reminder of students' schedules and assignments.",
    image: "/assets/project/skydul.png",
    figmaLink: "https://www.figma.com/design/qbuAg0kgNaAtN83LQIm2uk/skydul?node-id=0-1&t=8G26CMKaVNF8G5eE-1",
    tags: ["Figma"],
  },
  {
    title: "Agricultural Chatbot",
    description: "Chatbot that will help farmers solve agricultural problems, check the weather and ask questions about agriculture.",
    image: "/assets/project/ai.png",
    githubLink: "https://github.com/Mrizal16/ai-chatbot-pertanian.git",
    tags: ["Python", "HTML", "CSS", "JavaScript"],
  },
];

export const Project = () => {
  return (
    <section id="project" className="bg-slate-900 text-white py-20 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="block h-1 w-10" style={{ backgroundColor: '#CABA66' }}></span>
          <ShinyText text="Projects" disabled={false} speed={3} className='text-4xl md:text-5xl font-extrabold text-white' />
        </div>

        <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={5}
        showBorder={false}
        className="text-1xl md:text-1xl font-medium mb-9 description-text text-left"
        >
        Explore project experience that I have worked on before.
        </GradientText>


        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              // Background sama seperti di Skills.jsx: bg-gray-800 dengan rounded-lg dan shadow-lg
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden relative flex flex-col
                         hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer" // Efek hover dari Skills
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-4 flex flex-col h-full">
                {/* Box foto diperpanjang sedikit, h-56 atau h-60 bisa dicoba */}
                <div className="rounded-lg overflow-hidden mb-4 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover object-center rounded-lg" // h-56 untuk memperpanjang
                  />
                </div>
                <div className="px-2 flex-grow">
                  <h3 className="text-white text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end gap-3 pt-2 px-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                      title="View on GitHub"
                    >
                      <Github size={24} />
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                      title="View Live Demo"
                    >
                      <LinkIcon size={24} />
                    </a>
                  )}

                  {project.figmaLink && (
                    <a
                      href={project.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                      title="View on Figma"
                    >
                      <Figma size={24} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};