import React from "react";
import "./SignupBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SignupBtn = props => (
    <span className="signup-btn" {...props}>
        Sign Up
  </span>
);





export default SignupBtn;