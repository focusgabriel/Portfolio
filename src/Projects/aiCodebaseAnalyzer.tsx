/** @format */

import { Clock, SquarePen } from "lucide-react";
import { codeRadar } from "../constants";
import Button from "../components/Button";
import LabelCards from "../components/LabelCards";

interface projectsProps {
  mainTitle: string;
  label: string;
  title: string;
  content: string;
}

const ProjectsCard1 = ({ mainTitle, label, title, content }: projectsProps) => {
  return (
    <div className="w-full md:w-80 lg:w-[350px] min-h-[420px] border relative rounded-2xl border-slate-400 hover:border-green-500 hover:shadow-[0_0_12px_rgba(34,197,94,0.12)] flex flex-col">
      <div className="w-full h-[26vh] md:h-[30vh] bg-gradient-to-b from-[#0f172a] to-black noBorder flex justify-center items-center rounded-2xl shrink-0">
        <h2 className="text-center text-green-400 text-[18px]">{mainTitle}</h2>
      </div>

      <div className="px-[18px] py-[12px] flex flex-col flex-1">
        <p className="border border-green-500 text-green-300 bg-green-500/10 text-center uppercase p-[2px] w-[100px] text-[12px] rounded-[5px] my-[10px]">
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
            {codeRadar.map(item => (
              <li key={item.techName} className="inline-block">
                <LabelCards key={item.techName} content={item.techName} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-auto pt-4 w-full ">
          <Button
            icon={SquarePen}
            iconColor="green"
            content="GitHub"
            link="https://github.com/focusgabriel/AI_CODEBASE_ANALYZER.git"
            bordered="green"
            textColor="green"
          />
          <Button 
            icon={Clock}
            iconColor="white"
            content="coming soon"
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard1;
