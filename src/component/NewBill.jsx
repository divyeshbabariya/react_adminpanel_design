import React, { Fragment } from "react";
import "./NewBill.css";
import { Button } from "@material-ui/core";




const NewBill = () => {
  return (
    <Fragment>



      <div className="container-fluid newbill pb-5">
        <div className="row m-auto">
          <div className="col-12">
            <h1 className="my-5 mx-4">New Bill</h1>
          </div>
          <div className="row first m-auto">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-md-11 m-auto">
                  <p>Customer Name</p>
                  <input type="text" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-md-11 col-12 m-auto">
                  <p>Customer Points</p>
                  <input type="number" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-md-11 m-auto">
                  <p>Phone No.</p>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>

          <div className="row second mt-3 m-auto">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="row">
                <div className="col-md-11 m-auto">
                  <p>Search Items</p>
                  <input type="text" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="row">
                <div className="col-md-11 m-auto">
                  <p>Quantity</p>
                  <input type="number" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="row">
                <div className="col-md-11 m-auto">
                  <p>Coupan Code</p>
                  <input type="text" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="row">
                <div className="col-md-11 m-auto">
                  <p>Discount (%)</p>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 fistbtncol">
              <Button color="primary" variant="contained" className="addbtn">
                <p>Add</p>
              </Button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mt-3 tablebox">
            <table>
              <thead>
                <tr>
                  <th>item Name</th>
                  <th>Unit</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>Discount</th>
                  <th>Additional Discount</th>
                  <th>Best Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>item Name</td>
                  <td>Unit</td>
                  <td>Quantity</td>
                  <td>Rate</td>
                  <td>Discount</td>
                  <td>Additional Discount</td>
                  <td>Best Price</td>
                </tr>
                <tr>
                  <td>item Name</td>
                  <td>Unit</td>
                  <td>Quantity</td>
                  <td>Rate</td>
                  <td>Discount</td>
                  <td>Additional Discount</td>
                  <td>Best Price</td>
                </tr>

                <tr>
                  <td>item Name</td>
                  <td>Unit</td>
                  <td>Quantity</td>
                  <td>Rate</td>
                  <td>Discount</td>
                  <td>Additional Discount</td>
                  <td>Best Price</td>
                </tr>

                <tr>
                  <td>item Name</td>
                  <td>Unit</td>
                  <td>Quantity</td>
                  <td>Rate</td>
                  <td>Discount</td>
                  <td>Additional Discount</td>
                  <td>Best Price</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col-12 secondbtncol d-flex justify-content-between align-items-center px-5">
            <h1 className="m-0">Total <span>$345</span></h1>
          <div>
          <Button color="primary" variant="contained" className="addbtn mx-3">
              <p>Reset</p>
            </Button>
            <Button color="primary" variant="contained" className="addbtn">
              <p>Preview</p>
            </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewBill;
