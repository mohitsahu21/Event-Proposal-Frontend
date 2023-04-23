import React from "react";
import "./Dropdown.css";

function Dropdown1() {

  return (
    <>
      <div>
      <div style={{marginRight:'153px'}}>
        <p>Proposal Type</p>
      <select name="proposal type" style={{width: '165px',
    height: '38px'}}>
        <option value=""></option>
        <option value="marriage">Marriage</option>
        <option value="birthday">Birthday</option>      
      </select>
    </div>
      </div>
    </>
  );
}

export default Dropdown1;
