import React from "react";
import "./Style.css";
function Looming() {
  return (
    <div>
      <div className="center">
        <form action="">
          <div>
            <h1>Loom Form</h1>
            <label>Warped yarn received : </label>
            <input type="radio" id="yes" name="yarnreceived" />
            <label htmlFor="yes">Yes</label>
            <input type="radio" id="no" name="yarnreceived" />
            <label htmlFor="no">No</label>
            <br />
            <br />
            <label htmlFor="orderno">Order Number : </label>
            <input type="text" id="orderno" />
            <br />
            <br />
            <label htmlFor="loomno">Loom Number : </label>
            <input type="dropdown" id="loomno" />
            <br />
            <br />
            <label htmlFor="totpicks">Total Picks : </label>
            <input type="text" id="totpicks" />
            <br />
            <br />
            <label htmlFor="target">Target : </label>
            <input type="text" id="target" />
            <br />
            <br />
            <label htmlFor="wastecol">Waste collection weight : </label>
            <input type="text" id="wastecol" />
            <br />
            <br />
            <label htmlFor="sup">Supervisor : </label>
            <input type="text" id="sup" />
            <br />
            <br />
            <button>Report</button>
          </div>

          <div></div>
        </form>
      </div>

      <div className="center">
        <form action="">
          <div>
            <h1>Downtime Form</h1>
            <label htmlFor="date">Date : </label>
            <input type="date" id="date" />
            <br />
            <br />
            <label>Shift : </label>
            <input type="radio" name="yarnreceived" />
            <label>1</label>
            <input type="radio" name="yarnreceived" />
            <label>2</label>
            <br />
            <br />
            <label>Weaver Name : </label>
            <input type="text" />
            <br />
            <br />
            <label>Downtime : </label>
            <input type="text" />
            <br />
            <br />
            <label>Remark : </label>
            <br />
            <textarea cols="50" rows="6"></textarea>

            <br />
            <label>Change Charge per day : </label>
            <button>Change</button>
            <br />
            <br />
            <label htmlFor="">Date : </label>
            <input type="date" />
            <br />
            <br />
            <label htmlFor="">Somet Charges : </label>
            <input type="text" />
            <br />
            <br />
            <label htmlFor="">Dornier Charges : </label>
            <input type="text" />
          </div>

          <div></div>
        </form>
      </div>
    </div>
  );
}

export default Looming;
