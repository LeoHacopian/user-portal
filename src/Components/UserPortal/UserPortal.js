import './UserPortal.css'
import GameSelection from '../GameSelection/GameSelection';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom';
import Drone from '/Users/leohacopian/Documents/user-portal/src/Assets/Drone_Minimal.png';
import Robot from '/Users/leohacopian/Documents/user-portal/src/Assets/Robot_Colorful.png';
import Footer from '../Footer/Footer';


export default function UserPortal() {


      
    const location = useLocation();
    const isAdminPath = location.pathname === '/Admin';

    if (isAdminPath) {
    return(
        <div className="Admin-Portal">
            <h1 className='Admin-TechmetricaTitle'>TECHMETRICA</h1>
            <h1 className='Admin-TechmetricaTitle'>ADMIN PORTAL</h1>
            <h2 className='Admin-TechmetricaSlogan'>CREATE FORMS, VIEW REPORTS, UNDERSTAND YOUR DATA.</h2>
            <div className='Admin-GameSelection-Container'>
                <h3 className='Admin-GameSelectionText'>SELECT A TOOL BELOW</h3>
                <hr className='GameSelectionLine' />
            </div>
            <FontAwesomeIcon className='ArrowDown' icon={faArrowDown} />
            <Footer />
        </div>
    )
    } else {
        return(
            <div className="User-Portal">
                <h1 className='TechmetricaTitle'>TECHMETRICA</h1>
                <h2 className='TechmetricaSlogan'>WE DO TECHY THINGS WITH TECHY STUFF.</h2>
                <div className='GameSelection-Container'>
                    <h3 className='GameSelectionText'>PICK A GAME TO GET STARTED</h3>
                    <hr className='GameSelectionLine' />
                </div>
                <FontAwesomeIcon className='ArrowDown' icon={faArrowDown} />
                <div id='GameSection' className='GameInfo-Container'>
                    <img className='GameSelection-Image' src={Drone} alt='Game Selection' />
                    <div className='GameInfo-Text'>
                        <h3 className='GameInfo-Title'>DRONE DECISIONS</h3>
                        <p className='GameInfo-Description'> Evaluate scenarios where a military leader wants to eliminate suspected terrorists using drone strikes. 
                        However, innocent people may also be present in the target area. Your task is to determine the best course of action in each scenario - proceed with the strike or not.</p>
                        <button className='PlayGame'>Play Game</button>
                    </div>
                </div>
                <div className='GameInfo-Container'>
                    <div className='GameInfo-Text'>
                        <h3 className='GameInfo-Title'>RoboMood</h3>
                        <p className='GameInfo-Description'> Each robot presents a unique opportunity for you to analyze and describe your emotional reactions, providing valuable insights into your psychological makeup. 
                        This engaging and enlightening game is an effective tool for improving your emotional intelligence and deepening your self-awareness. 
                        Play now to uncover hidden aspects of your emotional life and enhance your understanding of human behavior.</p>
                        <button className='PlayGame'>Play Game</button>
                    </div>
                    <img className='GameSelection-Image' src={Robot} alt='Game Selection' />
                </div>
                <Footer />
            </div>
        )
    }
}