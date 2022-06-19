import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Grid Demo
          </a>
          <div className="navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/">
                Home
              </Link>
            </div>
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/users">
                Users
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
