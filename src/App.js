import React, { Fragment } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DashBoard from "./component/DashBoard";
import Header from "./component/Header";
import NewBill from "./component/NewBill";
import { BrowserRouter as Router } from "react-router-dom";
import {Routes, Route} from 'react-router-dom';



function App() {
  return(
    <Fragment>
      <Header />
      
      <Routes>
    <Route path="/" element={<DashBoard />}></Route>
    <Route path="/bill" element={<NewBill />}></Route> 

      </Routes>
    </Fragment>
  )
}

export default App;
