


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
   
                
                    <img className='health-pic' src='https://img.freepik.com/free-photo/medium-shot-woman-laying-grass_23-2149080962.jpg?t=st=1714172947~exp=1714176547~hmac=2f2ecac87ec6ce490d9b6865309609af54f6ec19605a75888dfa8ce4ce2b9cc5&w=1380'/>
</div>
            </div>
            <Mission />
            <Resources />
        </div>
    );
};

export default Home;
