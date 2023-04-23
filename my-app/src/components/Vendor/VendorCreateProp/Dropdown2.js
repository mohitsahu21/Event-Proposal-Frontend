import React from "react";
import "./Dropdown.css";

function Dropdown2() {
  return (
    <>
      <div style={{ marginRight: "153px" }}>
        <p>Event Type</p>
        <select name="event type" style={{width: '165px',
    height: '38px'}}>
          <option value=""></option>
          <option value="marriage">Marriage</option>
          <option value="birthday">Birthday</option>
        </select>
      </div>
    </>
  );
}

export default Dropdown2;
