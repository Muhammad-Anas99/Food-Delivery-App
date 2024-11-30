import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <div>
        <footer className="d-flex text-align-center flex-wrap text-white justify-content-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex ">
            <Link
              to="/"
              className="mb-3 me-2 mb-md-0 text-decoration-none lh-1"
            ></Link>
            <span className="">©{year} FOOD DELIVERY APP, Inc</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
