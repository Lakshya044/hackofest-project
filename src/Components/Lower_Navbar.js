import React from "react";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import preamble from "../Assets/preamble.jpg";
import warrantBuddy from "../Assets/warrantBuddy.jpg";

function Lower_Navbar() {
  const navigate = useNavigate();

  // Event handler for sign-up button click
  const handleSignUpClick = () => {
    // Navigate to the sign-up component
    navigate("/signup");
  };
    const handleLoginClick = () => {
      // Navigate to the sign-up component
      navigate("/login");
  };

  return (
    <nav className="navbar navbar-light bg-light d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img
          src={preamble}
          width="70"
          height="70"
          className="d-inline-block align-top mr-2"
          alt="Preamble"
        />
        <img
          src={warrantBuddy}
          height="70"
          className="d-inline-block align-top ml-2"
          alt="warrantBuddy"
        />
      </div>
      <div>
        <button
          className="btn btn-sm me-2 btn-outline-secondary"
          type="button"
          onClick={handleSignUpClick}
        >
          SIGN UP
        </button>
        <button className="btn btn-primary btn-login" type="button" onClick={handleLoginClick}>
          SIGN IN
        </button>
      </div>
    </nav>
  );
}

export default Lower_Navbar;
