import React from "react";
import "./Dropdown.css";


function Dropdown() {
  

  return (
    <div style={{marginRight:'153px'}}>
      <p>Place of Event</p>
      <select name="place of event" style={{width: '165px',
    height: '38px'}}>
        <option value=""></option>
        <option value="marriage">Banglore</option>
        <option value="birthday">Delhi</option>      
      </select>
    </div>
  );
}
export default Dropdown;
