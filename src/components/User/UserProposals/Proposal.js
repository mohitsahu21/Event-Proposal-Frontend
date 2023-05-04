import { useEffect, useState, navigate } from "react";
import React from "react";
import "./Proposal.css";
import { Link } from "react-router-dom";
import Proposaldetail from "./Proposaldetail";
import img from '../../../images/render.jpg'

function Proposal(props) {

  return (
    <>
      <div className="userproposal">
        <div className="prop-img">
          <img
            src={props.data.venueImage? props.data.venueImage[0]: img}
            alt="img.jpg"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <Link to={`/Proposaldetail/${props.data._id}`} style={{ textDecoration: "none" }} >
          <div
            className="venname"
            style={{ margin: "0px 0px 0px 10px", fontSize: "18px" }}
          >
            {props.data.eventName}
          </div>
          <div
            className="budge"
            style={{ fontSize: "13px", margin: "0px 0px 0px 10px" }}
          >
            {props.data.budget}
          </div>
          <div
            className="locatin"
            style={{ marginLeft: "10px", fontSize: "14px" }}
          >
            {props.data.placeOfEvent}
          </div>
        </Link>
      </div>
    </>
  );
}

export default Proposal;
