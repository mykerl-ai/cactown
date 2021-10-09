import './Faq.css'

const Faq = ()=> {
    return (
        <div id='faq' className="Faq">
            <div className="span">Faq</div>

            <div className="questions">
                <div className="question">What is an NFT?</div>
                <div className="answer">An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos. They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos.</div>
            </div>

            <div className="questions">
                <div className="question">How do I Purchase Cactown?</div>
                <div className="answer">On release (TBA) click our “Mint Cactown”. We are trying to structure our distribute to be as fair as possible, with live minting & instant distribution. However, if the solana blockchain gets clogged it could take a bit to receive your NFT.</div>
            </div>

        </div>
    )
}

export default Faq;