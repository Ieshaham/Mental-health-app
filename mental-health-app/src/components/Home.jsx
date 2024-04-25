import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import Resources from './Resources';
import Mission from './Mission';

const Home = () => {
    const handleScrollDown = () => {
        const featuresSection = document.getElementById("features");
        if (featuresSection) {
            window.scrollTo({
                top: featuresSection.offsetTop,
                behavior: "smooth"
            });
        }
    };
    return (
        <div>
        <div className="home">
            <div className="slogans-and-gif-container">
                <div className="slogans">
                    <div style={{backgroundColor:"#FFFCF2",position:"relative",top:"7rem", left:"15rem",width:"30rem" ,height:"25rem",zIndex:"3",padding:"10px", borderRadius:"15px"}}>
                    <h1 className="slogan" >From Heritage To Healing</h1>
                    <h2 className="sub-slogan">Embracing Black Womanhood, Inspiring Inner Balance. Your Oasis for Healing and Self-Discovery.</h2>
                    <div className='main-button'>
                        <button className='signup'>Sign Up</button>
                        <button className='login'>Log In</button>
                        </div>

                    </div>
                </div>
                <div className="gif-container">
                    <img src="https://executivefunctionsummit.com/wp-content/uploads/2022/05/Brain-Background-1.gif" alt="Brain Image" className="pulsate-brain" />
                </div>
            </div>
            </div>
            <Mission />
            <Resources />
        </div>
    );
};

export default Home;
