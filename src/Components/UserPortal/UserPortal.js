import './UserPortal.css'
import GameSelection from '../GameSelection/GameSelection';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom';


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
                <div className='GameSelection'>
                    <GameSelection className='item'/>
                    <GameSelection className='item'/>
                    <GameSelection className='item'/>
                </div>
            </div>
        )
    }
}