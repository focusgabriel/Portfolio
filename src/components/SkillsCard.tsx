interface skillProps{
  icon: string,
  alt: string,
  content: string
}

const SkillsCard = ({icon, alt, content}: skillProps) => {
  return (
    <div className="w-[90px] h-[120px] rounded-xl border-2 border-[#042c4f] hover:shadow-[0_0_20px_#042c4f] hover:scale-90 relative lg:hover:scale-125 lg:transition">
      <img src={icon} alt={alt} width={30} height={30} className="mx-auto my-4 block" />
      <p className="absolute bottom-2 w-[90%] mx-auto text-center">{content}</p>
    </div>
  )
}

export default SkillsCard
