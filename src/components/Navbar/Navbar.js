import React , { useState} from "react";
import "./Navbar.css";

import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${searchTerm}`);
  };



  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light">
        {/* logo */}
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="/assets/RecipeHub_transparentwitouticon.png"
              alt="logo"
              height={70}
              width={250}
            />
          </a>

          {/* hamburger */}
          <button
            className="navbar-toggler border-0 "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* menu */}
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="d-flex ms-auto ">
              <div className="search-box">
                
                  <input
                    type="text"
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Find your favorite recipe"
                  />
                 <button onClick={handleSearch}>
                    <i className="fas fa-search text-warning" />
                  </button>
                
              </div>
              <div className="switch-theme pt-3 p-2 mx-3">
                <a className="switch-btn" href="/profile">
                  <i className="fa-solid fa-circle-half-stroke text-warning "></i>
                </a>
              </div>
            </div>

            <div className="navbar-nav ms-auto ">
              <a className="nav-link active mx-2" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link mx-2" href="/categories">
                Categories
              </a>
              <a className="nav-link mx-2" href="https://www.linkedin.com/in/aniket-ikhar-119800294/" target="blank">
                About
              </a>
            </div>
            {/* search */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
