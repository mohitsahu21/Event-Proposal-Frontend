import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import Events from "./Events";
import "./VendorProp.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function VendorProp() {
  const navigate = useNavigate();
 const [vendorName , setVendorName] = useState("")
 const getVendorData = () =>{
  fetch("/vendordata",{
    method:"POST",
    crossDoamin : true,
    headers:{"content-type":"application/json","accept":"application/json","Access-Control-Allow-Origin" : "*"},
    body:JSON.stringify({
      token: localStorage.getItem("token"),
    }
    )
})
.then((res)=>res.json())
.then((data)=>{

  console.log(data);
 setVendorName(data.data.name)
 console.log(vendorName)
 })
 

.catch((err)=>{
  console.log(err)})
 }

 const logout=()=> {
   localStorage.clear();

 }


  useEffect(()=>{
        getVendorData();
        if(!localStorage.getItem("token")){
          navigate('/')
        }
  },[])

  const events = [
    {
      eventname: "Event Name",
      eventtext: "lorem sdasdasdsadasdasdsadasdsadsadasdsadsadsadasdsadsad",
      eventtype: "Marriage",
      proposaltype: "Venue",
      fromdate: "12/02/2222",
      todate: "14/02/2222",
      budget: "20000",
    },
    {
      eventname: "Event Name",
      eventtext: "lorem sdasdasdsadasdasdsadasdsadsadasdsadsadsadasdsadsad",
      eventtype: "Marriage",
      proposaltype: "Venue",
      fromdate: "12/02/2222",
      todate: "14/02/2222",
      budget: "23000",
    },
    {
      eventname: "Event Name",
      eventtext: "lorem sdasdasdsadasdasdsadasdsadsadasdsadsadsadasdsadsad",
      eventtype: "Marriage",
      proposaltype: "Venue",
      fromdate: "12/02/2222",
      todate: "14/02/2222",
      budget: "23000",
    },
  ];

  return (
    <div>
      <Navbar logout={logout}/>
      <div className="propcontainer">
        <div className="container1">
          <div className="proposal">
            <b>Proposals</b>
          </div>
          <div className="searchbar">
            <div className="searchimg"></div>
            <input type="text" placeholder="Search Projects" />
          </div>
          <div className="filter">
            <div className="filimg"></div>
            <div className="create-btn">
              <button><Link to='/createproposal' style={{textDecoration:'none',color:'white'}}>CREATE</Link></button>
            </div>
          </div>
        </div>
        <div className="container2">
          {events.map((item, i) => {
            return <Events data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default VendorProp;
