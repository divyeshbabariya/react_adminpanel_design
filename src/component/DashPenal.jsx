import React,{Fragment} from "react";
import {motion} from "framer-motion";


const DashPenal = ()=> {
    return(
        <Fragment>
<motion.div 
initial={{height:"10vh", width:"10%"}}
animate={{height:"100vh", width:"100%"}}
transition={{duration:0.5}}
className="container-fluid toglayer">
    <div className="row d-flex justify-content-center align-items-center">
  <div className="col-12 d-flex flex-column justify-content-flex-start mx-5 mt-5 align-items-center">
  
  <h1 className="dashlogo text-light m-0 p-0 text-center mt-3">
                  <span>Inc</span>relo
                </h1>
                <p className="m-0 p-0 text-light text-light text-center logol">
                  Earning Done right
                </p>
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
</motion.div>
         
        </Fragment>
    )
}

export default DashPenal;