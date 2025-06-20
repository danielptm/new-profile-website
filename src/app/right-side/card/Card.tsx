import Skill from "@/app/right-side/skill/Skill";

interface CardProps {
    title: string,
    description: string,
    dateRange: string,
    link: string,
    skills: string[]
}

const Card = ({title, description, dateRange, link, skills}: CardProps) => {
    return(
        <a target="_blank" href={link} className={'flex flex-row w-full max-w-[700px] hover:bg-[#162443] rounded-md cursor-pointer pl-5 pt-7 pr-5 pb-7 '}>
            <div className={'text-s min-w-[100px]'}>{dateRange}</div>
            <div className={'flex flex-col'}>
                <div className={"ml-10 text-2xl"}>{title}</div>
                <div className={"ml-10 text-md break-word"}>{description}</div>
                <div className={"flex flex-row ml-10, flex-wrap pl-8"}>
                    {skills.map((s, i) => <div key={i} className={"ml-1"}><Skill text={s}/></div>)}
                </div>
            </div>
        </a>
    )
}

export default Card;