import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
    return (
        <div id="resources">
            <h2 style={{ color: "#466730", marginLeft:"30px", marginTop:"20px", fontSize:"20px", fontWeight:"bold"}}>Resources</h2>

{/* chatbot resources card */}
            <div className="card-container">
                <div className="card" style={{ width: "500px", borderColor: "#466730", backgroundColor: "white" }}>
                    <img src='https://img.freepik.com/free-vector/save-planet-concept_23-2148529290.jpg?t=st=1714766594~exp=1714770194~hmac=1f4809a083e7cb029a316fb19a5ff54c7ef2021c2f0c2385fa677bf61913d200&w=740'  style={{ borderRadius: "100px" }} /> 
            
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: "#466730" }}>Supportive Community</h5>
                        <p className="card-text" style={{ color: "#466730" }}> Our chatbot offers instant support, coping strategies, and resources for your mental health journey. 
                        Whether you're feeling overwhelmed, anxious, or just need someone to talk to, our chatbot is available 24/7 to listen and assist.
                      </p>
                            <Link to="/gemini" className="btn btn-primary mt-3">Chat Now</Link>
                    </div>
                </div>
            </div>
{/* insert Youtube video */}
            <div className='video' style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor:"#FFFCF2", height:"370px", width:"auto" }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/B1Bn9OWDqF0?si=22xpxXX5TRo5JddB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default Resources;

