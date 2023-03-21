import React from "react";
import { useState } from "react";
import "./Style.scss"
function OrderDetails() {
  const [orderDetails, setOrderDetails] = useState({
    designNo: "",
    orderNo: "",
    companyName: "",
    quality: "",
    orderQuality: "",
    ppc: "",
    rate: "",
    deadline: "",
    count: "",
    construction: "",
    lengthOfCloth: "",
    orderDate: "",
    colors: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(orderDetails);
    // Here you can perform any additional logic, like sending the form data to the server
  };

  console.log(orderDetails)
    return (
      <div className="center">
        <form onSubmit={handleSubmit}>
          <h1>Enter Order Details:</h1>
          <label>Design no: </label>
          <input
            type="text"
            name="designNo"
            value={orderDetails.designNo}
            onChange={handleInputChange}
          />
          <br />
          <label>Order no: </label>
          <input
            type="text"
            name="orderNo"
            value={orderDetails.orderNo}
            onChange={handleInputChange}
          />
          <br />
          <label>Company Name: </label>
          <input
            type="text"
            name="companyName"
            value={orderDetails.companyName}
            onChange={handleInputChange}
          />
          <br />
          <label>Quality: </label>
          <input
            type="text"
            name="quality"
            value={orderDetails.quality}
            onChange={handleInputChange}
          />
          <br />
          <label>Order Qulity: </label>
          <input
            type="text"
            name="orderQuality"
            value={orderDetails.orderQuality}
            onChange={handleInputChange}
          />
          <br />
          <label>PPC: </label>
          <input
            type="text"
            name="ppc"
            value={orderDetails.ppc}
            onChange={handleInputChange}
          />
          <br />
          <label>Rate: </label>
          <input
            type="text"
            name="rate"
            value={orderDetails.rate}
            onChange={handleInputChange}
          />
          <br />
          <label>Deadline: </label>
          <input
            type="date"
            name="deadline"
            value={orderDetails.deadline}
            onChange={handleInputChange}
          />
          <br />
          <label>Count: </label>
          <input
            type="text"
            name="count"
            value={orderDetails.count}
            onChange={handleInputChange}
          />
          <br />
          <label>Construction: </label>
          <input
            type="text"
            name="construction"
            value={orderDetails.construction}
            onChange={handleInputChange}
          />
          <br />
          <label>Length of cloth: </label>
          <input
            type="text"
            name="lengthOfCloth"
            value={orderDetails.lengthOfCloth}
            onChange={handleInputChange}
          />
          <br />
          <label>Order Date: </label>
          <input
            type="date"
            name="orderDate"
            value={orderDetails.orderDate}
            onChange={handleInputChange}
          />
          <br />
          <label>Colors: </label>
          <input
            type="text"
            name="colors"
            value={orderDetails.colors}
            onChange={handleInputChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>

        {/* <form action="">
        <h1>Enter Order Details : </h1>
        <label>Design no : </label>
        <input type="text" />
        <br />
        <label>Order no : </label>
        <input type="text" />
        <br />
        <label>Company Name : </label>
        <input type="text" />
        <br />
        <label>Quality : </label>
        <input type="text" />
        <br />
        <label>Order Qulity : </label>
        <input type="text" />
        <br />
        <label>PPC : </label>
        <input type="text" />
        <br />
        <label>Rate : </label>
        <input type="text" />
        <br />
        <label>Deadline : </label>
        <input type="date" />
        <br />
        <label>Count : </label>
        <input type="text" />
        <br />
        <label>Construction : </label>
        <input type="text" />
        <br />
        <label>Length of cloth : </label>
        <input type="text" />
        <br />
        <label>Order Date : </label>
        <input type="date" />
        <br />
        <label>Colors : </label>
        <input type="text" />
        <br />
      </form> */}
      </div>
    );
  };


export default OrderDetails;
