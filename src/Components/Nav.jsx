import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../Components/MyProvider";

export default function Nav() {
    const { context } = useContext(MyContext)

    return (
        <nav className="Nav">
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/services" activeClassName="active">Services</NavLink>
            <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            <NavLink to="/mentions-legales" activeClassName="active">Mentions légales</NavLink>
        </nav>
    );
}