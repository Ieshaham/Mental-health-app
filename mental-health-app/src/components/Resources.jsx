import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
    return (
        <div id="resources">
            <h2 style={{ color: "#466730", marginLeft:"30px", marginTop:"20px", fontSize:"20px", fontWeight:"bold"}}>Resources</h2>
            <div className="card-container">
                <div className="card" style={{ width: "300px", borderColor: "#466730", backgroundColor: "white" }}>
                    <img src='https://img.freepik.com/free-vector/flat-online-sport-classes-concept-illustrated_23-2148831601.jpg?t=st=1714773694~exp=1714777294~hmac=224b6b1bf9df93cba1a2dbfe833e9e25053a890de32874df90337c79243d2c14&w=826'
                        style={{ borderRadius: "100px" }} />
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: "#466730" }}>Culturally Relevant Resources</h5>
                        <p className="card-text" style={{ color: "#466730" }}>Access a diverse range of culturally sensitive resources tailored to the experiences of Black individuals.
                            From articles to podcasts and meditation videos, find support and guidance that resonates with your cultural background.</p>
                        <Link to="/media" className="btn btn-primary mt-3">Discover Resources</Link>
                    </div>
                </div>

                <div className="card" style={{ width: "300px", borderColor: "#466730", backgroundColor: "white" }}>
                    <img src='https://img.freepik.com/free-vector/save-planet-concept_23-2148529290.jpg?t=st=1714766594~exp=1714770194~hmac=1f4809a083e7cb029a316fb19a5ff54c7ef2021c2f0c2385fa677bf61913d200&w=740'  style={{ borderRadius: "100px" }} /> 
            
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: "#466730" }}>Supportive Community</h5>
                        <p className="card-text" style={{ color: "#466730" }}> Our chatbot offers instant support, coping strategies, and resources for your mental health journey. 
                        Whether you're feeling overwhelmed, anxious, or just need someone to talk to, our chatbot is available 24/7 to listen and assist.
                      </p>
                            <Link to="/gemini" className="btn btn-primary mt-3">Chat Now</Link>
                    </div>
                </div>

                <div className="card" style={{ width: "300px", borderColor: "#466730", backgroundColor: "white" }}>
                    <img src='https://img.freepik.com/free-vector/flat-people-taking-photos-with-smartphone_23-2149017318.jpg?t=st=1714773432~exp=1714777032~hmac=9a246b4486877263bdb654f0f9d6645f377af8cde2fb7c348864a359d181e0bd&w=826' />
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: "#466730" }}>Personalized Support</h5>
                        <p className="card-text" style={{ color: "#466730" }}>Receive personalized support tailored to your needs.
                            Whether it's through self-guided resources or connecting with mental health professionals who understand your cultural context, find the support you need to prioritize your mental well-being.</p>
                        <Link to="/mood" className="btn btn-primary mt-3">Get Support Now</Link>
                    </div>
                </div>
            </div>
            <div className='video' style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor:"#FFFCF2", height:"400px", width:"auto" }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/B1Bn9OWDqF0?si=22xpxXX5TRo5JddB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default Resources;

