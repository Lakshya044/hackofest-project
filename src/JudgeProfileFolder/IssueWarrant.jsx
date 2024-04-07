import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function IssueWarrant() {
  const [warrantType, setWarrantType] = useState("Search Warrant");
  const [warrantStatus, setWarrantStatus] = useState("Open");

  const handleWarrantTypeChange = (e) => {
    setWarrantType(e.target.value);
  };

  const handleWarrantStatusChange = (e) => {
    setWarrantStatus(e.target.value);
  };

  return (
    <>
      <div className="satyam d-flex flex-column align-items-center justify-content-center m-2 p-8">
        <h1 className="text-white">Issue A Warrant</h1>
        <br />
        <div className="complaint-form text-white">
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="warrantNo">Warrant No</label>
                  <input
                    type="text"
                    className="form-control"
                    id="warrantNo"
                    placeholder="Warrant No"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="warrantType">Warrant Type</label>
                  <select
                    className="form-control"
                    id="warrantType"
                    value={warrantType}
                    onChange={handleWarrantTypeChange}
                  >
                    <option value="Search Warrant">Search Warrant</option>
                    <option value="Arrest Warrant">Arrest Warrant</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="accussedName">Accused Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="accussedName"
                    placeholder="Accused Name"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="aadharNo">Aadhar No</label>
                  <input
                    type="text"
                    className="form-control"
                    id="aadharNo"
                    placeholder="Aadhar No"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="accussedAddress">Address of Accused</label>
                  <input
                    type="text"
                    className="form-control"
                    id="accussedAddress"
                    placeholder="Address"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="accussedPin">Pin Code of Accused</label>
                  <input
                    type="text"
                    className="form-control"
                    id="accussedPin"
                    placeholder="Pin Code"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="policeStation">Police Station</label>
                  <input
                    type="text"
                    className="form-control"
                    id="policeStation"
                    placeholder="Police Station"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="warrantStatus">Status of Warrant</label>
                  <select
                    className="form-control"
                    id="warrantStatus"
                    value={warrantStatus}
                    onChange={handleWarrantStatusChange}
                  >
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <label htmlFor="issueReason">Reason of Issue</label>
                  <input
                    type="text"
                    className="form-control"
                    id="issueReason"
                    placeholder="Reason of Issue"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <button type="button" className="btn btn-primary btn-cmpln">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default IssueWarrant;
