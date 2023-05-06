import './NavBar.css';
import PlayButton from '../../Assets/PlayGamesButton.svg';
import {Link, useLocation} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faHouse} from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {

    const location = useLocation();
    const isAdminPath = location.pathname.startsWith('/Admin');
    const isHomePage = location.pathname === '/';

    function scrollToSection() {
        if(isHomePage) {
            var section = document.getElementById("GameSection");
            section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }
      }


    if (isAdminPath) {
    return (
        <div className="Admin-NavBar">
            <div className="Admin-NavBar-Items">
                <Link to='/'>
                    <FontAwesomeIcon className="HouseIcon" icon={faHouse} />
                </Link>
                <a href='/Admin/FormCreation'>FORM CREATION</a>
                <a href='/People'>TABLE</a>
                <a href='/FormCreation' className='Connect'>VIEW REPORTS</a>
            </div>
            <div className="LogOut">
                <button className="LogOut-Button">LOG OUT</button>
            </div>
        </div>    
    )
    } else {
        return (
            <div className="NavBar">
                <div className="NavBar-Items">
                    <Link to='/'>
                        <FontAwesomeIcon className="HouseIcon" icon={faHouse} />
                    </Link>
                    <img className="Play-Button" src={PlayButton} onClick={scrollToSection} alt="Play Button" />
                    <a href='/LearnMore'>QUESTIONNAIRES</a>
                    <a href='/People'>TABLE</a>
                    <a href='/FormCreation' className='Connect'>CONNECT</a>
                </div>
                <div className="SignUp-Social">
                    <Link to='/Admin'>
                        <button className="Sign-Up">SIGN UP!</button>
                    </Link>
                    <a href='https://twitter.com/'>
                        <FontAwesomeIcon className='TwitterIcon' icon={faTwitter} size="lg" style={{color: "#D63335"}} />
                    </a>
                </div>
            </div>    
        )
    }
}