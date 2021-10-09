import './Navbar.css';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    return (
        <header>
            <div className="logo">cactown</div>
            <div className="menu">
                <Link to="/" href="#">Home</Link>
                <Link to="/roadmap" href="#">Roadmap</Link>
                <HashLink smooth to="/#team">Team</HashLink>
                <Link to="/attributes">Attributes</Link>
                <HashLink smooth to="/#mintStat">Mint Stats</HashLink>
                <HashLink smooth to="/#faq">faq</HashLink>
            </div>

            <div onClick={()=> setMenu(!menu)} className="hamburger">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 7.5H12.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25 15H5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25 22.5H17.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    {menu &&
                <div className="hamMenu">
                    <Link to="/" href="#">Home</Link>
                    <Link to="/roadmap" href="#">Roadmap</Link>
                    <Link to="/market">Team</Link>
                    <Link to="/attributes">Attributes</Link>
                    <Link to="/wallet">Mint Stats</Link>
                    <Link to="/wallet">faq</Link>
                    <div className="mobileClicks">
                    <div className="twitter"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.4302 5.06025C22.446 5.28232 22.446 5.50444 22.446 5.72651C22.446 12.5 17.2906 20.3045 7.86802 20.3045C4.96509 20.3045 2.26841 19.4638 0 18.0044C0.412451 18.052 0.808984 18.0679 1.2373 18.0679C3.63257 18.0679 5.83755 17.2589 7.59834 15.8788C5.3458 15.8312 3.45811 14.356 2.80771 12.3255C3.125 12.373 3.44224 12.4048 3.77539 12.4048C4.2354 12.4048 4.69546 12.3413 5.12373 12.2303C2.77603 11.7544 1.01519 9.69224 1.01519 7.20176V7.13833C1.69727 7.51904 2.49048 7.75698 3.33115 7.78867C1.95107 6.8686 1.04692 5.29819 1.04692 3.52153C1.04692 2.56978 1.30068 1.69731 1.74487 0.935889C4.26709 4.04502 8.05835 6.07544 12.3096 6.29756C12.2303 5.91685 12.1827 5.52031 12.1827 5.12373C12.1827 2.3001 14.4669 0 17.3064 0C18.7816 0 20.1141 0.618652 21.05 1.61802C22.208 1.39595 23.3184 0.967627 24.302 0.380713C23.9212 1.57046 23.1122 2.56982 22.0494 3.2043C23.0805 3.09331 24.0799 2.80771 24.9999 2.41118C24.302 3.42637 23.4295 4.33052 22.4302 5.06025Z" fill="#ffc160"/>
                </svg></div>
                <div className="discord"><svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5125 11.875C14.5125 12.6375 13.95 13.2625 13.2375 13.2625C12.5375 13.2625 11.9625 12.6375 11.9625 11.875C11.9625 11.1125 12.525 10.4875 13.2375 10.4875C13.95 10.4875 14.5125 11.1125 14.5125 11.875ZM8.675 10.4875C7.9625 10.4875 7.4 11.1125 7.4 11.875C7.4 12.6375 7.975 13.2625 8.675 13.2625C9.3875 13.2625 9.95 12.6375 9.95 11.875C9.9625 11.1125 9.3875 10.4875 8.675 10.4875ZM21.875 2.575V25C18.7259 22.2171 19.733 23.1383 16.075 19.7375L16.7375 22.05H2.5625C1.15 22.05 0 20.9 0 19.475V2.575C0 1.15 1.15 0 2.5625 0H19.3125C20.725 0 21.875 1.15 21.875 2.575ZM18.3125 14.425C18.3125 10.4 16.5125 7.1375 16.5125 7.1375C14.7125 5.7875 13 5.825 13 5.825L12.825 6.025C14.95 6.675 15.9375 7.6125 15.9375 7.6125C12.9682 5.98511 9.48027 5.98481 6.6 7.25C6.1375 7.4625 5.8625 7.6125 5.8625 7.6125C5.8625 7.6125 6.9 6.625 9.15 5.975L9.025 5.825C9.025 5.825 7.3125 5.7875 5.5125 7.1375C5.5125 7.1375 3.7125 10.4 3.7125 14.425C3.7125 14.425 4.7625 16.2375 7.525 16.325C7.525 16.325 7.9875 15.7625 8.3625 15.2875C6.775 14.8125 6.175 13.8125 6.175 13.8125C6.35889 13.9412 6.66211 14.1081 6.6875 14.125C8.79736 15.3065 11.7943 15.6937 14.4875 14.5625C14.925 14.4 15.4125 14.1625 15.925 13.825C15.925 13.825 15.3 14.85 13.6625 15.3125C14.0375 15.7875 14.4875 16.325 14.4875 16.325C17.25 16.2375 18.3125 14.425 18.3125 14.425Z" fill="#ffc160"/>
                        </svg>
                </div>
                    </div>
                </div>}
            </div>

            <div className="clicks">
                <button>Marketplace</button>
                <div className="twitter"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.4302 5.06025C22.446 5.28232 22.446 5.50444 22.446 5.72651C22.446 12.5 17.2906 20.3045 7.86802 20.3045C4.96509 20.3045 2.26841 19.4638 0 18.0044C0.412451 18.052 0.808984 18.0679 1.2373 18.0679C3.63257 18.0679 5.83755 17.2589 7.59834 15.8788C5.3458 15.8312 3.45811 14.356 2.80771 12.3255C3.125 12.373 3.44224 12.4048 3.77539 12.4048C4.2354 12.4048 4.69546 12.3413 5.12373 12.2303C2.77603 11.7544 1.01519 9.69224 1.01519 7.20176V7.13833C1.69727 7.51904 2.49048 7.75698 3.33115 7.78867C1.95107 6.8686 1.04692 5.29819 1.04692 3.52153C1.04692 2.56978 1.30068 1.69731 1.74487 0.935889C4.26709 4.04502 8.05835 6.07544 12.3096 6.29756C12.2303 5.91685 12.1827 5.52031 12.1827 5.12373C12.1827 2.3001 14.4669 0 17.3064 0C18.7816 0 20.1141 0.618652 21.05 1.61802C22.208 1.39595 23.3184 0.967627 24.302 0.380713C23.9212 1.57046 23.1122 2.56982 22.0494 3.2043C23.0805 3.09331 24.0799 2.80771 24.9999 2.41118C24.302 3.42637 23.4295 4.33052 22.4302 5.06025Z" fill="#003751"/>
                </svg></div>
                <div className="discord"><svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5125 11.875C14.5125 12.6375 13.95 13.2625 13.2375 13.2625C12.5375 13.2625 11.9625 12.6375 11.9625 11.875C11.9625 11.1125 12.525 10.4875 13.2375 10.4875C13.95 10.4875 14.5125 11.1125 14.5125 11.875ZM8.675 10.4875C7.9625 10.4875 7.4 11.1125 7.4 11.875C7.4 12.6375 7.975 13.2625 8.675 13.2625C9.3875 13.2625 9.95 12.6375 9.95 11.875C9.9625 11.1125 9.3875 10.4875 8.675 10.4875ZM21.875 2.575V25C18.7259 22.2171 19.733 23.1383 16.075 19.7375L16.7375 22.05H2.5625C1.15 22.05 0 20.9 0 19.475V2.575C0 1.15 1.15 0 2.5625 0H19.3125C20.725 0 21.875 1.15 21.875 2.575ZM18.3125 14.425C18.3125 10.4 16.5125 7.1375 16.5125 7.1375C14.7125 5.7875 13 5.825 13 5.825L12.825 6.025C14.95 6.675 15.9375 7.6125 15.9375 7.6125C12.9682 5.98511 9.48027 5.98481 6.6 7.25C6.1375 7.4625 5.8625 7.6125 5.8625 7.6125C5.8625 7.6125 6.9 6.625 9.15 5.975L9.025 5.825C9.025 5.825 7.3125 5.7875 5.5125 7.1375C5.5125 7.1375 3.7125 10.4 3.7125 14.425C3.7125 14.425 4.7625 16.2375 7.525 16.325C7.525 16.325 7.9875 15.7625 8.3625 15.2875C6.775 14.8125 6.175 13.8125 6.175 13.8125C6.35889 13.9412 6.66211 14.1081 6.6875 14.125C8.79736 15.3065 11.7943 15.6937 14.4875 14.5625C14.925 14.4 15.4125 14.1625 15.925 13.825C15.925 13.825 15.3 14.85 13.6625 15.3125C14.0375 15.7875 14.4875 16.325 14.4875 16.325C17.25 16.2375 18.3125 14.425 18.3125 14.425Z" fill="#003751"/>
                        </svg>
                </div>
            </div>

            
        </header>
    )
}

export default Navbar