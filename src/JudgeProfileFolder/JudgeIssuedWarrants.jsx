import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import JudgeIssuedWarrantsInsider from "./JudgeIssuedWarrantsInsider";
import JudgeVerification from "./Judge_Verification";
// import JudgeRegisterComplaint from "./JudgeRegisterComplaint";

function JudgeIssuedWarrants() {
  return (
    <>
      <div class="row g-0 text-center">
        <div class="col-sm-6 col-md-8 m-4">
          <JudgeIssuedWarrantsInsider/>
        </div>
        <div class="col-6 col-md-4">
            <JudgeVerification/>
        </div>
        
      </div>
      {/* <JudgeRegisterComplaint/> */}
      
    </>
  );
}
export default JudgeIssuedWarrants;
