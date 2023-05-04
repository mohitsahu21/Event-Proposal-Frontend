import React from "react";
import "./Form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import img from '../../../images/render.jpg'
import Swal from 'sweetalert2'
function Form() {
  const navigate = useNavigate();
  const [venueImage,setVenueImage] =useState([]);
  const [venImg, setVenImg] = useState([]);
  
  const [regForm,setRegForm]=useState({
    eventName : "", placeOfEvent : "",proposalType : "",eventType : "", budget : "",fromDate :"", toDate : "",foodPreference : "",description : "" ,events : "", venueImage: [],token: localStorage.getItem("vendorToken")
  })
  function updateData(e,propName){
    let temp=e.target.value
    setRegForm(data =>({
     ...data,[propName]:temp
    }))
     }

     const submitform = async(e) =>{
      e.preventDefault();
      try{
      
       const res = await axios.post("https://event-proposal-backend-ehjs.onrender.com/createproposal", regForm);
       if (res.data.status == "ok")
      {
    
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: "Proposal Created",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      })
       navigate("/VendorProposal")
      }
      if (res.data.status == "error"){
       
        Swal.fire({
          position: 'center',
          icon: 'error',
          title:`${res.data.error}` ,
          showConfirmButton: true,
          confirmButtonText: 'ok',
        })
      }
      console.log(res.data ,"VendorRegisterd")
      }  catch (error){
         console.log(error)
         Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    }
  
    const uploadImage = async (val) => {
       
      const data = new FormData();
      data.append('file',val)
      data.append('upload_preset','events')
     
      return await axios.post("https://api.cloudinary.com/v1_1/dhryrs3lr/image/upload", data).then(res =>{return res.data.secure_url});

    }
    
   const uploadVenueImage =async()=>{
        if(venueImage.length>0){
          
          let arr = venueImage.map((val)=> {
           
            return uploadImage(val)
          })
          console.log(arr)
       let result = await Promise.all(arr).then(res => {
            
            setRegForm({...regForm,venueImage:res})
            
            
          })
        }
   }
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
                <option value="Banglore">Banglore</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Pune">Pune</option>
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
          <div style={{ height: "221px" }}>
            <p className="zupp">Images <button>Add</button><input type="file" max="5" accept="image/*" name="venueImage" multiple onChange={(e) => { setVenueImage([...e.target.files]); setVenImg([...e.target.files]);   alert("image added") }} onBlur={uploadVenueImage} /></p>
            <div className="containerform2grid">
              <div style={{ border: "2px solid black" }}>
                <img style={{ width: '100%', height: '100%' }} src={venImg[0] ? URL.createObjectURL(venImg[0]) : img} alt="img.jpg" />
              </div>
              <div style={{ border: "2px solid black" }}>
                <img style={{ width: '100%', height: '100%' }} src={venImg[1] ? URL.createObjectURL(venImg[1]) : img} alt="img.jpg" />
              </div>
              <div style={{ border: "2px solid black" }}>
                <img style={{ width: '100%', height: '100%' }} src={venImg[2] ? URL.createObjectURL(venImg[2]) : img} alt="img.jpg" />
              </div>
              <div style={{ border: "2px solid black" }}>
                <img style={{ width: '100%', height: '100%' }} src={venImg[3] ? URL.createObjectURL(venImg[3]) : img} alt="img.jpg" />
              </div>
              <div style={{ border: "2px solid black" }}>
                <img style={{ width: '100%', height: '100%' }} src={venImg[5] ? URL.createObjectURL(venImg[4]) : img} alt="img.jpg" />
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
