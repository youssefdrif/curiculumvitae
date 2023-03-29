import React, { useState } from "react";
import "./Navbar.css";
import { AiFillHome } from 'react-icons/ai';
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <Link to="/" className="nav-logo"><AiFillHome /></Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/profil">Projets personnels</Link>
        <Link to="/experience">Experience</Link>
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