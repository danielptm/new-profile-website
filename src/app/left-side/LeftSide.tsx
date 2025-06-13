import './styles.css'
import turtle from '../../../public/turtle.svg'
import li from '../../../public/linkedin.svg'
import gh from '../../../public/github.svg'
import Image from "next/image";

const LeftSide = () => {
    return (
        <div className={"left-container max-w-[400px]"}>
            <h1>Daniel Tuttle</h1>
            <h2>Fullstack Software Engineer</h2>
            <p>
                I build systems from the custom CSS to the high-level architecture and everything in between.
            </p>
            <div className="image-container">
                <div className="sm">
                    <a href="https://www.linkedin.com/in/danieltuttle1">
                        <Image width={30} height={30} src={li} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/danielptm">
                        <Image width={30} height={30} src={gh} alt="GitHub" />
                    </a>
                    <a href="http://heyimdaniel.com">
                        <Image width={30} height={30} src={turtle} alt="Personal Website" />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default LeftSide;