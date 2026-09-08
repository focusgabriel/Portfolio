interface labelProps {
  content: string | string[];
}

const LabelCards = ({ content }: labelProps) => {
  return (
    <div className="flex justify-between border border-[#c5d3e7] my-[4px] text-slate-400 rounded-[5px] px-[6px] pb-[2px] text-center text-[14px]">
      <p>{content}</p>
    </div>
  )
}

export default LabelCards
