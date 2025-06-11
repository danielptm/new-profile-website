import Card from "@/app/right-side/card/Card";

const Experience = () => {
    const d = {
        experience: [
            {
                title: "CVS",
                description: "I'm a full-stack software engineer at CVS Health, focused on building fraud detection tools in the health insurance space. I work closely with data scientists to turn complex models into scalable applications using React, Java, BigQuery, and GCP. My work bridges data science and engineering, delivering secure, production-ready solutions that help protect millions of members from fraud.",
                dateRange: "February 2025 - present",
                link: "https://www.cvs.com/",
                skills: ["Java", "Javascript", "React", "GCP", "Big Query", "Tailwind css", "Nextjs"]
            },
            {
                title: "The Home Depot",
                description: "At The Home Depot, I led the full-stack rebuild and cloud migration of a legacy associate education platform used by over 500,000 employees. I modernized the app with Angular, Java, and Azure, significantly improving performance and usability. I also implemented CI/CD pipelines with GitHub Actions to streamline deployments. This project enhanced access to training at scale and strengthened internal operations across the enterprise.",
                dateRange: "August 2023 - November 2024",
                link: "https://www.homedepot.com/",
                skills: ["Java", "Angular", "Golang", "Azure", "App Service", "Github actions", "React"]
            },
            {
                title: "Abbott",
                description: "At Abbott, I contributed to the Freestyle Libre platform, a leading medical device for glucose monitoring. As a full-stack developer, I worked with React, Golang, and Kubernetes to build scalable web and mobile solutions. I was the developer of the Time In Ranges graph in the React Native app—a D3-powered data visualization that helps millions of users understand their glucose trends. I also helped develop a reusable data visualization library, improving consistency and speed across the frontend.",
                dateRange: "June 2022 - August 2023",
                link: "https://www.freestyle.abbott/us-en/products/freestyle-libre-3.html?utm_source=Google&utm_medium=SEM&utm_campaign=FSL2%20Plus%20Brand&utm_content=FSL2%20Plus%20Brand&gclsrc=aw.ds&gad_source=1&gad_campaignid=2080251332&gbraid=0AAAAADGna8XW9nfK7yz2EhSxhuKhUK2NU&gclid=EAIaIQobChMI6eys1pXnjQMV-wbvAh3FAirNEAAYASAAEgKQzvD_BwE",
                skills: ["React", "React-native", "Golang", "K8s", "D3"]
            }
        ]
    }
    return (
        d.experience.map(e => {
            return (
                <Card
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

export default Experience;