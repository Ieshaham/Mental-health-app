


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
         
             
                <div className="soul-support-container">
   
                
                    <img className='health-pic' src='/vectorstock_41319038.png'/>
</div>
            </div>
            <Mission />
            <Resources />
        </div>
    );
};

export default Home;
