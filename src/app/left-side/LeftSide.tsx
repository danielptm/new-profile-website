import './styles.css'
import turtle from '../../../public/turtle.svg'
import li from '../../../public/linkedin.svg'
import gh from '../../../public/github.svg'
import Image from "next/image";

const LeftSide = () => {
    return(
        <div className="left-container">
            <h1>Daniel Tuttle</h1>
            <h2>Fullstack Software Engineer</h2>
            <p>I build systems from the custom css to the high level architecture and everything in between.</p>
            <div className='sm'>
                <Image
                    width={30}
                    height={30}
                    src={li} />
                <Image
                    width={30}
                    height={30}
                    src={gh} />
                <Image
                    width={30}
                    height={30}
                    src={turtle} />
            </div>
        </div>
    )
}

export default LeftSide;