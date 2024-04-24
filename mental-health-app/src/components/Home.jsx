import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import Resources from './Resources';

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
                    <h2 className="sub-slogan">Embracing Black Womanhood, Inspiring Inner Balance. Your Oasis for Healing and Self-Discovery.</h2>
                </div>
                {/* <img className="main-img" src="https://static.vecteezy.com/system/resources/previews/025/464/335/non_2x/portrait-of-a-beautiful-african-woman-in-a-national-headdress-in-profile-illustration-vector.jpg" alt="Description of the image" /> */}
                <img src="https://sslotter.neocities.org/brain.gif" alt="Brain Image" className="pulsate-brain" />

                <Resources />
            </div>
        </div>
    );
};

export default Home;
