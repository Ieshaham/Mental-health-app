import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#DDD8B8" }}>
      <div className="container-fluid">
        <FontAwesomeIcon icon={faBrain} style={{ fontSize: "22px", color: "black" }} /> &nbsp;&nbsp;&nbsp;
        <a className="navbar-brand" href="#" style={{ color: "black" }}>SoulSupport</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: "black" }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#resources" onClick={() => handleScroll('features')} style={{ color: "black" }}>Resources</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
