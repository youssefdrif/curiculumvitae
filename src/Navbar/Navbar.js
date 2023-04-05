import React, { useState } from "react";
import "./Navbar.css";
import { AiFillHome } from 'react-icons/ai';
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <NavLink to="/" className="nav-logo"><AiFillHome /></NavLink>
      <div className={`nav-items ${isOpen && "open"}`}>
        <NavLink to="/profil">Projets personnels</NavLink>
        <NavLink to="/experience">Experience</NavLink>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;