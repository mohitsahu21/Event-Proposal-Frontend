import React, { useEffect, useState } from "react";
import UserNav from "./UserNav";
import Proposal from "./Proposal";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context";
import img from '../../../images/render.jpg'
import Swal from 'sweetalert2'

function Userprop() {
  const navigate = useNavigate();
  const [proposal, setProposal] = useState([]);
  const { select } = useContext(Context);
  const [getdeselect, setGetdeselect] = useState(true);

  function deleteselect() {
    Swal.fire({
      title: 'Delete this Proposal?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
      }).then((result) => {
      if (result.isConfirmed) {
        
        localStorage.removeItem("selectedproposal");
    setGetdeselect(false);
          
   } })
  }
      
         
    
  
 

  const getProposaldata = () => {
    fetch("https://event-proposal-backend-ehjs.onrender.com/proposals", {
      method: "GET",
      crossDoamin: true,
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProposal(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(proposal)
  // useEffect(() => {
  //   selectedProposal();

  // }, [select]);

  useEffect(() => {
    // selectedProposal();
    getProposaldata();
    if (
      !localStorage.getItem("vendorToken") &&
      !localStorage.getItem("userToken")
    ) {
      navigate("/User");
    }
  }, []);

  useEffect(() => {}, [getdeselect]);
  console.log(select)

  return (
    <>
      <div>
        <UserNav />
        <div className="userimg"></div>
        <div>
          {localStorage.getItem("selectedproposal") ? (
            <div>
              <div className="selected">
                <p
                  style={{
                    fontsize: "20px",
                    position: "relative",
                    top: "0px",
                    left: "0px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  SELECTED
                </p>
                <div
                  style={{
                    position: "relative",
                    top: "-24px",
                    left: "197px",
                    display: "inline-block",
                  }}
                >
                  <button
                    onClick={deleteselect}
                    style={{
                      width: "50px",
                      height: "22px",
                      background: "#264774 0% 0% no-repeat padding-box",
                      borderradius: "8px",
                      opacity: "1",
                      color: "#ffffff",
                      border: "none",
                    }}
                  >
                    Delete
                  </button>
                </div>
                <div className="selectcontainer">
                  <div className="userproposal">
                    <div className="prop-img">
                      <img
                        src={select.venueImage? select.venueImage[0]: img}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>

                    <div
                      className="venname"
                      style={{ margin: "0px 0px 0px 10px", fontSize: "18px" }}
                    >
                      {select.eventName}
                    </div>
                    <div
                      className="budge"
                      style={{ fontSize: "13px", margin: "0px 0px 0px 10px" }}
                    >
                      {select.budget}
                    </div>
                    <div
                      className="locatin"
                      style={{ marginLeft: "10px", fontSize: "14px" }}
                    >
                      {select.placeOfEvent}
                    </div>
                  </div>
                </div>
              </div>
              <p style={{ position: "relative", top: "288px", left: "154px",fontSize:'20px',fontWeight:'bold' }}>
                Proposals
              </p>
              <div className="proposalcontainer">
                {proposal.map((item, i) => {
                  return <Proposal key={i} data={item} />;
                })}{" "}
              </div>{" "}
            </div>
          ) : (
            <div>
              <p style={{ position: "relative", top: "288px", left: "154px" ,fontSize:'20px',fontWeight:'bold'}}>
                Proposals
              </p>
              <div className="proposalcontainer">
                {proposal.map((item, i) => {
                  return <Proposal key={i} data={item} />;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Userprop;
