/** @format */

import { navItems } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full topBorder border-t border-slate-700 mt-12">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-[12px] text-slate-600">
            &copy; Charles Chinedu Uchendu. Built with React + Vite + TypeScript
          </p>
        </div>

        <div>
          <ul className="flex flex-wrap items-center justify-center md:justify-end gap-3">
            {navItems.map(({ title, href }) => (
              <li key={title} className="">
                <a
                  href={href}
                  className="no-underline text-[12px] text-slate-600 px-2"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
