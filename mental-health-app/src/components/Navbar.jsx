import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className="container-fluid" >
        <a className="navbar-brand" href="#">SoulSupport </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#resources" onClick={() => handleScroll('features')}>Resources</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#pricing" onClick={() => handleScroll('pricing')}>Pricing</a>
            </li> */}

              </ul>
            
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
