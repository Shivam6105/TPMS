import React from "react";
import "./Style.css";

const Warping = () => {
  return (
    <div className="center">
      <form action="">
        <div>
          <h1>Warp Form</h1>
          <label>Warped yarn received : </label>
          <input type="radio" id="yes" name="yarnreceived" />
          <label htmlFor="yes">Yes</label>
          <input type="radio" id="no" name="yarnreceived" />
          <label htmlFor="no">No</label>
          <br />
          <br />
          <label>Final weight of warped yarn : </label>
          <input type="text" />
          <br />
          <br />
          <label>Waste collection weight : </label>
          <input type="dropdown" />
          <br />
          <br />
          <label>Package defects if any : </label>
          <input type="text" />
          <br />
          <br />
          <button>Report</button>
        </div>

        <div></div>
      </form>
    </div>
  );
};

export default Warping;
