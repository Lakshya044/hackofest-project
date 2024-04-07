import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import Lower_Navbar_2 from './Lower_Navbar_2';
import Footer from "../Components/Footer";
import preamble from "../Assets/preamble.jpg";
import warrantBuddy from "../Assets/warrantBuddy.jpg";
import IssuedWarrants from "./IssuedWarrants";

function Lower_Navbar_2() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
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
        <div className="dropdown ml-2 position-relative">
          <button
            className="btn btn-sm me-2 btn-outline-secondary LNbtn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={showDropdown}
            onClick={toggleDropdown}
          >
            PROFILE
          </button>
          {showDropdown && (
            <div
              className="dropdown-menu show"
              aria-labelledby="dropdownMenuButton"
              style={{
                position: "absolute",
                left: 980,
                top: "100%",
                transform: "translateY(0.5rem)",
              }}
            >
              <a className="dropdown-item" href="/signupClient">
                Edit Profile
              </a>
              <a className="dropdown-item" href="#">
                Sign Out
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

function Profile() {
  return (
    <>
      {Lower_Navbar_2()}
      <div className="position-relative">
        <IssuedWarrants />
      </div>

      <Footer></Footer>
    </>
  );
}
export default Profile;
