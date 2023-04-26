import './GameSelection.css'

export default function GameSelection() {

    return (
        <div className='GameSelection-CompleteContainer'>
            <img src='https://www.wallpaperflare.com/static/898/70/439/helicopter-sunset-silhouette-sky-wallpaper.jpg'className='GameSelection-Image' />
            <div className="Text-Overlay Jost">
                <h1>Drone Decisions</h1>
                <h2>WHEN SHOULD ARMED DRONES BE USED?</h2>
                <h6>AVERAGE TIME: 8 MIN </h6>
            </div>
            <button className='GameSelection-Button Jost'>PLAY</button>
        </div>
    )
}