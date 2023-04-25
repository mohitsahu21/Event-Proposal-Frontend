import React from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Form() {
  const navigate = useNavigate();
  
  const [regForm,setRegForm]=useState({
    eventName : "", placeOfEvent : "",proposalType : "",eventType : "", budget : "",fromDate :"", toDate : "",foodPreference : "",description : "" ,events : "",token: localStorage.getItem("vendorToken")
   
  })
  
  

  function updateData(e,propName){
    let temp=e.target.value
    setRegForm(data =>({
     ...data,[propName]:temp
    }))
    
     }

     async function submitform(e){
     
      // const data=new FormData(e.target)
      console.log(regForm)
      e.preventDefault();
        fetch("/createproposal",{
        method:"POST",
        crossDoamin : true,
        headers:{"content-type":"application/json","accept":"application/json","Access-Control-Allow-Origin" : "*"},
        body:JSON.stringify(regForm),
      
        
        
        
    })
    .then((res)=>res.json())
    .then((data)=>{
      if (data.status == "ok")
      {
       alert("Proposal Created")
       navigate("/VendorProposal")
      }
      if (data.status == "error"){
        alert(`${data.error}`)
      }
      console.log(data ,"VendorRegisterd")})
    
    .catch((err)=>{
      console.log(err)})

    //   fetch("/uploadimage",{
    //     method:"POST",
    //     crossDoamin : true,
    //     headers:{"content-type":"application/json","accept":"application/json","Access-Control-Allow-Origin" : "*"},
    //     body:JSON.stringify({
    //       base64: image
    //     }),
    // })
    // .then((res)=>res.json())
    // .then((data)=>{
      
    //   if (data.status == "error"){
    //     console.log(data.error)
    //   }
    //   console.log(data)})
    
    // .catch((err)=>{
    //   console.log(err)})
     }
  //  console.log(localStorage.getItem("vendorToken"));
   console.log(regForm.token);


  return (
    <div className="form1">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <b>CREATE PROPOSAL</b>
      </div>
      <form method="post" onSubmit={submitform}>
        <div className="container1form">
          <div>
            <p>Event Name</p>
            <input type="text" style={{ width: "467px" }} onChange={e=>updateData(e,"eventName")} required  />
          </div>
          <div className="placeofeventdropdown">
          <div style={{ marginRight: "153px" }}>
              <p>Place of Event</p>
              <select
                onChange={e=>updateData(e,"placeOfEvent")}
                name="place of event"
                style={{ width: "165px", height: "38px" }}
              >
                <option value=""></option>
                <option value="marriage">Banglore</option>
                <option value="birthday">Delhi</option>
              </select>
            </div>
            <div style={{ marginRight: "153px" }}>
              <p>Proposal Type</p>
              <select
                onChange={e=>updateData(e,"proposalType")}
                name="proposal type"
                style={{ width: "165px", height: "38px" }}
              >
                <option value=""></option>
                <option value="marriage">Marriage</option>
                <option value="birthday">Birthday</option>
              </select>
            </div>
          </div>
          <div style={{ display: "flex" }}>
          <div style={{ marginRight: "153px" }}>
              <p>Event Type</p>
              <select
                onChange={e=>updateData(e,"eventType")}
                name="event type"
                style={{ width: "165px", height: "38px" }}
              >
                <option value=""></option>
                <option value="marriage">Marriage</option>
                <option value="birthday">Birthday</option>
              </select>
            </div>
            <div>
              <p>Budget</p>
              <input
                onChange={e=>updateData(e,"budget")}
                type="text"
                placeholder="0000"
                style={{ width: "149px", height: "15px" }}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "153px" }}>
              <p>From</p>
              <input type="date" style={{ width: "146px", height: "28px" }} onChange={e=>updateData(e,"fromDate")} />
            </div>
            <div>
              <p>To</p>
              <input type="date" style={{ width: "146px", height: "28px" }} onChange={e=>updateData(e,"toDate")}  />
            </div>
          </div>
          <div>
            <p>Description</p>
            <input type="text" style={{ width: "468px", height: "122px" }} onChange={e=>updateData(e,"description")} />
          </div>
        </div>
        <div className="containerform2">
          <div style={{ height: "275px" }}>
          <p className="zupp">Images <button>Add</button><input type="file" name="Add" /></p>

            <div className="containerform2grid">
              <div style={{ border: "2px solid black" }}>
            <img  width={100} height={100} alt="img.jpg"/>   
              </div>
              
            </div>
          </div>
          <div>
            <p>Food Preferences</p>
            <input type="text" style={{ width: "525px", height: "57px" }} onChange={e=>updateData(e,"foodPreference")} />
          </div>
          <div>
            <p>Events</p>
            <input type="text" style={{ width: "525px", height: "116px" }} onChange={e=>updateData(e,"events")} />
          </div>
        </div>
        <button style={{margin: '20px 3px 0px 482px'}}>Add</button>
      </form>
    </div>
  );
  }


export default Form;
