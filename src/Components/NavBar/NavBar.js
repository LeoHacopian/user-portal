import './NavBar.css';
import PlayButton from '../../Assets/PlayGamesButton.svg';
import {Link, useLocation} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faHouse} from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    function scrollToSection() {
        if(isHomePage) {
            var section = document.getElementById("GameSection");
            section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }
      }

    return (
        <div className="NavBar">
            <div className="NavBar-Items">
                <Link to='/'>
                    <FontAwesomeIcon className="HouseIcon" icon={faHouse} />
                </Link>
                <img className="Play-Button" src={PlayButton} onClick={scrollToSection} alt="Play Button" />
                <a href='/Questionnaires'>QUESTIONNAIRES</a>
                <a href='/Debug'>DEBUG DB</a>
                <a href='/Connect' className='Connect'>CONNECT</a>
            </div>
            <div className="SignUp-Social">
                <button className="Sign-Up">SIGN UP!</button>
                <a href='https://twitter.com/'>
                    <FontAwesomeIcon className='TwitterIcon' icon={faTwitter} size="lg" style={{color: "#D63335"}} />
                </a>
            </div>
        </div>    
    )
}