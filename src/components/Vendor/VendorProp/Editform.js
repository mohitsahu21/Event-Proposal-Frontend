import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import Userprop from '../../User/UserProposals/Userprop'
import { useParams } from 'react-router-dom'
import '.././VendorCreateProp/Vencreateprop.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import img from '../../../images/render.jpg'
import Swal from 'sweetalert2'


function Editform() {
    const navigate = useNavigate();
    const [proposal,setProposal]=useState([]);
    const [venueImage,setVenueImage] =useState([]);
  const [venImg, setVenImg] = useState([]);
  
    const {id}=useParams();
     console.log(proposal)

         async function submitform(e){
          e.preventDefault();
          try{
            const formData = new FormData(e.target);
            console.log(proposal)
    
                fetch(`https://event-proposal-backend-ehjs.onrender.com/editproposal/${id}`, {
                    method: "PUT",
                    crossDoamin: true,
                    headers: {
                      "content-type": "application/json",
                      accept: "application/json",
                      "Access-Control-Allow-Origin": "*",
                    },
                    body:JSON.stringify(proposal)
                  })
                    .then((res) => res.json())
                    .then((data) => {
                       console.log(data);
                       Swal.fire(
                        'Good job!',
                        'Proposal Edited Successfully!',
                        'success'
                      )
                       navigate("/VendorProposal")
                    })} catch (error){
             console.log(error)
          }
        }

    const getProposaldata = () => {
        fetch(`https://event-proposal-backend-ehjs.onrender.com/getproposal/${id}`, {
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
            setProposal(data.proposal);
            setVenImg(data.proposal.venueImage)
            
            
            
          })
          .catch((err) => {
            console.log(err);
          });
      };
      
      const uploadImage = async (val) => {
       
        const data = new FormData();
        data.append('file',val)
        data.append('upload_preset','events')
       
       return await axios.post("https://api.cloudinary.com/v1_1/dhryrs3lr/image/upload",data).then(res => {return res.data.secure_url});
          
      }
      
     const uploadVenueImage =async()=>{
          if(venueImage.length>0){
            
            let arr = venueImage.map((val)=> {
             
              return uploadImage(val)
            })
           
         let result = await Promise.all(arr).then(res => {
             
             setProposal({...proposal,venueImage:res})
             
              
            })
          }
     }

      useEffect(() => {
        getProposaldata();
        if (
          !localStorage.getItem("userToken")
        ) {
        }
      }, []);

  return (
    <div className='editformback'>
      <Navbar/>
      <div className="form1">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <b>EDIT PROPOSAL</b>
      </div>
      <form method="put" onSubmit={submitform}>
        <div className="container1form">
          <div>
            <p>Event Name</p>
            <input type="text" style={{ width: "467px" }} value={proposal.eventName}  onChange={e=>setProposal({...proposal,eventName:e.target.value})} name="eventName" required />
          </div>
          <div className="placeofeventdropdown">
          <div style={{ marginRight: "153px" }}>
              <p>Place of Event</p>
              <select
              name="placeOfEvent"
              value={proposal.placeOfEvent}
              onChange={e=>setProposal({...proposal,placeOfEvent:e.target.value})}
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
              name="proposalType"
                value={proposal.proposalType}
                onChange={e=>setProposal({...proposal,proposalType:e.target.value})}
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
              name="eventType"
              value={proposal.eventType}
              onChange={e=>setProposal({...proposal,eventType:e.target.value})}
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
              value={proposal.budget}
              onChange={e=>setProposal({...proposal,budget:e.target.value})}
                type="text"
                placeholder="0000"
                style={{ width: "149px", height: "15px" }}
                name='budget'
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "153px" }}>
              <p>From</p>
              <input type="date" style={{ width: "146px", height: "28px" }} name='fromDate' onChange={e=>setProposal({...proposal,fromDate:e.target.value})} />
            </div>
            <div>
              <p>To</p>
              <input type="date" style={{ width: "146px", height: "28px" }} name='toDate' onChange={e=>setProposal({...proposal,toDate:e.target.value})} />
            </div>
          </div>
          <div>
            <p>Description</p>
            <input type="text" style={{ width: "468px", height: "122px" }} name='description' value={proposal.description} onChange={e=>setProposal({...proposal,description:e.target.value})} />
          </div>
        </div>
          <div className="containerform2">
            <div style={{ height: "221px" }}>
            <p className="zupp">Images <button>Add</button><input type="file" max="5" accept="image/*" name="venueImage" multiple onChange={(e) => { setVenueImage([...e.target.files]); setVenImg([...e.target.files]);  alert("image added") }} onBlur={uploadVenueImage 
              
              } /></p>
            <div className="containerform2grid">
              <div style={{ border: "2px solid black" }}>
                <img style={{ width: '100%', height: '100%' }} src={proposal?.venueImage ? proposal.venueImage[0] : img} alt="img.jpg" />
              </div>
              <div style={{ border: "2px solid black" }}>
                <img style={{ width: '100%', height: '100%' }} src={proposal?.venueImage ? proposal.venueImage[1] : img} alt="img.jpg" />
              </div>
              <div style={{ border: "2px solid black" }}>
                <img style={{ width: '100%', height: '100%' }} src={proposal?.venueImage ? proposal.venueImage[2] : img} alt="img.jpg" />
              </div>
              <div style={{ border: "2px solid black" }}>
                <img style={{ width: '100%', height: '100%' }} src={proposal?.venueImage ? proposal.venueImage[3] : img} alt="img.jpg" />
              </div>
              <div style={{ border: "2px solid black" }}>
                <img style={{ width: '100%', height: '100%' }} src={proposal?.venueImage ? proposal.venueImage[4] : img} alt="img.jpg" />
              </div>
            </div>
            </div>
          <div>
            <p>Food Preferences</p>
            <input type="text" style={{ width: "525px", height: "57px" }} name='foodPreference' value={proposal.foodPreference} onChange={e=>setProposal({...proposal,foodPreference:e.target.value})}/>
          </div>
          <div>
            <p>Events</p>
            <input type="text" style={{ width: "525px", height: "116px" }} name='events' value={proposal.events} onChange={e=>setProposal({...proposal,events:e.target.value})} />
          </div>
        </div>
        <button style={{margin: '20px 3px 0px 482px'}}>Add</button>
      </form>
    </div>
      </div>
  )
}

export default Editform
