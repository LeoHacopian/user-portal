import './NavBar.css';
import PlayButton from '../../Assets/PlayGamesButton.svg';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faHouse} from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
    return (
        <div className="NavBar">
            <div className="NavBar-Items">
                <Link to='/'>
                    <FontAwesomeIcon className="HouseIcon" icon={faHouse} />
                </Link>
                <Link to='GameSelection-CompleteContainer'>
                    <img className="Play-Button" src={PlayButton} alt="Play Button" />
                </Link>
                <a href='/LearnMore'>LEARN MORE</a>
                <a href='/People'>PEOPLE</a>
                <a href='/CarouselTest' className='Connect'>CONNECT</a>
            </div>
            <div className="SignUp-Social">
                <button className="Sign-Up">SIGN UP!</button>
                <FontAwesomeIcon className='TwitterIcon' icon={faTwitter} size="lg" style={{color: "#D63335"}} />
            </div>
        </div>    
    )
}