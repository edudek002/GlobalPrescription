import React from "react";
import "./footer.css";

const Footer = () => (
  <nav className="navbar-expand-lg navbar-dark navbar-fixed-bottom">
    <div className="container">
      {/* <div className="row"> */}
      <div className="row">
        <div className="col-md-12">
          <br />
          <br />
          <h2>JOIN THE GLOBAL PRESCRIPTION COMMUNITY</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <i className="fab fa-github-square" />
          <i className="fab fa-facebook-square" />
          <i class="fab fa-instagram" />
          <i class="fab fa-twitter-square" />
          <i class="fab fa-linkedin" />
          
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p>Created by Drugs Rx Us</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <p>
            Nathan Bos, Edyta Dudek, Amin Kedir, Sam Mwangi, Walter Zuschlag
          </p>
        </div>
      </div>
      <div className="row">
        <p className="mx-auto">&copy;Copyright 2018.</p>
      </div>
    </div>
    {/* </div> */}
  </nav>
);

export default Footer;
