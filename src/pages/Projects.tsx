/** @format */

import { Link } from "react-router-dom";
import ProjectsCard1 from "../Projects/aiCodebaseAnalyzer";
import ProjectsCard from "../Projects/expenseTracker";
import ProjectsCard2 from "../Projects/movieArchiver";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0f172a] w-full scroll-mt-24">
      <div className="page-container">
        <div className="mt-[5rem] text-center">
          <p className=" text-[#a596f9] text-[18px] font-medium mb-[1.2rem]">
            Featured Works
          </p>
          <h3 className=" text-[45px] font-bold">Projects</h3>
          <p className="mb-[5rem] text-slate-400">
            These are mostly my personal projects i took up to myself to solve{" "}
            <br></br> real world problems and also to improve my skills as a
            software developer{" "}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 md:gap-[2rem] mb-20">
          <ProjectsCard
            mainTitle="Expense Tracker"
            label="Trackiu"
            title="Expense Tracker Project"
            content="an expense tracker, use for tracking expenses from income with real time transactions update and flexible upload. offline first application"
          />

          <ProjectsCard1
            mainTitle="AI-Powered Codebase Analyzer"
            label="CodeRadar"
            title="AI-Powered Codebase Analyzer Project"
            content="an ai codebase analyzer use for analyzing codebase, built for developer, helpful populated dahsboard, metrics, analytics and overview dashboards. exportable pdf also available."
          />

          <ProjectsCard2
            mainTitle="Movies Archiver"
            label="movieShow"
            title="Movies Archiver Project"
            content="find any movie with one search, and also get to know the trending movies base on our database data for frequent searched movie, similar to netflix trending movie algorithm."
          />
        </div>
        <div className="flex justify-center items-center">
          <Link
            to="https://github.com/focusgabriel"
            className="text-[#6a4fff] text-center inline font-semibold text-[16px]"
          >
            <p className="inline hover:underline mb-[5rem]">
              View all repositories on GitHub
            </p>{" "}
            <ArrowRight size={16} color="royalBlue" className="inline" />{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
