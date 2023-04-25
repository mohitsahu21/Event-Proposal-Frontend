import React, { useEffect, useState } from "react";
import "./Events.css";
import { Link } from "react-router-dom";
import editIcon from "../../../images/pencil-edit-button.jpg";
import deleteIcon from "../../../images/bin.jpg";
import { useNavigate } from "react-router-dom";




function Events(props) {
  
  const navigate = useNavigate();
  
  return (
    <div className="event-container">
      <div className="eventname">
        {props.data.eventName}<br />
        {props.data.description}
      </div>

      <div className="eventdetails">
        <div className="eventtype">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>Event Type</p>
          {props.data.eventType}
        </div>
        <div className="proposaltype">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>Proposal Type</p>
          {props.data.proposalType}
        </div>
        <div className="fromdate">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>From Date</p>
          {props.data.fromDate}
        </div>
        <div className="todate">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>To Date</p>
          {props.data.toDate}
        </div>
        <div className="budget">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>Budget</p>{props.data.budget}
        </div>{" "}
        <div className="eventimg">
          <div className="editimg" >    <img  src={editIcon}></img> </div>
          <div className="deleteimg"> <img src={deleteIcon}  onClick={ () => props.delete(props.id) } ></img></div>
        </div>
      </div>
    </div>
  );
}

export default Events;
