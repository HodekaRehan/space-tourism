import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

// import logo and icons
import logo from "../assets/shared/logo.svg";
// import hamburger from "../assets/shared/icon-hamburger.svg";
// import close from "../assets/shared/icon-close.svg";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <button
          className={isNavExpanded ? "nav-toggle close" : "nav-toggle"}
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        ></button>

        <ul className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
          <li>
            <NavLink to="/" className="nav-link">
              <span className="nav-num">00</span>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination" className="nav-link">
              <span className="nav-num">01</span>Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" className="nav-link">
              <span className="nav-num">02</span>Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" className="nav-link">
              <span className="nav-num">03</span>Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
