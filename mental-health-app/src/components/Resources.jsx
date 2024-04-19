import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
    return (
        <div id="resources">
            <h2 style={{ color: "#973D22" }}>Resources</h2>
            <div className="card-container">
                <div className="card" style={{ width: "300px", borderColor: "#973D22", backgroundColor: "white" }}>
                    <img src='https://static.vecteezy.com/system/resources/previews/002/585/634/original/african-american-woman-meditating-in-lotus-position-healthy-lifestyle-yoga-relax-vector.jpg'
                        style={{ borderRadius: "100px" }} />
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: "#973D22" }}>Culturally Relevant Resources</h5>
                        <p className="card-text" style={{ color: "#973D22" }}>Access a diverse range of culturally sensitive resources tailored to the experiences of Black individuals.
                            From articles to podcasts and meditation videos, find support and guidance that resonates with your cultural background.</p>
                            <Link to="/media" className="btn btn-primary mt-3">Discover Resources</Link>
                    </div>
                </div>

                <div className="card" style={{ width: "300px", borderColor: "#973D22", backgroundColor: "white" }}>
                    <img src='https://th.bing.com/th/id/OIP._IEhyxo5FmxZkbQUgQqazgAAAA?rs=1&pid=ImgDetMain' />
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: "#973D22" }}>Supportive Community</h5>
                        <p className="card-text" style={{ color: "#973D22" }}> Connect with a vibrant online community of Black individuals who share similar experiences.
                            Share stories, offer encouragement, and find solidarity in combating the stigma surrounding mental health.</p>
                        <button className="btn btn-primary mt-3">Join the Community</button>
                    </div>
                </div>

                <div className="card" style={{ width: "300px", borderColor: "#973D22", backgroundColor: "white" }}>
                    <img src='https://th.bing.com/th/id/OIP.drPpz46lN-gK9ElXRGfRFAHaHa?rs=1&pid=ImgDetMain' />
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: "#973D22" }}>Personalized Support</h5>
                        <p className="card-text" style={{ color: "#973D22" }}>Receive personalized support tailored to your needs.
                            Whether it's through self-guided resources or connecting with mental health professionals who understand your cultural context, find the support you need to prioritize your mental well-being.</p>
                        <Link to="/chatbot" className="btn btn-primary mt-3">Get Support Now</Link>
                    </div>
                </div>
            </div>
            <div className='video' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/B1Bn9OWDqF0?si=22xpxXX5TRo5JddB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default Resources;

