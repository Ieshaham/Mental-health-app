import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#DD8469"  }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">SoulSupport</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav" style={{ color:"#973D22 "}}>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link active" href="#">Resources</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Chatbot</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
