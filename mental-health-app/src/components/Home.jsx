import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you need

const Home = () => {
    return (
        <div>
            <div className="landing-page">
                <h1 className="slogan">From Heritage To Healing</h1>
                <h2 className="sub-slogan">Embracing Black Womanhood, Inspiring Inner Balance. Your Oasis for Healing and Self-Discovery.</h2>
                <img className="main-img" src="https://img.freepik.com/free-vector/side-afro-woman-isolated_1308-114598.jpg?w=740&t=st=1709596850~exp=1709597450~hmac=b375028d07ccd5830e685a840e25b14f7ead952f66761e84c64e37cb918a3b7a" alt="Afro woman"/>
                <FontAwesomeIcon
    icon={faCircleDown}
    style={{
        color: "#973D22",
        height: "35px",
        transition: "color 0.3s ease", // Add transition for smooth animation
    }}
    className="icon" // Optional: Add a class for additional styling
    onMouseEnter={(e) => e.target.style.color = "#DD8469"} // Change color on hover
    onMouseLeave={(e) => e.target.style.color = "#973D22"} 
/>
</div>
        </div>
    );
};

export default Home;
