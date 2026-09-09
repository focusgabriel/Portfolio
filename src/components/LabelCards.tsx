/** @format */

interface labelProps {
  content: string | string[];
}

const LabelCards = ({ content }: labelProps) => {
  return (
    <div className="flex items-center justify-center border border-[#c5d3e7] my-1 text-slate-400 rounded-md px-3 py-1 text-center text-[13px]">
      <p className="truncate">{content}</p>
    </div>
  );
};

export default LabelCards;
