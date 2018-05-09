import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand">Global Prescrption</a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>

        {/* <div className="rightfloat"> */}
        <li className="nav-item">
          {/* links for routes */}
          <a className="nav-link" href="#">
            Products
          </a>
        </li>
        <li className="nav-item">
          {/* links for routes */}
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          {/* links for routes */}
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
        <li className="nav-item">
          {/* links for routes */}
          <a className="nav-link" href="/">
            Logout
          </a>
        </li>
        {/* </div> */}
      </ul>
    </div>
  </nav>
);

export default Nav;
