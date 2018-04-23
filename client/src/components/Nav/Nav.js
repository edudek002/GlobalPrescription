import React from "react";

const Nav = () => (
  // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  //   <a className="navbar-brand" href="/">
  //     React Reading List
  //   </a>
  // </nav>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Global Prescrption</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
  
      <li className="nav-item">
        <a className="nav-link" href="#">Sign Up</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Log In</a>
      </li>
    </ul>
  </div>
</nav>

);

export default Nav;
