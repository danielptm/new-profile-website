import './styles.css'
import Experience from "@/app/right-side/experience/Experience";
import Education from "@/app/right-side/education/Education";
const RightSide = () => {
    return (
        <div className={'absolute right-0 w-[65%] max-w-[900px]'}>
            <div className={"m-5 max-w-[700px]"}>
                <p className="leading-relaxed">I'm a full-stack software engineer with nearly 10 years of experience delivering scalable, high-impact applications across healthcare, retail, insurance, and e-commerce.
                My expertise includes frontend/backend development (Java, JavaScript, Python, Golang, Node.js), cloud infrastructure (AWS, Azure, GCP), DevOps (Docker, Kubernetes, Terraform), and CI/CD pipelines.
                Currently at CVS, I support data science initiatives using React, Python, and GCP.
                At The Home Depot, I modernized internal tools and led TDD efforts in Angular, Golang, and Java.
                At Abbott, I helped scale LibreView and the FreeStyle Libre app for over 5 million users, contributing full-stack features and data visualizations.
                I’ve also built microservices and cloud-native solutions at Nike, The Standard, and others.
                Beyond coding, I lead initiatives, mentor teams, and drive user-focused development.
                I hold an M.Sc. in Computer Science (Georgia Tech) and Public Health, with a focus on HCI and health informatics.
                I thrive at the intersection of engineering, product thinking, and real-world impact.</p>
            </div>
            <div className={"max-w-[700px] mt-[30px]"}>
                <h2 className={"ml-5 mb-2"}>Experience</h2>
                <Experience />
            </div>
            <div className={"max-w-[700px] mt-[30px]"}>
                <h2 className={"ml-5 mb-2"}>Education</h2>
                <Education />
            </div>
        </div>
    )
}

export default RightSide;