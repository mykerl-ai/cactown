import './Hero.css';
import Navbar from './Navbar';

const Hero = ({title, titleHead, par, cactus}) => {
    return (
        <div className="hero">
            <Navbar />

            <div className="flex">

                <div className="flex1"><img src={cactus} alt="" /></div>

                <div className="flex2">
                <h5>{title}</h5>
                <h1>{titleHead}</h1>
                <p>{par}</p>
                {/* <button className="cta">MINT NOW</button> */}
                </div>
            </div>

        </div>
    )
}

export default Hero;