import './styles.css'
import Experience from "@/app/right-side/experience/Experience";
const RightSide = () => {
    return (
        <div className={'absolute right-0 w-[65%] max-w-[900px]'}>
            <div className={"m-5 max-w-[700px]"}>
                <p>I am a seasoned full-stack software engineer with nearly a decade of experience delivering high-impact applications across diverse industries including healthcare, retail, insurance, and e-commerce. My expertise spans frontend and backend technologies, cloud infrastructure, DevOps, and scalable system design.</p>
                <p>Technically, I have deep experience with Java, JavaScript (React, Angular), Python, Golang, and Node.js, along with infrastructure tools like Docker, Kubernetes (AKS), and Terraform. I’ve deployed and maintained services in both AWS and Azure, and I am well-versed in building CI/CD pipelines and implementing test automation strategies that enhance product reliability and team velocity.</p>
                <p>At CVS, I currently support data science initiatives by building both new and existing applications using React, Python, and GCP. Previously at The Home Depot, I led efforts to modernize a legacy internal tool using Angular, Docker, and Azure. There, I introduced a test-driven development approach and contributed to both frontend and backend services in Golang and Java. My work supports over half a million employees.</p>
                <p>At Abbott, I helped scale LibreView and the FreeStyle Libre mobile app, which serves over five million users. I contributed full-stack features in React, React Native, and Golang, and also built a data visualization library under tight deadlines. My background also includes building microservices, infrastructure as code, and robust cloud-native applications at Nike, The Standard, and other organizations.</p>
                <p>Beyond technical implementation, I’ve frequently taken ownership roles—gathering requirements, mentoring teammates, and shaping dev processes. I bring a product-minded approach to engineering, combining user-focused design with clean, maintainable code.</p>
                <p>My academic background includes an M.Sc. in Computer Science from Georgia Tech, with a focus on human-computer interaction and health informatics, which complements my earlier M.Sc. in Public Health. This multidisciplinary foundation strengthens my ability to build impactful, user-centered solutions—particularly in healthcare and data-driven environments.</p>
                <p>I focus on creating scalable, resilient software—not just writing code. I work best where engineering excellence, product thinking, and real-world impact intersect.</p>

            </div>
            <div className={"max-w-[700px] mt-[30px]"}>
                <h2 className={"ml-5 mb-2"}>Experience</h2>
                <Experience />
            </div>
            <div className={"max-w-[700px] mt-[30px]"}>
                <h2 className={"ml-5 mb-2"}>Education</h2>
                <Experience />
            </div>
        </div>
    )
}

export default RightSide;