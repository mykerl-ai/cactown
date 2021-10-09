import './Info.css'

const Info = () => {
    return (

        <div id="mintStat" className="Info">
          <div className="grid">
            <div className="item">
                <p className="heading"> 10k ever minted</p>
                <p className="body">Each Might Tiger is unique & algorithmically generated & minted on the Solana blockchain.<p className="body"> We are only ever generating 10k completely unique Sol Souls. There will be no further generations.</p></p>
            
            </div>

            <div className="item"> <p className="heading"> MightyTigers are arriving</p>
                <p className="body">Get in on the ground floor by collecting the exclusive Sol Souls NFTs. See our roadmap for our future plans, including our DAPP interactive SOUL FUSION feature.</p>
            </div>

            <div className="item"> <p className="heading">Join the Tiger train</p>
                <p className="body">Get the latest updates & get exclusive air drops & contests.</p>
            </div>
        </div>


        <div className="mint">
            <div className="blocktext">
                <h4 className="head">mint a Cactown</h4>
                <p className="bod">mint  a  Cactown by connecting your Solana or Sollet or Phantom Wallet.</p>
            </div>
            <div className="block">
                <div className="single">Single</div>
                <p className="one">1 cactown</p>
                <div className="circle"><p>3 sol</p></div>
                <div className="divider"></div>
                <button>mint now</button>
            </div>
        </div>

        <h6 className="rep">See Our Cactown Representant</h6>
        <div className="grid">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
        </div>
        </div>
    )
} 
export default Info;