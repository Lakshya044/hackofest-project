import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function JudgeVerification() {
  return (
    <div className="position-absolute top-0 end-0 mt-3 me-3">
      <div className="list-group bg-primary text-white">
        <h2 className="text-center">Verification</h2>
        <hr className="text-white" />
        <a href="#" className="list-group-item list-group-item-action verification-text">
          Verify Email
        </a>
        <a href="#" className="list-group-item list-group-item-action verification-text">
          Verify Phone Number
        </a>
        <a href="#" className="list-group-item list-group-item-action verification-text">
          Verify Identity
        </a>
      </div>
    </div>
  );
}

export default JudgeVerification;
