import member from '../assets/member.png';
import './Team.css';


const Team = ()=> {
    return (
        <div>
            
            <div id="team" className="team">
                <div className="member">
                    <img src={member} alt="" />
                    <span>Mike</span>
                    <p>Lead game developer</p>
                    <p>20 years experiencet</p>
                </div>

                <div className="member">
                    <img src={member} alt="" />
                    <span>Mike</span>
                    <p>Lead game developer</p>
                    <p>20 years experiencet</p>
                </div>

                <div className="member">
                    <img src={member} alt="" />
                    <span>Mike</span>
                    <p>Lead game developer</p>
                    <p>20 years experiencet</p>
                </div>
            </div>


        </div>
    )
}
export default Team;