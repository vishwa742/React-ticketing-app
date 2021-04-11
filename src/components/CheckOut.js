import React from "react";

function CheckOut() {
  return (
    <div className="container">
      <h1>Check Out</h1>
      <div>
        <p>Enter contact details</p>
        <span>
          <form className="form">
            <div className="form">
              <label>
                Name:
                <input type="text" name="name" />
              </label>
            </div>
            <div className="form">
              <label>
                Email:
                <input type="email" name="email" />
              </label>
            </div>
            <div className="form">
              <label>
                Number:
                <input type="number" name="name" />
              </label>
            </div>

            <input type="submit" value="Submit" />
          </form>
        </span>
        <p>Work in Progress</p>
      </div>
    </div>
  );
}

export default CheckOut;
