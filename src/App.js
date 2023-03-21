import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Admin/Home";
import OrderDetails from "./Components/Admin/OrderDetails";
import Layout from "./Components/Layout";
// import Looming from "./Components/Looming";
// import Warping from "./Components/Warping";
import LoomLoading from "./Components/Admin/LoomLoading";
import Registration from "./Components/Admin/Registration";
import Monitoring from "./Components/Admin/Monitoring";
import LoomAnalysis from "./Components/Admin/LoomAnalysis";
import ShiftAnalysis from "./Components/Admin/ShiftAnalysis";
import JobCardDetails from "./Components/Admin/JobCardDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="orderdetails" element={<OrderDetails />} />
            <Route path="jobcarddetials" element={<JobCardDetails />} />
            <Route path="loomloading" element={<LoomLoading />} />
            <Route path="registration" element={<Registration />} />
            <Route path="monitor" element={<Monitoring />} />
            <Route path="loomanalysis" element={<LoomAnalysis />} />
            <Route path="shiftanalysis" element={<ShiftAnalysis />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
