import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top py-2">
    <div className="container-fluid">
      <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
        <span className="bg-primary text-white rounded-circle d-inline-flex justify-content-center align-items-center" style={{width: 36, height: 36, fontWeight: 'bold', fontSize: '1.2rem'}}>VD</span>
        <span>Vap'd Dashsteam</span>
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto gap-2">
          <li className="nav-item">
            <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')} to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')} to="/services">Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')} to="/gallery">Gallery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')} to="/why-choose-us">Why Choose Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')} to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar; 