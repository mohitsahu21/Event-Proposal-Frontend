import React from "react";
import "./Events.css";

function Events(props) {
  return (
    <div className="event-container">
      <div className="eventname">
        {props.data.eventname}<br />
        {props.data.eventext}
      </div>

      <div className="eventdetails">
        <div className="eventtype">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>Event Type</p>
          {props.data.eventtype}
        </div>
        <div className="proposaltype">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>Proposal Type</p>
          {props.data.proposaltype}
        </div>
        <div className="fromdate">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>From Date</p>
          {props.data.fromdate}
        </div>
        <div className="todate">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>To Date</p>
          {props.data.todate}
        </div>
        <div className="budget">
          <p style={{ color: "#AAAAAA", lineHeight: "0pt" }}>Budget</p>{props.data.budget}
        </div>{" "}
        <div className="eventimg">
          <div className="editimg"></div>
          <div className="deleteimg"></div>
        </div>
      </div>
    </div>
  );
}

export default Events;
