import React from "react";
import warrantBuddy from "../Assets/warrantBuddy.jpg";
import {
  BsBootstrap,
  BsTwitter,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional smooth scrolling animation
  });
};
function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-6 d-flex align-items-center">
          <a
            href=""
            className="col-md-4 p-0 pe-2 text-muted text-decoration-none lh-1"
            // Call scrollToTop function when clicked
          >
            <img
              src={warrantBuddy}
              width="70%"
              className="d-inline-block align-top m-0"
              alt="Preamble"
            />
          </a>
          <span className="text-muted">© 2024 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="#">
              <BsTwitter size={24} />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <BsInstagram size={24} />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <BsFacebook size={24} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
