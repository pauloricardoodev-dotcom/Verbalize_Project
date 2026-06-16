import React, { useState, useEffect } from 'react';

function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [openDropdown, setOpenDropdown] = useState(null);

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${
        visible ? 'navbar-visible' : 'navbar-hidden'
      }`}
    >
      <div className="container h-100 d-flex align-items-center">
        <a className="navbar-brand" href="#">
          <img
            src="/assets/icons/LogoIcon.png"
            alt="Verbalize"
            width="50"
            height="50"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link text-decoration-none"
                onClick={() => toggleDropdown('github')}
              >
                GitHub
              </button>

              <ul
                className={`dropdown-menu ${
                  openDropdown === 'github' ? 'show' : ''
                }`}
              >
                <li><a className="dropdown-item" href="https://github.com/EnzoDiasDev">Enzo Dias</a></li>
                <li><a className="dropdown-item" href="https://github.com/ransa-TI">Mathues Ransati</a></li>
                <li><a className="dropdown-item" href="https://github.com/pauloricardoodev-dotcom">Paulo Ricardo</a></li>
                <li><a className="dropdown-item" href="https://github.com/EnzoDiasDev">Kenzo Yamamoto</a></li>
                <li><a className="dropdown-item" href="https://github.com/vitorventania">Vitor Ventania</a></li>
                <li><a className="dropdown-item" href="https://github.com/Vitorlescola">Vitor Luis</a></li>
                <li><a className="dropdown-item" href="https://github.com/FelipeGiusti">Felipe Giusti</a></li>
              </ul>
            </li>

            
            

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link text-decoration-none"
                onClick={() => toggleDropdown('linkedin')}
              >
                LinkedIn
              </button>

              <ul
                className={`dropdown-menu ${
                  openDropdown === 'linkedin' ? 'show' : ''
                }`}
              >
                <li><a className="dropdown-item" href="https://github.com/EnzoDiasDev">Enzo Dias</a></li>
                <li><a className="dropdown-item" href="https://github.com/ransa-TI">Mathues Ransati</a></li>
                <li><a className="dropdown-item" href="https://github.com/pauloricardoodev-dotcom">Paulo Ricardo</a></li>
                <li><a className="dropdown-item" href="https://github.com/EnzoDiasDev">Kenzo Yamamoto</a></li>
                <li><a className="dropdown-item" href="https://github.com/vitorventania">Vitor Ventania</a></li>
                <li><a className="dropdown-item" href="https://github.com/Vitorlescola">Vitor Luis</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link text-decoration-none"
                onClick={() => toggleDropdown('instagram')}
              >
                Instagram
              </button>

              <ul
                className={`dropdown-menu ${
                  openDropdown === 'instagram' ? 'show' : ''
                }`}
              >
                <li><a className="dropdown-item" href="https://github.com/EnzoDiasDev">Enzo Dias</a></li>
                <li><a className="dropdown-item" href="https://github.com/ransa-TI">Mathues Ransati</a></li>
                <li><a className="dropdown-item" href="https://github.com/pauloricardoodev-dotcom">Paulo Ricardo</a></li>
                <li><a className="dropdown-item" href="https://github.com/EnzoDiasDev">Kenzo Yamamoto</a></li>
                <li><a className="dropdown-item" href="https://github.com/vitorventania">Vitor Ventania</a></li>
                <li><a className="dropdown-item" href="https://github.com/Vitorlescola">Vitor Luis</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                YouTube
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;