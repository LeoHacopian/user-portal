import './UserPortal.css'
import GameSelection from '../GameSelection/GameSelection';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'


export default function UserPortal() {
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