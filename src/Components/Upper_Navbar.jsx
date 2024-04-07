import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import tiranga from "../Assets/tiranga.jpg" ;
function Upper_Navbar() {
  return (
    <div className=" navbar  ">
      <div className="m-2">
        <img
          src={tiranga}
          width="50"
          height="50"
          className="d-inline-block align-top mr-2"
          alt="Preamble"
        />
      </div>
      <div className="m-2">GOVERNMENT OF INDIA</div>
    </div>
  );
}

export default Upper_Navbar;
