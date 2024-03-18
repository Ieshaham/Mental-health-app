import React from 'react';

const Resources = () => {
    return (
        <div id="resources">
            <h2>Resources Section</h2>
            <div className="card-container">
                <div className="card" style={{ width: "300px" , borderColor: "#973D22" , backgroundColor: "#F9DBB5"}}>
                    <div className="card-body" >
                
                        <h5 className="card-title" style={{color: "#973D22"}}>Culturally Relevant Resources</h5>
                        
                        <p className="card-text" style={{color: "#973D22"}}>Access a diverse range of culturally sensitive resources tailored to the experiences of Black individuals. 
                        From articles to podcasts and meditation videos, find support and guidance that resonates with your cultural background.</p>
                    </div>
                </div>

                <div className="card" style={{ width: "300px" , borderColor: "#973D22" ,backgroundColor: "#F9DBB5" }}>
                    <div className="card-body">
                        <h5 className="card-title" style={{color: "#973D22"}}>Supportive Community</h5>
                     
                        <p className="card-text" style={{color: "#973D22"}}> Connect with a vibrant online community of Black individuals who share similar experiences. 
                        Share stories, offer encouragement, and find solidarity in combating the stigma surrounding mental health.</p>
                    </div>
                </div>

                <div className="card" style={{ width: "300px" , borderColor: "#973D22" ,backgroundColor: "#F9DBB5"}}>
                    <div className="card-body">
                        <h5 className="card-title" style={{color: "#973D22"}}>Personalized Support</h5>
                      
                        <p className="card-text" style={{color: "#973D22"}}>Receive personalized support tailored to your needs.
                         Whether it's through self-guided resources or connecting with mental health professionals who understand your cultural context, find the support you need to prioritize your mental well-being.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
