/** @format */

import { type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ButtonProps {
  icon: LucideIcon;
  content: string;
  link?: string;
  iconColor?: "blue" | "green" | "orange" | "white";
  filled?: "blue" | "green" | "orange";
  textColor?: "blue" | "green" | "orange" | "white";
  bordered?: "blue" | "green" | "orange";
}

const Button = ({
  icon: Icon,
  content,
  link,
  filled,
  iconColor,
  textColor,
  bordered,
}: ButtonProps) => {
  const bgClasses =
    filled === "green"
      ? "bg-green-600 border-none"
      : filled === "blue"
        ? "bg-[#6a4fff] border-none"
        : filled === "orange"
          ? "bg-orange-600 border-none"
          : "bg-transparent border border-slate-300";
  const text_color =
    textColor === "green"
      ? "text-green-500 border-none"
      : textColor === "blue"
        ? "text-[#6a4fff] border-none"
        : textColor === "orange"
          ? "text-orange-300 border-none"
          : textColor === "white"
            ? "text-white-500 border-none"
            : "text-transparent border border-[#a596f9]";
  const iconBg =
    iconColor === "green"
      ? "green"
      : iconColor === "blue"
        ? "#6a4e9f"
        : iconColor === "orange"
          ? "orange"
          : iconColor === "white"
            ? "white"
            : "bg-transparent border border-[#a596f9]";
  const borderClasses =
    bordered === "green"
      ? "border border-green-600"
      : bordered === "blue"
        ? "border border-[#6a4fff]"
        : bordered === "orange"
          ? "border border-orange-500"
          : "border border-[#a596f9]";

  return (
    <Link
      to={link}
      className={`flex w-full md:w-auto items-center justify-center rounded-[6px] py-2 px-4 md:px-5 text-[15px] md:text-[16px] text-center text-white gap-2 md:gap-3 cursor-pointer no-underline mt-4 md:mt-1 ${bgClasses} ${borderClasses}`}
    >
      <>
        <p className={`flex h-4 w-4 md:h-3 md:w-3 items-center justify-center`}>
          <Icon color={`${iconBg}`} className={`h-4 w-4 md:h-3 md:w-3`} />
        </p>
        <p
          className={`bg-transparent ${text_color} text-[14px] md:text-[14px]`}
        >
          {content}
        </p>
      </>
    </Link>
  );
};
export default Button;
