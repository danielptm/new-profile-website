import Card from "@/app/right-side/card/Card";
import {d} from '../../../../public/data'

const Education = () => {
    return (
        d.education.map((e, i) => {
            return (
                <Card
                    key={i}
                    title={e.title}
                    description={e.description}
                    dateRange={e.dateRange}
                    link={e.link}
                    skills={e.skills}

                />
            )
        })
    )
}

export default Education;