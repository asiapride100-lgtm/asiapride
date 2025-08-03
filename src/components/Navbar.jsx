import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-blue fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img
        src="/assets/logo/logo.jpg"
        alt="AsiaPS Logo"
        style={{ width: '40px', height: '40px' }}
      />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav text-white fw-bold">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Features">Feature</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Guide">Play</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
