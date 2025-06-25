import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";


const links = [
  { name: "Home", to: "home", type: "scroll" },
  { name: "About", to: "about", type: "scroll" },
  { name: "Skills", to: "skills", type: "scroll" }, 
  { name: "Project", to: "project", type: "scroll" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-gray-900/60 ${
          scrolled
            ? "backdrop-blur-md bg-gray-900/60 border-b border-gray-700/50 shadow-lg"
            : "bg-slate-900 bg-gray-900"
        } hidden md:block`}
      >
        <div className="flex items-center justify-between h-16 px-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="font-extrabold text-2xl tracking-tight text-[#CABA66] cursor-pointer"
            style={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => setActive("Home")}
          >
            Azida Kautsar
          </Link>
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setActive(link.name)}
                className={`relative font-semibold text-base transition-colors duration-200 cursor-pointer ${
                  active === link.name ? "text-white" : "text-[#383B43] hover:text-white/80"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {link.name}
                {active === link.name && (
                  <span className="block h-1 rounded-full bg-[#FDE68A] w-7 absolute left-1/2 -translate-x-1/2 mt-1"></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Navbar Mobile */}
      <nav
        className={`
          fixed bottom-0 left-1/2 -translate-x-1/2 w-[97vw] max-w-2xl z-50 transition-all duration-300
          rounded-t-2xl border border-[#232323] overflow-hidden
          ${scrolled
            ? "backdrop-blur-md bg-black/50 shadow-lg"
            : "backdrop-blur-md bg-black/40"}
          md:hidden
        `}
        style={{
          boxShadow: "0 2px 24px 0 rgba(11, 10, 10, 0.25)",
          borderTop: "1px solid #232323"
        }}
      >
        <div className="flex items-center justify-between h-16 px-1">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setActive(link.name)}
              className={`relative font-medium text-[15px] px-4 transition-colors duration-200 cursor-pointer
                ${active === link.name
                  ? "text-[#E5E7EB]"
                  : "text-[#b2b2b2] hover:text-white/80"
                }`}
              style={{
                fontFamily: "Poppins, sans-serif",
                letterSpacing: "0.01em",
                transition: "color .2s"
              }}
            >
              {link.name}
              {active === link.name && (
                <span
                  className="block h-[3px] rounded-full bg-[#FDE68A] w-7 mx-auto mt-1"
                  style={{
                    position: "relative"
                  }}
                ></span>
              )}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}