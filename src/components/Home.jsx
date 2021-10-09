import Hero from './Hero';
import Info from './Info';
import Faq from './Faq';
import Team from './Team';
import cactus from '../assets/cactus.png'


const Home = ()=> {
    return (
        <div className="Home">
            <Hero title="LIMITED: 10,000 UNIQUE NFTS ON SOLANA" titleHead="INTRODUCING CACTOWN" par="SOLD OUT - 10,000 uniquely generated, cute and collectible pixel art plants with proof of ownership stored on the Solana blockchain." cactus={cactus}/>

            <Info />
            <Faq />
            <Team />
        </div>
    )
}

export default Home;