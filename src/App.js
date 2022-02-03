import React, {Fragment} from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DashBoard from "./component/DashBoard";
import Header from "./component/Header";
import NewBill from "./component/NewBill";

function App() {
  return (
<Fragment>
{/* <Header /> */}
<NewBill />
{/* <DashBoard /> */}
</Fragment>
  );
}

export default App;
