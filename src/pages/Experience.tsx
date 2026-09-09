import type React from "react";
import ExperienceCards, { getRoleAccent } from "../components/ExperienceCards";

const experienceData = [
  {
    role: "Personal Projects",
    jobType: "Personal",
    title: "AI-Powered Codebase Analyzer",
    content:
      "Building a platform for developers to review codebases, generate reports, and visualize insights through interactive dashboards.",
    condition: "ongoing",
  },
  {
    role: "Personal Projects",
    jobType: "Personal",
    title: "Trackiu",
    content:
      "An offline-first expense tracker application for managing income and expenses with real-time transaction updates.",
    condition: "deployed",
  },
  {
    role: "Personal Projects",
    jobType: "Personal",
    title: "Movies Archiver",
    content:
      "A movie discovery platform with search functionality and a trending algorithm similar to Netflix recommendations.",
    condition: "deployed",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0f172a] w-full pt-[2.5rem] lg:pb-[2rem] scroll-mt-24">
      <div className="page-container">
        <div className="text-center mb-[4rem]">
          <h3 className="font-bold text-[#8f82da] text-[14px] tracking-[3px]">
            CAREER JOURNEY
          </h3>
          <h2 className="text-3xl md:text-[40px] font-bold mt-2 text-white">Experience</h2>
        </div>

        <div className="experience-wrap">
          <div className="timeline">
            {experienceData.map((item, i) => (
              <div
                className="timeline-item"
                key={i}
                style={{ "--accent": getRoleAccent(item.role) } as React.CSSProperties}
              >
                <ExperienceCards {...item} />
                
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
