import React from 'react';
// import { Button } from '../Button/Button';
import './Header.css';
import IntroText from './IntroText'
// import { FaPlayCircle } from 'react-icons/fa';

function Header() {
    return (
        <div className='hero-container'>
            <video src='assets/header_video/header_video.mp4' autoPlay loop muted />
            <IntroText />
            {/* <h1>Adventure Awaits You</h1>
            <p>What are you waiting for?</p> */}
            {/* <FaPlayCircle /> */}
            {/* <div className="hero-btns">
                <Button className='btns' buttonSize='btn--large' buttonStyle='btn--outline' >GET STARTED</Button>
                <Button className='btns' buttonSize='btn--large' buttonStyle='btn--primary' >WATCH TRAILER <FaPlayCircle className='fa-play-circle' /> </Button>
            </div> */}
        </div>
    )
}

export default Header
