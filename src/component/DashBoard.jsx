import React, { Fragment, useState } from "react";
import "./DashBoard.css";
import DashPenal from "./DashPenal";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


const DashBoard = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [tog,setTog] = useState(true);

  const data = [
    { name: "Mon", uv: 200, pv: 2400, amt: 200 },
    { name: "Tue", uv: 100, pv: 2400, amt: 2400 },
    { name: "Wed", uv: 200, pv: 2400, amt: 2400 },
    { name: "Thu", uv: 100, pv: 2400, amt: 2400 },
    { name: "Fri", uv: 300, pv: 2400, amt: 2400 },
    { name: "Sat", uv: 250, pv: 2400, amt: 2400 },
    { name: "Sun", uv: 150, pv: 2400, amt: 2400 },
    { name: "Mon", uv: 200, pv: 2400, amt: 2400 },
    { name: "Tue", uv: 100, pv: 2400, amt: 2400 },
    { name: "Wed", uv: 150, pv: 2400, amt: 2400 },
  ];

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1200) {
      setWidth(window.innerWidth / 2);
    } else if (window.innerWidth > 991) {
      setWidth(window.innerWidth / 2);
    } else setWidth(window.innerWidth - 50);
  });

  window.addEventListener("load", function () {
    if (window.innerWidth > 1200) {
      setWidth(window.innerWidth / 2);
    } else if (window.innerWidth > 991) {
      setWidth(window.innerWidth / 2);
    } else setWidth(window.innerWidth - 50);
  });

  return (
    <Fragment>
      <div className="container-fluid togglebar">
        <div className="row">
          <div className="col togbox p-0 m-0">
        
           {tog ? <i className="fas fa-bars togs start m-0" onClick={()=>{setTog(!tog)}}></i> : <i className="fas fa-times togs close m-0 text-light" onClick={()=>{setTog(!tog)}}></i>}
           {!tog? <DashPenal /> : ""}
           {!tog? disableBodyScroll(document) : enableBodyScroll(document)}
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row dashboard">
        <div className="col-lg-2 col-md-12 col-sm-3 dashleft">
            <div className="row">
              <div className="col dashlpenal">
                <h1 className="dashlogo text-light m-0 p-0 text-center mt-3">
                  <span>Inc</span>relo
                </h1>
                <p className="m-0 p-0 text-light text-light text-center logol">
                  Earning Done right
                </p>

                <div className="penallist">
                  <table>
                    <tr>
                      <td>
                        <i className="fas fa-chart-line"></i>
                      </td>
                      <td>
                        <p>Dashboard</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="far fa-file-alt"></i>
                      </td>
                      <td>
                        <p>Create New Bill</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="far fa-copy"></i>
                      </td>
                      <td>
                        <p>Inventory</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-user-friends"></i>
                      </td>
                      <td>
                        <p>My Employees</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-user-check"></i>
                      </td>
                      <td>
                        <p>My Customers</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-ad"></i>
                      </td>
                      <td>
                        <p>My Ads</p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* .....middle......*/}

          <div className="col-lg-7 col-md-12 mid">
            <div className="row">
              <div className="col-11 m-auto">
                <div className="row mt-4">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-6 d-flex flex-column justify-content-center align-items-center topbox">
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src="./images/totalsell.png"
                        alt="totalsell"
                        className="mx-1"
                      />
                      <p className="text-dark m-0 p-0 ">Total sales:</p>
                    </div>
                    <h3 className="m-0 p-0">92%</h3>
                    <p className="m-0 p-0">+40%</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-6 d-flex flex-column justify-content-center align-items-center topbox">
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src="./images/totalsell.png"
                        alt="totalsell"
                        className="mx-1"
                      />
                      <p className="text-dark m-0 p-0 ">Total sales:</p>
                    </div>
                    <h3 className="m-0 p-0">92%</h3>
                    <p className="m-0 p-0">+40%</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 total3 col-6 d-flex flex-column justify-content-center align-items-center topbox">
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src="./images/totalsell.png"
                        alt="totalsell"
                        className="mx-1"
                      />
                      <p className="text-dark m-0 p-0 ">Total sales:</p>
                    </div>
                    <h3 className="m-0 p-0">92%</h3>
                    <p className="m-0 p-0">+40%</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-6 d-flex flex-column total4 justify-content-center align-items-center topbox">
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src="./images/totalsell.png"
                        alt="totalsell"
                        className="mx-1"
                      />
                      <p className="text-dark m-0 p-0 ">Total sales:</p>
                    </div>
                    <h3 className="m-0 p-0">92%</h3>
                    <p className="m-0 p-0">+40%</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-11 graphtitle mt-5 d-flex justify-content-between align-items-center">
                    <div><h2 className="m-0">Business growth</h2>
                    <p>Overall information</p></div>
                    <div className="d-flex">
                    <p className="title2 m-0 p-0 mx-3">Monthly</p>
                    <p className="title3 m-0 p-0">Yearly</p>
                  </div>
                  </div>
                 
                  <div className="col-11 mt-5 d-flex d-flex justify-content-center align-items-center">
                    <BarChart
                      width={width}
                      height={400}
                      data={data}
                      className="barwidth"
                    >
                      <XAxis dataKey="name" stroke="#6CDFCE" />
                      <YAxis stroke="#6CDFCE" />
                      <Tooltip
                        wrapperStyle={{ width: 100, backgroundColor: "#ccc" }}
                      />
                      <Legend
                        width={100}
                        wrapperStyle={{
                          top: 40,
                          right: 20,
                          backgroundColor: "#f5f5f5",
                          border: "1px solid #d5d5d5",
                          borderRadius: 3,
                          lineHeight: "40px",
                        }}
                      />
                      <CartesianGrid stroke="#6CDFCE" strokeDasharray="5 5" />
                      <Bar
                        dataKey="uv"
                        fill="#6CDFCE"
                        barSize={20}
                        className="bar"
                      />
                    </BarChart>
                  </div>
                </div>

                <div className="row admidb m-auto">
                  <div className="col-lg-4 col-md-4 m-auto  col-sm-4 col-6 bbox mt-4">
                    <img
                      src="./images/adb1.png"
                      alt="bottomicon"
                      className="mx-2"
                    />
                    <div>
                      <p>Generate</p>
                      <p>Billing Report</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 m-auto col-sm-4 col-6 bbox mt-4">
                    <img
                      src="./images/adb1.png"
                      alt="bottomicon"
                      className="mx-2"
                    />
                    <div>
                      <p>Generate</p>
                      <p>Billing Report</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-sm-4 m-auto col-6 bbox mt-4">
                    <img
                      src="./images/adb1.png"
                      alt="bottomicon"
                      className="mx-2"
                    />
                    <div>
                      <p>Generate</p>
                      <p>Billing Report</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-sm-4 m-auto col-6 bbox mt-4">
                    <img
                      src="./images/adb1.png"
                      alt="bottomicon"
                      className="mx-2"
                    />
                    <div>
                      <p>Generate</p>
                      <p>Billing Report</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-sm-4 m-auto col-6 bbox mt-4">
                    <img
                      src="./images/adb1.png"
                      alt="bottomicon"
                      className="mx-2"
                    />
                    <div>
                      <p>Generate</p>
                      <p>Billing Report</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-sm-4 m-auto col-6 bbox mt-4">
                    <img
                      src="./images/adb1.png"
                      alt="bottomicon"
                      className="mx-2"
                    />
                    <div>
                      <p>Generate</p>
                      <p>Billing Report</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* .....middle......*/}

          <div className="col-lg-3 col-md-5 col-md-12 mx-auto dashright">
            <div className="row">
              <div className="col-11 profile d-flex justify-content-between align-items-center mt-5 m-auto">
                <div className="d-flex align-items-center">
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

              <div className="col-11 m-auto options my-3 d-flex justify-content-between align-items-center">
                <div>
                  <p className="title m-0">Add A Vendor</p>
                  <p className="text m-0">Lorem ipsum dolor sit amet.</p>
                </div>
                <img src="./images/nexticon.png" alt="nexticon" />
              </div>
              <div className="col-11 m-auto options my-3 d-flex justify-content-between align-items-center">
                <div>
                  <p className="title m-0">Add A Vendor Emoloyee</p>
                  <p className="text m-0">Lorem ipsum dolor sit amet.</p>
                </div>
                <img src="./images/nexticon.png" alt="nexticon" />
              </div>
              <div className="col-11 m-auto options my-3 d-flex justify-content-between align-items-center">
                <div>
                  <p className="title m-0">Add An Increlo Employee</p>
                  <p className="text m-0">Lorem ipsum dolor sit amet.</p>
                </div>
                <img src="./images/nexticon.png" alt="nexticon" />
              </div>
              <div className="col-11 m-auto options my-3 d-flex justify-content-between align-items-center">
                <div>
                  <p className="title m-0">Create An Add</p>
                  <p className="text m-0">Lorem ipsum dolor sit amet.</p>
                </div>
                <img src="./images/nexticon.png" alt="nexticon" />
              </div>
              <div className="col-11 m-auto options mt-5 my-3 d-flex justify-content-between align-items-center">
                <p className="title m-0">Analytics</p>
              </div>

              <div className="col-11 m-auto datebox datebox1 my-3 d-flex justify-content-evenly align-items-center mt-5">
                <div className="d-flex justify-context-center align-items-center flex-column">
                  <p className="m-0 date">23</p>
                  <p className="m-0 month">March</p>
                </div>
                <div className="d-flex justify-context-center align-items-center flex-column">
                  <p className="m-0 date">23</p>
                  <p className="m-0 month">March</p>
                </div>
                <div className="d-flex justify-context-center align-items-center flex-column">
                  <p className="m-0 date">23</p>
                  <p className="m-0 month">March</p>
                </div>
              </div>

              <div className="col-11 m-auto pb-5 datebox m-0 d-flex justify-content-evenly align-items-center">
                <div>
                  <p>Mo</p>
                  <p className="num">12</p>
                </div>
                <div>
                  <p>Tu</p>
                  <p className="num">12</p>
                </div>
                <div>
                  <p>We</p>
                  <p className="num">12</p>
                </div>
                <div>
                  <p>Th</p>
                  <p className="num">12</p>
                </div>
                <div>
                  <p>Fr</p>
                  <p className="num">12</p>
                </div>
                <div>
                  <p>Sa</p>
                  <p className="num">12</p>
                </div>
                <div>
                  <p>Su</p>
                  <p className="num">12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DashBoard;
