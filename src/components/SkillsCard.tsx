/** @format */

interface skillProps {
  icon: string;
  alt: string;
  content: string;
}

const SkillsCard = ({ icon, alt, content }: skillProps) => {
  return (
    <div className="w-24 sm:w-28 md:w-36 lg:w-24 h-30 rounded-xl border-2 border-[#042c4f] hover:shadow-lg hover:scale-105 transition-transform duration-200 flex flex-col items-center justify-center p-2 bg-transparent">
      <img
        src={icon}
        alt={alt}
        className="w-8 h-8 sm:w-10 sm:h-10 block mb-3"
      />
      <p className="text-center text-sm text-slate-200 w-full">{content}</p>
    </div>
  );
};

export default SkillsCard;
