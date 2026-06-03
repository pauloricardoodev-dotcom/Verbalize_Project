import React, { useState, useEffect } from 'react';

function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="container h-100 d-flex align-items-center">
        <a className="navbar-brand" href="#">
          <img src="/assets/icons/LogoIcon.png" alt="Verbalize" width="50" height="50" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                GitHub
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">GitHub 1</a></li>
                <li><a className="dropdown-item" href="#">GitHub 2</a></li>
                <li><a className="dropdown-item" href="#">GitHub 3</a></li>
                <li><a className="dropdown-item" href="#">GitHub 4</a></li>
                <li><a className="dropdown-item" href="#">GitHub 5</a></li>
                <li><a className="dropdown-item" href="#">GitHub 6</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                LinkedIn
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">LinkedIn 1</a></li>
                <li><a className="dropdown-item" href="#">LinkedIn 2</a></li>
                <li><a className="dropdown-item" href="#">LinkedIn 3</a></li>
                <li><a className="dropdown-item" href="#">LinkedIn 4</a></li>
                <li><a className="dropdown-item" href="#">LinkedIn 5</a></li>
                <li><a className="dropdown-item" href="#">LinkedIn 6</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Instagram
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Instagram 1</a></li>
                <li><a className="dropdown-item" href="#">Instagram 2</a></li>
                <li><a className="dropdown-item" href="#">Instagram 3</a></li>
                <li><a className="dropdown-item" href="#">Instagram 4</a></li>
                <li><a className="dropdown-item" href="#">Instagram 5</a></li>
                <li><a className="dropdown-item" href="#">Instagram 6</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">YouTube</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
