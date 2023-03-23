import React from "react";
import { useState } from "react";
import "./Style.scss";

function JobCardDetails() {
  const [jobCardDetails, setjobCardDetails] = useState({
    yarnRequirement: "",
    warpCount: "",
    weftCount: "",
    reed: "",
    picks: "",
    warpingLength: "",
    conesToProduce: "",
    colorCoding: "",
    coneWeight: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setjobCardDetails((prevJobCardDetails) => ({
      ...prevJobCardDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(jobCardDetails);
  };

  console.log(jobCardDetails);
  return (
    <div className="center">
      <form  onSubmit={handleSubmit}>
        <h1>Enter Job Card Details : </h1>
        <label>Yarn Requirement: </label>
        <input
          type="text"
          name="yarnRequirement"
          value={jobCardDetails.yarnRequirement}
          onChange={handleInputChange}
        />
        <br />
        <label>Warp count: </label>
        <input
          type="text"
          name="warpCount"
          value={jobCardDetails.warpCount}
          onChange={handleInputChange}
        />
        <br />
        <label>Weft count: </label>
        <input
          type="text"
          name="weftCount"
          value={jobCardDetails.weftCount}
          onChange={handleInputChange}
        />
        <br />
        <label>Reed: </label>
        <input
          type="text"
          name="reed"
          value={jobCardDetails.reed}
          onChange={handleInputChange}
        />
        <br />
        <label>Picks: </label>
        <input
          type="text"
          name="picks"
          value={jobCardDetails.picks}
          onChange={handleInputChange}
        />
        <br />
        <label>Warping Length: </label>
        <input
          type="text"
          name="warpingLength"
          value={jobCardDetails.warpingLength}
          onChange={handleInputChange}
        />
        <br />
        <label>Cone to produced: </label>
        <input
          type="text"
          name="conesToProduce"
          value={jobCardDetails.conesToProduce}
          onChange={handleInputChange}
        />
        <br />
        <label>Color coding: </label>
        <input
          type="text"
          name="colorCoding"
          value={jobCardDetails.colorCoding}
          onChange={handleInputChange}
        />
        <br />
        <label>Weight of cones: </label>
        <input
          type="text"
          name="coneWeight"
          value={jobCardDetails.coneWeight}
          onChange={handleInputChange}
        />
        <br />
      </form>

      {/* <form action="">
        <h1>Enter Job Card Details : </h1>
        <label>Yarn Requirement : </label>
        <input type="text" />
        <br />
        <label>Warp count : </label>
        <input type="text" />
        <br />
        <label>Weft count : </label>
        <input type="text" />
        <br />
        <label>Reed : </label>
        <input type="text" />
        <br />
        <label>Picks : </label>
        <input type="text" />
        <br />
        <label>Warping Length : </label>
        <input type="text" />
        <br />
        <label>Cone to produced : </label>
        <input type="text" />
        <br />
        <label>Color coding : </label>
        <input type="text" />
        <br />
        <label>Weight of cones : </label>
        <input type="text" />
        <br />
      </form> */}
    </div>
  );
}

export default JobCardDetails;
