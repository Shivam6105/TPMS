import React, { useState } from "react";

import "./Style.scss";

function LoomLoading() {
  const [loomLoading, setLoomLoading] = useState({
    date: "",
    loomNo: "",
    orderNo: "",
    orderDetails: "",
    loomPerDay: "",
    charges: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoomLoading((prevLoomLoading) => ({
      ...prevLoomLoading,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  console.log(loomLoading);
  return (
    <div className="center">
      <form action="">
        <h1>Enter Loom Loading Details : </h1>
        <label>Date : </label>
        <input
          type="date"
          name="date"
          value={loomLoading.date}
          onChange={handleInputChange}
        />
        <br />
        <label>Loom no : </label>
        <input
          type="text"
          name="loomNo"
          value={loomLoading.loomNo}
          onChange={handleInputChange}
        />
        <br />
        <label>Order no : </label>
        <input
          type="text"
          name="orderNo"
          value={loomLoading.orderNo}
          onChange={handleInputChange}
        />
        <br />
        <label>Order Details : </label>
        <input
          type="text"
          name="orderDetails"
          value={loomLoading.orderDetails}
          onChange={handleInputChange}
        />
        <br />
        <label>Loom per day : </label>
        <input
          type="text"
          name="loomPerDay"
          value={loomLoading.loomPerDay}
          onChange={handleInputChange}
        />
        <br />
        <label>Charges : </label>
        <input
          type="text"
          name="charges"
          value={loomLoading.charges}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default LoomLoading;
