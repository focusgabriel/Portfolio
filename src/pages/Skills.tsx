/** @format */

import { skills } from "../constants";
import SkillsCard from "../components/SkillsCard";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0a0f1e] w-full pt-[3rem] scroll-mt-24">
      <div className="mb-[5rem] scroll-mt-20">
        <h1 className="font-bold lg:text-[16px] pt-[5rem] text-[14px] tracking-[3px] text-purple-500 p-6 text-center uppercase ">
          Technical Expertise
        </h1>
        <h4 className="text-[40px] font-bold text-center mb-[2rem]">Skills</h4>
        <p className="text-center text-[16px] text-slate-400 mb-[2.5rem]">
          A Full Stack tool-kit for enterprise-grade-application,<br></br>{" "}
          business web applications from frontend UI Design to scalable backend
          systems
        </p>

        {/* <h2 className="text-center text-2xl mt-10 mb-10">Tech/Skill Stack</h2> */}

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-4">
          {skills.map(item => (
            <li key={item.name} className="text-[13px]">
              <SkillsCard
                key={item.name}
                icon={item.icon}
                alt={item.alt}
                content={item.name}
              />
            </li>
          ))}
        </div>

        <div className="mt-[6rem] pb-[5rem] w-[90%] mx-auto *:bg-[#0f172a] p-3 flex flex-wrap rounded-2xl justify-center">
          <div className="flex-1 min-w-[140px] max-w-[350px] h-[80px] border border-[#042c4f] text-center rounded-tl-2xl rounded-bl-2xl">
            <h4 className=" text-[#818cf8] text-3xl p-2 leading-[-1] font-bold">
              8+
            </h4>
            <h2 className="text-[12px] mt-[-0.5rem]">Technologies</h2>
          </div>
          <div className="flex-1 min-w-[140px] max-w-[350px] h-[80px] border border-[#042c4f] text-center">
            <h4 className=" text-[#818cf8] text-3xl p-2 leading-[-1] font-bold">
              0-1
            </h4>
            <h2 className="text-[12px] mt-[-0.5rem]">Years of Experience</h2>
          </div>
          <div className="flex-1 min-w-[140px] max-w-[350px] h-[80px] border border-[#042c4f] text-center ">
            <h4 className=" text-[#818cf8] text-3xl p-2 leading-[-1] font-bold">
              3
            </h4>
            <h2 className="text-[12px] mt-[-0.5rem]">Projects Shipped</h2>
          </div>
          <div className="flex-1 min-w-[140px] max-w-[350px] h-[80px] border border-[#042c4f] text-center rounded-tr-2xl rounded-br-2xl">
            <h4 className=" text-[#818cf8] text-3xl p-2 leading-[-1] font-bold">
              Full
            </h4>
            <h2 className="text-[12px] mt-[-0.5rem]">Stack Depth</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
