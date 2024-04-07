import React, { useState } from "react";
import preamble from "../Assets/preamble.jpg";
import Lower_Navbar from "../Components/Lower_Navbar";
import Upper_Navbar from "../Components/Upper_Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from 'react-router-dom';
function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [profile, setProfile] = useState(0);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleProfileChange = (event) => {
    setProfile(parseInt(event.target.value)); // Convert value to integer
  };
  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };
  const navigate = useNavigate();

  // Event handler for sign-up button click
  const profileChange = () => {
    // Navigate to the sign-up component
    if (profile === 0) {
      navigate("/signupJudge")
    } else if (profile === 1) {
      navigate("/signupClient")
    } else {
      navigate("/signupPolice")
    }
  };
  const handleSubmit = (event) => {
    profileChange();
  };

  return <>
     <Upper_Navbar/>
     <Lower_Navbar/>
     <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div
          className="col-md-1 text-center company__info"
          style={{ backgroundColor: "white" }}
        >
          {/* <span className="company__logo">
  return (
    <>
      <Upper_Navbar />
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div
            className="col-md-1 text-center company__info"
            style={{ backgroundColor: "white" }}
          >
            {/* <span className="company__logo">
            <h2>
              <span className="fa fa-android"></span>
            </h2>
          </span> */}
            <img
              src={preamble}
              width="70"
              height="70"
              className="d-inline-block align-top mr-2"
              alt="Preamble"
            />
            {/* <h4 className="company_title">Your Company Logo</h4> */}
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div className="container-fluid">
              <div className="row">
                <h2>Sign Up</h2>
              </div>
              <div className="row">
                <form onSubmit={handleSubmit} className="form-group">
                  <div className="row">
                    <input
                      type="text"
                      name="aadharNo"
                      id="aadharNo"
                      className="form__input"
                      placeholder="First Name"
                      value={username}
                      onChange={handleUsernameChange}
                      required
                    />
                  </div>
                  <div className="row">
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="form__input"
                      placeholder="Last Name"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>

                  <div className="m-3">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={handleProfileChange}
                      value={profile}
                    >
                      <option value={0}>Judge</option>
                      <option value={1}>Client</option>
                      <option value={2}>Police</option>
                    </select>
                  </div>

                  <div className="row">
                    <input
                      type="submit"
                      value="Create My Account"
                      className="btnLogin"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  
}

export default LoginForm;
