import React, { useState } from "react";
import Lower_Navbar from "../Components/Lower_Navbar";
import Upper_Navbar from "../Components/Upper_Navbar";
import Footer from "../Components/Footer";
function ClientProfile() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      setValidationMessage("Passwords match!");
      // Here you can proceed with form submission
    } else {
      setValidationMessage("Passwords do not match!");
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  return <>
     
     <Upper_Navbar/>
     <Lower_Navbar/>
    <div className="d-flex justify-content-center profileCard">
      <div class="containerClientProfile m-4  p-2 d-flex justify-content-center align-items-center">
        <div>
          <div
            className="d-flex justify-content-center"
            style={{
              color: "#0056b3",
            }}
          >
            <h4>Add Contact Information</h4>
          </div>
          <form class="row g-3">
            <div className="col-12 DP  d-flex justify-content-center">
              {selectedImage && (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    border: "2px solid #0056b3",
                    // margin: "10px",
                  }}
                />
              )}
            </div>
            <div className="col-12">
              <label htmlFor="image" className="form-label">
                Upload Image
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>

            <div class="col-md-6">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="aadharNumber" class="form-label">
                Aadhar Number
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword4"
                required
              />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                required
              />
            </div>

            <div class="col-md-6">
              <label for="cityName" class="form-label">
                City Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="country" class="form-label">
                Country
              </label>
              <input
                type="text"
                class="form-control"
                id="inputPassword4"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="pinCode" class="form-label">
                Pin Code
              </label>
              <input
                type="number"
                class="form-control"
                id="inputEmail4"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="phoneNumber" class="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                class="form-control"
                id="inputPassword4"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">
                Enter Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <div className="col-12">
              <p>{validationMessage}</p>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  Remember me
                </label>
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
  </>
}

export default ClientProfile;
