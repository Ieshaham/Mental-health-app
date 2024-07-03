import React from 'react';
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
        <div className="home">
            <div className="soul-support-container">
                <div className="health-pic-container">
                    <img className='health-pic' src='/vectorstock_41319038.png' alt='Health Pic'/>
                </div>
                <div className='main-page-title'>
                    <p className="title-text" style={{ fontSize: "70px", color: "#210162" }}>SoulSupport </p>
                    <p className="subtitle-text" style={{ fontSize: "18px", color: "#210162", width:"35rem"}}>
                        SoulSupport is dedicated to fostering a sense of understanding and empowerment through every conversation. Join us as we strive to make mental wellness accessible, one chat at a time.
                    </p>
                    <div className="button-container">
                        <button className='signup-button'>SIGN UP</button>
                        <button className='signin-button'>SIGN IN</button>
                    </div>
                </div>
            </div>
            <Mission />
            <Resources />
        </div>
    );
};

export default Home;

