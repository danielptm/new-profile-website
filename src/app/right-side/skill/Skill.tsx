interface SkillPropTypes {
    text: string
}
const Skill = ({text}: SkillPropTypes) => {
    return(
        <div className={"bg-[#588C87] text-color:white pl-4 pr-4 pt-1 pb-1 mt-[10px] rounded-[25]"}>{text}</div>
    )
}

export default Skill;