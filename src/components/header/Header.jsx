import React from "react";
import style from "./Header.module.css"
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <nav className={`#e57373 red lighten-2 ${style.nav}`}>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo"> Recipe </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about" >About</Link>
          </li>
          <li>
            <Link to="/contact" >Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
