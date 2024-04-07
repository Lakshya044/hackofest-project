import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function JudgeRegisterComplaint() {
  return (
    <>
      <div className="satyam d-flex flex-column align-items-center justify-content-center m-2 p-2">
        <h1 className="text-white">Register a Complaint</h1>
        <br />
        <div className="complaint-form text-white">
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="input1">Against</label>
                  <input
                    type="text"
                    className="form-control"
                    id="input1"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="input2">Son Of</label>
                  <input
                    type="text"
                    className="form-control"
                    id="input2"
                    placeholder="Father's Name"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="input3">Address of Accused</label>
                  <input
                    type="text"
                    className="form-control"
                    id="input3"
                    placeholder="Address"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="input4">Pin Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="input4"
                    placeholder="Pin-Code"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <label htmlFor="input5">Your Complaint</label>
                  <input
                    type="text"
                    className="form-control"
                    id="input5"
                    placeholder="Type your text here"
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

export default JudgeRegisterComplaint;
