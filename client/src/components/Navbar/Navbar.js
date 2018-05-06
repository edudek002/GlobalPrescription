import React from "react";
import "./footer.css";

const Footer = () => (
  <nav className="navbar-expand-lg navbar-dark navbar-fixed-bottom">
    <div className="container">
      {/* <div className="row"> */}
        <div className="row">
          <div class="col-md-12">
            <br />
            <br />
            <h2>JOIN THE GLOBAL PRESCRIPTION COMMUNITY</h2>
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
              Nathan Bos, Walter Zuschlag, Edyta Dudek, Amin Kedir, Sam Mwangi
            </p>
          </div>
        </div>
        <div className="row">
          <p class="mx-auto">&copy;Copyright 2018.</p>
        </div>
      </div>
    {/* </div> */}
  </nav>
);

export default Footer;
