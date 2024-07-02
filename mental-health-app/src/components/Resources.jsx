import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
    return (
        <div id="resources">
            <h2 style={{ color: "#210162", marginLeft:"30px", marginTop:"20px", fontSize:"20px", fontWeight:"bold"}}>Resources</h2>

{/* chatbot resources card */}
            <div className="card-container">
                <div className="card" style={{ width: "500px", borderColor: "210162", backgroundColor: "white" }}>
                    <img src='/5471.jpg'  style={{ borderRadius: "100px" }} /> 
            
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: "#210162" }}>Supportive Community</h5>
                        <p className="card-text" style={{ color: "#210162" }}> Our chatbot offers instant support, coping strategies, and resources for your mental health journey. 
                        Whether you're feeling overwhelmed, anxious, or just need someone to talk to, our chatbot is available 24/7 to listen and assist.
                      </p>
                            <Link to="/gemini" className="btn btn-primary mt-3">Chat Now</Link>
                    </div>
                </div>
            </div>
{/* insert Youtube video */}
            <div className='video' style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor:"#CFC8EF", height:"370px", width:"auto" }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/B1Bn9OWDqF0?si=22xpxXX5TRo5JddB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default Resources;

