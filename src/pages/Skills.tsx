/** @format */

import { skills } from "../constants";
import SkillsCard from "../components/SkillsCard";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0a0f1e] w-full pt-[3rem] scroll-mt-24">
      <div className="mb-[5rem] scroll-mt-20">
        <h1 className="font-bold text-sm md:text-[16px] pt-20 md:pt-[5rem] mb-[1.5rem] tracking-[3px] text-purple-500 px-4 text-center uppercase">
          Technical Expertise
        </h1>
        <h4 className="text-2xl md:text-[40px] font-bold text-center mb-[2rem]">
          Skills
        </h4>
        <p className="text-center text-base md:text-[16px] text-slate-400 mb-[2.5rem]">
          A Full Stack tool-kit for enterprise-grade-application,<br></br>{" "}
          business web applications from frontend UI Design to scalable backend
          systems
        </p>

        {/* <h2 className="text-center text-2xl mt-10 mb-10">Tech/Skill Stack</h2> */}

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-3">
          {skills.map(item => (
            <div key={item.name} className="text-[13px]">
              <SkillsCard icon={item.icon} alt={item.alt} content={item.name} />
            </div>
          ))}
        </div>

        <div className="mt-16 pb-20 w-full max-w-[85%] mx-auto p-3 flex flex-wrap rounded-2xl justify-center">
          <div className="flex-1 min-w-[120px] max-w-[300px] h-[88px] border border-[#042c4f] text-center rounded-l-lg flex flex-col items-center justify-center">
            <h4 className="text-[#818cf8] text-2xl md:text-4xl font-bold">
              8+
            </h4>
            <h2 className="text-[12px] mt-1">Technologies</h2>
          </div>
          <div className="flex-1 min-w-[120px] max-w-[300px] h-[88px] border border-[#042c4f] text-center flex flex-col items-center justify-center">
            <h4 className="text-[#818cf8] text-2xl md:text-4xl font-bold">
              0-1
            </h4>
            <h2 className="text-[12px] mt-1">Years of Experience</h2>
          </div>
          <div className="flex-1 min-w-[120px] max-w-[300px] h-[88px] border border-[#042c4f] text-center flex flex-col items-center justify-center">
            <h4 className="text-[#818cf8] text-2xl md:text-4xl font-bold">3</h4>
            <h2 className="text-[12px] mt-1">Projects Experience</h2>
          </div>
          <div className="flex-1 min-w-[120px] max-w-[300px] h-[88px] border border-[#042c4f] text-center rounded-r-lg flex flex-col items-center justify-center">
            <h4 className="text-[#818cf8] text-2xl md:text-4xl font-bold">
              Full
            </h4>
            <h2 className="text-[12px] mt-1">Stack Depth</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
