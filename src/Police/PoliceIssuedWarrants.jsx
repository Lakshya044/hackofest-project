import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PoliceIssuedWarrantsInsider from "./PoliceIssuedWarrantsInsider" ;
import PoliceVerification from "./Police_Verification";
function PoliceIssuedWarrants() {
  return (
    <>
      <div class="row g-0 text-center">
        <div class="col-sm-6 col-md-8 m-4">
          <PoliceIssuedWarrantsInsider/>
        </div> <br />
        <div class="col-6 col-md-4">
            <PoliceVerification/>
        </div>
        
      </div>
      {/* <JudgeRegisterComplaint/> */}
      
    </>
  );
}
export default PoliceIssuedWarrants;
