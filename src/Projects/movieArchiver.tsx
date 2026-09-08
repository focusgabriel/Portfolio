/** @format */

import { CirclePlay, SquarePen } from "lucide-react";
import { movie } from "../constants";
import Button from "../components/Button";
import LabelCards from "../components/LabelCards";

interface projectsProps {
  mainTitle: string;
  label: string;
  title: string;
  content: string;
}

const ProjectsCard2 = ({ mainTitle, label, title, content }: projectsProps) => {
  return (
    <div className="w-full md:w-[350px] min-h-[420px] border rounded-2xl relative border-slate-400 hover:border-orange-500 hover:not-first:shadow-[0_0_12px_rgba(251,146,60,0.35)] flex flex-col">
      <div className="w-full h-[30vh] bg-gradient-to-b from-[#0f172a] to-black noBorder flex justify-center items-center rounded-2xl shrink-0">
        <h2 className="text-center text-[#FF8C00] text-[18px]">{mainTitle}</h2>
      </div>

      <div className="px-[18px] py-[12px] flex flex-col flex-1">
        <p className="border border-[#FF8C00] text-orange-300 bg-orange-500/10 text-center uppercase p-[2px] w-[100px] text-[12px] rounded-[5px] my-[10px]">{label}</p>
        <h3 className="font-medium capitalize my-[10px] text-slate-200">{title}</h3>
        <p className="text-slate-400 text-[14px] leading-[150%] my-[10px]">{content}</p>

        <div className="labelCards">
          <ul className="flex flex-wrap items-center gap-[10px]">
            {movie.map(item => (
              <li key={item.techName} className="inline-block">
                <LabelCards key={item.techName} content={item.techName} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-around items-center w-[90%] gap-[10px] mt-auto pt-4">
          <Button
            icon={SquarePen}
            iconColor="orange"
            content="GitHub"
            link="https://github.com/focusgabriel/Expense_Tracker.git"
            bordered="orange"
            textColor="orange"

          />
          <Button
            icon={CirclePlay}
            content="Live Demo"
            link="https://trackiu.vercel.app"
            filled="orange"
            iconColor="white"
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard2;
