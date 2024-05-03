import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light">

        {/* logo */}
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/assets/Untitled.png" alt="logo" height={50} width={170} />
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
            <div className="navbar-nav ms-auto ">
              <a className="nav-link active mx-2" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link mx-2" href="/categories">
                Categories
              </a>
              <a className="nav-link mx-2" href="/blogs">
                Favorite
              </a>
            </div>
            {/* search */}
          <div className="d-flex  ">
            <div className="search-box">
              <input
                type="text"
                className="search-input"
                placeholder="Find your favorite recipe"
              />
              <a className="search-btn" href="/search">
                <i className="fas fa-search" />
              </a>
            </div>
            <div className="account p-2 mx-3">
              <a className="account-btn" href="/profile">
                <i className="fas fa-user text-dark" />
              </a>
            </div>
          </div>

          </div>

          
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
