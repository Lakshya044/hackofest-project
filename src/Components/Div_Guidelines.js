import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
// import App from "./App.css";
import Right from "../Assets/Right.png"

function Div_Guidelines() {
  return (
    <>
      <div className="container text-center box">
        <div className="row align-items-center">
          <div className="col ">
            <div id="starting">
              Getting Started is  <br /> 
              Quick and Easy
            </div>           
          </div>
          <div className="col">
            <img src="https://img1.digitallocker.gov.in/assets/img/icons/register-you.svg" alt=""/>
            <img src= {Right} alt="" classNameName="right" />
            <div>Register Youself </div>  
          </div>
          <div className="col">
            <div><img src="https://img1.digitallocker.gov.in/assets/img/icons/verify-you.svg" alt="" />
            <img src= {Right} alt="" classNameName = "right"/>
            </div>
            <div>Verify Yourself </div>  
          </div>
          <div className="col">
            <div><img src="https://img1.digitallocker.gov.in/assets/img/icons/fetch-doc.svg" alt="" /></div>
            <div>Check Warrant Status</div>
          </div>
        </div>
      </div>

      <div className="signup-2">
        <h3> <b>WarrantBuddy</b> is a user-friendly platform revolutionizing <i>Warrant Management</i>  with digital issuance and real-time updates, ensuring transparency and efficiency in the process.</h3>
        <br />
        <a class="btn btn-primary" href="/signup" role="button"><button class="btn btn-primary"  type="submit" >Sign-Up Now</button></a>
             

      </div>
    </>
  );
}
export default Div_Guidelines;
