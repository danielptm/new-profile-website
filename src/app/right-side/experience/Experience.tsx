import Card from "@/app/right-side/card/Card";

const Experience = () => {
    const d = {
        experience: [

        ]
    }
    return (
        <Card
            title={"title"}
            description={"In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API."}
            dateRange={"2024 - present"}
            link={"https://google.com"}
            skills={["Java", "Javascript"]}

        />
    )
}

export default Experience;