import Skill from "@/app/right-side/skill/Skill";

const Card = ({title, description, dateRange, link, skills}) => {
    return(
        <a target="_blank" href={link} className={'flex flex-row w-full max-w-[700px] hover:bg-[#162443] rounded-md cursor-pointer pl-5 pt-7 pr-5 pb-7 '}>
            <div className={'text-xs min-w-[100px]'}>{dateRange}</div>
            <div className={'flex flex-col'}>
                <div className={"ml-10 text-xl"}>{title}</div>
                <div className={"ml-10 text-md break-all"}>{description}</div>
                <div className={"flex flex-row ml-10"}>
                    {skills.map(s => <div className={"mr-1"}><Skill text={s}/></div>)}
                </div>
            </div>
        </a>
    )
}

export default Card;