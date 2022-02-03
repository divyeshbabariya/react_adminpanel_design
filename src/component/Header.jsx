import React, { Fragment } from "react";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <div className="container-fluid header">
        <div className="row">
          <div className="col-12 m-auto d-flex justify-content-between align-items-center">
            <img src="./images/mainlogo.png" alt="logo" />

            <div className="d-flex align-items-center justify-content-center">
              <p className="mx-3">DASHBOARD</p>
              <p className="mx-3">BILLING SYSTEMS</p>
              <p className="mx-3">INVENTORY</p>
            </div>

              <div className="d-flex align-items-center profile justify-content-between">
              <div className="d-flex justify-content-center align-items-center">
              <img
                  src="./images/propic.png"
                  alt="profilepic"
                  className="mx-2"
                />
                <div>
                  <h6 className="m-0">Parth Dhandharia</h6>
                  <p className="m-0">Vendor</p>
                </div>
              </div>
                <i class="fas fa-bars"></i>
              </div>
              
            </div>
     
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
