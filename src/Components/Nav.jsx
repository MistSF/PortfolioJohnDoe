import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
          <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={`Nav ${isOpen ? 'open' : ''}`}>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/services" activeClassName="active">Services</NavLink>
            <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            <NavLink to="/mentions-legales" activeClassName="active">Mentions légales</NavLink>
          </nav>
        </div>
    );
}