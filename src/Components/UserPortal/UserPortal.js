import './UserPortal.css'
import GameSelection from '../GameSelection/GameSelection';


export default function UserPortal() {
    return(
        <div className="User-Portal">
            <h1 className='TechmetricaTitle'>TECHMETRICA</h1>
            <h2 className='TechmetricaSlogan'>WE DO TECHY THINGS WITH TECHY STUFF.</h2>
            <div className='GameSelection-Container'>
                <h3 className='GameSelectionText'>PICK A GAME TO GET STARTED</h3>
                <hr className='GameSelectionLine' />
            </div>
            <div className='GameSelection'>
                <GameSelection />
                <GameSelection />
                <GameSelection />
            </div>
        </div>
    )
}