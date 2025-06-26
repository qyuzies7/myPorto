import { useState, useEffect } from "react";
import Particles from "./Particles";
import Navbar from "../components/Navbar";
import { TypeAnimation } from "react-type-animation";
import { Linkedin, Github, Mail } from "lucide-react"; // Pastikan Mail juga diimpor
import ProfileCard from "./ProfileCard";
import Aku2Svg from "../assets/aku2.svg";
import { Skills } from "./Skills";
import { Project } from "./Project";

export const Home = () => {
  const [cardSize, setCardSize] = useState("150px");

  useEffect(() => {
    const handleResize = () => setCardSize(window.innerWidth >= 768 ? "300px" : "150px");
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 relative">
      <style>
        {`
          .description-text {
            font-family: 'Poppins', sans-serif;
          }
          .about-content {
            margin-top: 1rem; /* Shift title and description downward to align with ProfileCard */
          }
          .about-title {
            font-size: 2.5rem; /* Larger font size for About Me */
            background: linear-gradient(to right, #e5e7eb, #facc15); /* Gradient from gray-200 to yellow-400 */
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          @media (min-width: 768px) {
            .about-title {
              font-size: 3rem; /* Even larger font size for medium and larger screens */
            }
          }
        `}
      </style>

      {/* Background */}
      <div id="home" className="relative w-full min-h-[600px] md:min-h-[80vh]">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={800}
            particleSpread={15}
            speed={0.5}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={true}
          />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-30 flex items-center justify-start md:justify-end pr-9 md:pr-20 lg:pr-10 min-h-full pt-[150px]">
          <div className="text-white text-left md:text-right p-9 max-w-lg md:max-w-xl ml-[10px] md:ml-0">
            <p className="text-xl md:text-2xl font-medium mb-2 description-text">Hi! I'm</p>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Azida Kautsar</h1>
            <div className="text-3xl md:text-4xl font-bold mb-6">
              <TypeAnimation
                sequence={[
                  'Informatics Student', 2500,
                  'Full-stack Engineering', 2500,
                  'UI/UX Designer', 2500,
                ]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
                className="bg-gradient-to-r from-gray-200 to-yellow-400 bg-clip-text text-transparent"
              />
            </div>

            <div className="flex justify-start md:justify-end gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/azidakautsar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={25} />
              </a>
              <a
                href="https://github.com/qyuzies7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={25} />
              </a>
              <a
                href="mailto:azidamilla@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={25} />
              </a>
            </div>
          </div>
        </main>
      </div>

      {/* About */}
      <section id="about" className="bg-slate-900 text-white py-20 px-4 md:px-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-8">
          <div className="flex-2 w-full md:w-auto md:text-left md:ml-4 about-content flex flex-col items-center md:items-start">
            <h2 className="about-title font-extrabold mb-2 text-center md:text-left">ABOUT ME</h2>
            <div className="w-full flex justify-center md:hidden my-6">
              <ProfileCard
                name="Azida Kautsar"
                title="Informatics Student"
                handle="azidakautsar"
                status="Online"
                contactText="Contact Me"
                avatarUrl={Aku2Svg}
                showUserInfo={false}
                enableTilt={true}
                onContactClick={() => console.log('Contact clicked')}
                className={`w-[${cardSize}]`}
              />
            </div>
            {/* Deskripsi */}
            <p className="text-lg md:text-xl leading-relaxed mb-4 description-text">
              Hi! I'm Azida Kautsar Milla, an Informatics Engineering student at the Electronic Engineering Polytechnic Institute of Surabaya. I have interests in UI/UX design, data analysis, and software development.
            </p>
            <p className="text-lg md:text-xl leading-relaxed description-text">
              My goal is to develop my knowledge deeper in the field of informatics and want to make creative designs, I really enjoy my work. If you are interested in me, please contact me at the contact listed.
            </p>
          </div>
          <div className="hidden md:flex justify-center md:justify-end mb-8 md:mb-0">
            <ProfileCard
              name="Azida Kautsar"
              title="Informatics Student"
              handle="azidakautsar"
              status="Online"
              contactText="Contact Me"
              avatarUrl={Aku2Svg}
              showUserInfo={false}
              enableTilt={true}
              onContactClick={() => console.log('Contact clicked')}
              className={`w-[${cardSize}]`}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Project Section */}
      <Project />

     {/* Footer Section */}
     <footer className="bg-slate-900 py-10 pb-20"> {/* Tambahin pb-20 di sini */}
        <div className="flex justify-center gap-6">
            <a
             href="www.linkedin.com/in/azidakautsar"
             target="_blank"
             rel="noopener noreferrer"
             className="text-gray-400 hover:text-white transition-colors"
             title="LinkedIn Profile"
            >
              <Linkedin size={30} />
             </a>   
             <a
             href="https://github.com/qyuzies7"
             target="_blank"
             rel="noopener noreferrer"
             className="text-gray-400 hover:text-white transition-colors"
             title="GitHub Profile"
            >
             <Github size={30} />
         </a>
         <a
         href="mailto:azidamilla@gmail.com"
         className="text-gray-400 hover:text-white transition-colors"
         title="Send me an Email"
         >
             <Mail size={30} />
         </a>
        </div>
     </footer>
    </div>
  );
};