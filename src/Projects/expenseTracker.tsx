/** @format */

import { trackiu } from "../constants";
import Button from "../components/Button";
import LabelCards from "../components/LabelCards";
import { CirclePlay, SquarePen } from "lucide-react";

interface projectsProps {
  mainTitle: string;
  label: string;
  title: string;
  content: string;
}

const ProjectsCard = ({ mainTitle, label, title, content }: projectsProps) => {
  return (
    <div className="w-full md:w-80 lg:w-[350px] min-h-[420px] rounded-2xl border relative border-slate-400 hover:border-[#a596f9] flex flex-col">
      <div className="w-full h-[26vh] md:h-[30vh] bg-gradient-to-b from-[#0f172a] to-black noBorder flex justify-center items-center rounded-2xl shrink-0">
        <h2 className="text-center text-blue-500 text-[18px]">{mainTitle}</h2>
      </div>

      <div className="px-[14px] flex flex-col flex-1">
        <p className="border border-[#a596f9] text-center uppercase p-[2px] w-[100px] text-[12px] rounded-[5px] my-[10px] text-[#6a4fff]">
          {label}
        </p>
        <h3 className="font-medium capitalize my-[10px] text-slate-200">
          {title}
        </h3>
        <p className="text-slate-400 text-[14px] leading-[150%] my-[10px]">
          {content}
        </p>

        <div className="labelCards mt-2">
          <ul className="flex flex-wrap items-center gap-2">
            {trackiu.map(item => (
              <li key={item.techName} className="inline-block">
                <LabelCards key={item.techName} content={item.techName} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-auto pt-4 pb-3 w-full">
          <Button
            icon={SquarePen}
            iconColor="blue"
            content="GitHub"
            link="https://github.com/focusgabriel/Expense_Tracker.git"
            bordered="blue"
            textColor="blue"
          />
          <Button
            icon={CirclePlay}
            content="Live Demo"
            link="https://trackiu.vercel.app"
            filled="blue"
            iconColor="white"
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
