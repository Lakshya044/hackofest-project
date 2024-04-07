import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Verification from "./Verification";
import IssuedWarrantsInsider from "./IssuedWarrantsInsider";
import Register_Complaint from "./Register_Complaint";

function IssuedWarrants() {
  return (
    <>
      <div class="row g-0 text-center">
        <div class="col-sm-6 col-md-8 m-4">
          <IssuedWarrantsInsider/>
        </div>
        <div class="col-6 col-md-4">
            <Verification/>
        </div>
        
      </div>
      <Register_Complaint/>
      
    </>
  );
}
export default IssuedWarrants;
