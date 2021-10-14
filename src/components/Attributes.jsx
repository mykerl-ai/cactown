import './Attributes.css';
import Hero from './Hero';

const Attributes = ()=> {
    return (
        <div >

                <Hero title={null} titleHead="Cactown" par={null}/>

                <div className="attributes">
                    <div className="tab">
                        <div className="tabPic"></div>
                        <div className="tabText">

                            <div className="attrSpan">10k Minted</div>
                            <h2>100+ Unique Attributes</h2>
                            <p>Each Cact’us is 100% Unique (guaranteed). There are millions of unique combinations possible, but we are only ever going to mint 10k total. The total number of Cat’us will go down over time.</p>
                            <p>Different rarity percents are assigned for each attribute. The lower the percent, the more rare it occurs.</p>
                        </div>
                    </div>

                    <div className="parts">
                        <div>
                            <button>Bodies</button>
                            <button>Background</button>
                            <button>Mouth</button>
                            <button>Hair</button>
                        </div>
                    </div>

                    <div className="grid">

                        <div className="item1">
                            <div className="cact"></div>
                            <div className="cactName">Base Orange</div>
                            <div className="rare">Rarity: <span>28%</span></div>
                        </div>
                        <div className="item1">
                            <div className="cact"></div>
                            <div className="cactName">Base Orange</div>
                            <div className="rare">Rarity: <span>28%</span></div>
                        </div>
                        <div className="item1">
                            <div className="cact"></div>
                            <div className="cactName">Base Orange</div>
                            <div className="rare">Rarity: <span>28%</span></div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Attributes;