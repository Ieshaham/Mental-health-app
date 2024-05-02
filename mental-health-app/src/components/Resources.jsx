import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
    return (
        <div id="resources">
            <h2 style={{ color: "#466730", marginLeft:"30px", marginTop:"20px", fontSize:"20px", fontWeight:"bold"}}>Resources</h2>
            <div className="card-container">
                <div className="card" style={{ width: "300px", borderColor: "#466730", backgroundColor: "white" }}>
                    <img src='https://static.vecteezy.com/system/resources/previews/002/585/634/original/african-american-woman-meditating-in-lotus-position-healthy-lifestyle-yoga-relax-vector.jpg'
                        style={{ borderRadius: "100px" }} />
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: "#466730" }}>Culturally Relevant Resources</h5>
                        <p className="card-text" style={{ color: "#466730" }}>Access a diverse range of culturally sensitive resources tailored to the experiences of Black individuals.
                            From articles to podcasts and meditation videos, find support and guidance that resonates with your cultural background.</p>
                        <Link to="/media" className="btn btn-primary mt-3">Discover Resources</Link>
                    </div>
                </div>

                <div className="card" style={{ width: "300px", borderColor: "#466730", backgroundColor: "white" }}>
                    <img src='https://th.bing.com/th/id/OIP._IEhyxo5FmxZkbQUgQqazgAAAA?rs=1&pid=ImgDetMain'  style={{ borderRadius: "100px" }} /> 
            
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: "#466730" }}>Supportive Community</h5>
                        <p className="card-text" style={{ color: "#466730" }}> Our chatbot offers instant support, coping strategies, and resources for your mental health journey. 
                        Whether you're feeling overwhelmed, anxious, or just need someone to talk to, our chatbot is available 24/7 to listen and assist.
                      </p>
                            <Link to="/gemini" className="btn btn-primary mt-3">Chat Now</Link>
                    </div>
                </div>

                <div className="card" style={{ width: "300px", borderColor: "#466730", backgroundColor: "white" }}>
                    <img src='https://th.bing.com/th/id/OIP.drPpz46lN-gK9ElXRGfRFAHaHa?rs=1&pid=ImgDetMain' />
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: "#466730" }}>Personalized Support</h5>
                        <p className="card-text" style={{ color: "#466730" }}>Receive personalized support tailored to your needs.
                            Whether it's through self-guided resources or connecting with mental health professionals who understand your cultural context, find the support you need to prioritize your mental well-being.</p>
                        <Link to="/chatbot" className="btn btn-primary mt-3">Get Support Now</Link>
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

