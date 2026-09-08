/** @format */

import { useEffect, useState } from "react";
import { ArrowRight, GitFork, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const roles = [
  "Software Developer",
  "Fullstack Developer",
  "Mern Stack Developer",
  "Backend Engineer",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 120);
    } else if (!deleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 60);
    } else {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="bg-[#0a0f1e] w-full min-h-screen scroll-mt-24"
    >
      <div className="page-container flex flex-col md:flex-row items-center md:items-start justify-between mt-8 md:mt-[2rem] gap-8">
        <div className="w-full md:w-7/12 py-0 px-2">
          <p className="mb-[1rem] mt-[2rem] bg-transparent border text-[#6a4fff] border-[#042c4f] w-[200px] text-center rounded-1.25 px-1.5 py-1.5 text-[13px] flex items-center justify-center gap-[8px] rounded-2xl">
            <span className="exp-status-dot " />
            Available for opportunities
          </p>

          <h2 className="text-[#6a4fff] text-[32px] md:text-[60px] mb-2 md:mb-[10px] font-semibold">
            <span className="text-white">Charles Chinedu</span> Uchendu
          </h2>
          <h4 className="typing-role text-[20px] md:text-[26px] text-slate-400 my-2 md:my-[1rem]">
            {text}
            <span className="typing-cursor">|</span>
          </h4>
          <p className="text-slate-400 text-[16px] font-normal leading-[150%] my-[5px]">
            Bringing Ideas to life, with{" "}
            <span className="text-white">Nodejs, Expressjs, React</span> and
            <span className="text-white"> Typescript</span>. <br></br> Building
            Scalable and Maintainable Application. focused on performance,{" "}
            <br></br> clean UI, and real Business impact.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-[16px] mt-4 sm:mt-[20px] font-semibold">
            <a href="#projects" className="no-underline w-full sm:w-auto">
              <button className="bg-[#6a4fff] rounded-1.25 border-none text-white w-full sm:w-[170px] h-[40px] text-[16px] cursor-pointer inline rounded-lg p-2">
                View Projects
                <ArrowRight size={16} className="inline mx-1.5" />
              </button>
            </a>
            <a href="#contact" className="no-underline w-full sm:w-auto">
              <button className="bg-transparent border border-[#6a4fff] rounded-1.25 text-white w-full sm:w-[170px] h-[40px] text-[16px] cursor-pointer inline rounded-lg p-2 hover:bg-[#6a4fff] hover:border-none">
                Contact Me
                <MessageCircle size={16} className="inline mx-1.5" />
              </button>
            </a>
          </div>

          <div className="flex mt-[2rem] mb-[1rem] align-middle justify-start">
            <p className="text-[13px] text-slate-400 font-semibold">
              Find me on
            </p>
            <p className="ml-[10px] pl-[15px]">
              <Link to={`https://github.com/${import.meta.env.VITE_GITHUB}`}>
                <GitFork size={18} />
              </Link>
            </p>
            <p className="ml-[10px] pl-[15px]">
              <Link to={`https://wa.me/${import.meta.env.VITE_WHATSAPP}`}>
                <MessageCircle size={18} />
              </Link>
            </p>
          </div>
        </div>

        <div className="hidden md:flex md:w-5/12 justify-center md:justify-end">
          <div className="hero-orb relative mx-auto h-40 w-40 md:h-52 md:w-[200px] rounded-full">
            <div className="hero-core absolute top-3 left-3 md:top-[10px] md:left-[10px] h-[120px] w-[120px] md:h-[180px] md:w-[180px] rounded-full" />
            <p className="hero-ccu absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-[24px] md:text-[34px] font-bold tracking-[2px] text-center">
              CCU
            </p>

            <p className="tech-badge hidden md:block absolute top-[10%] left-[-45%] animate-react-bounce">
              <span className="status-dot" /> React
            </p>
            <p className="tech-badge hidden md:block absolute top-[10%] right-[-45%] animate-ts-bounce">
              <span className="status-dot" /> Typescript
            </p>
            <p className="tech-badge hidden md:block absolute bottom-[15%] left-[-40%] animate-express-bounce">
              <span className="status-dot" /> Express
            </p>
            <p className="tech-badge hidden md:block absolute bottom-[-35%] right-[-45%] animate-mongo-bounce">
              <span className="status-dot" /> MongoDB
            </p>
            <p className="tech-badge hidden md:block absolute top-[-15%] left-[10%] animate-tw-bounce">
              <span className="status-dot" /> Tailwind
            </p>
            <p className="tech-badge hidden md:block absolute bottom-[-15%] left-[-5%] animate-node-bounce">
              <span className="status-dot" /> Nodejs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
