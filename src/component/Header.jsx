import React, { Fragment, useState } from "react";
import "./Header.css";

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import {Routes, Route, NavLink} from "react-router-dom";
import { motion } from "framer-motion";



const Header = () => {

  const[color, setColor] = useState(1);
  const [tog, setTog] = useState(true);
  // const[olinkc, setOlinkc]=useState(1)

const link1 = () => {
  setTog(!tog);
  setColor(1);

}
const link2 = () => {
  setTog(!tog);
  setColor(2);
  
}

  return (
    <Fragment>

{!tog? disableBodyScroll(document) : enableBodyScroll(document)}
      <div className="container-fluid header">
        <div className="row">
          <div className="col-12 position-relative m-auto d-flex justify-content-between align-items-center">
          {tog && <i class="fas fa-bars start tog" onClick={()=>{setTog(!tog)}}></i>}
          {!tog && <i class="fas fa-times close tog" onClick={()=>{setTog(!tog)}}></i>}

                
            <img src="./images/mainlogo.png" alt="logo" />

            <div className="d-flex align-items-center justify-content-center menubar">
              <NavLink to="/" className="navlink" onClick={()=>{setColor(1)}}><p className="mx-3" style={color===1? {color:"#6CDFCE"} : {color:"#000"}}>DASHBOARD</p></NavLink>
              <NavLink to="/bill" className="navlink" onClick={()=>{setColor(2)}}><p className="mx-3" style={color===2? {color:"#6CDFCE"} : {color:"#000"}}>BILLING SYSTEMS</p></NavLink>
              <p className="mx-3" >INVENTORY</p>
            </div>

              <div className="d-flex align-items-center profile justify-content-between">
              <div className="d-flex justify-content-center align-items-center profilepic">
              <img
                  src="./images/propic.png"
                  alt="profilepic"
                  className="mx-2 proimg"
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


{/* 
      ......overlay............. */}
      {!tog && 
       <motion.div
       initial={{ height: "10vh", width: "10%" }}
       animate={{ height: "100vh", width: "100%" }}
       transition={{ duration: 0.5 }}
       className="container-fluid headlayer"
     >
       <div className="row">
         <div className="col-12 mt-5">
           <ul>
            <NavLink to="/"  className="holink" onClick={link1} > <li style={color===1 ? {color:"#6846E5"}: {color:"#fff"}}>DASHBOARD</li> </NavLink>
            <NavLink to="/bill" className="holink" onClick={link2} > <li style={color===2 ? {color:"#6846E5"}: {color:"#fff"}} >BILLING SYSTEM</li> </NavLink>
             <li>INVENTORY</li>
           </ul>
         </div>
       </div>

       <div className="col-12 bg-uccess d-flex mt-5">

       <img
                 src="./images/propic.png"
                 alt="profilepic"
                 className="mx-4 proimg"
               />
               <div style={{marginRight:"50px"}}>
                 <h6 className="m-0 text-light">Parth Dhandharia</h6>
                 <p className="m-0 text-light">Vendor</p>
               </div>
             <div>
               <i className="fas fa-bars text-light"></i>
             </div>
       </div>
    
     </motion.div>
      }  
    </Fragment>
  );
};

export default Header;
