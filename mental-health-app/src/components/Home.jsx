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
            <div className="landing-page">
                <div className='slogans-on-main'>
                    <h1 className="slogan">From Heritage To Healing</h1>
                    <h2 className="sub-slogan">Embracing Black Womanhood, Inspiring Inner Balance. Your Oasis for Healing and Self-Discovery.
                    <div className='main-button'>
                <button className='signup'>Sign Up</button>
                <button className='login'>Log In</button>
            </div>
                    
                    </h2>
                   
                </div>
                
                <img src="https://executivefunctionsummit.com/wp-content/uploads/2022/05/Brain-Background-1.gif" alt="Brain Image" className="pulsate-brain" />
                </div>
                <Mission />
                <Resources />
        </div>
    );
};

export default Home;
