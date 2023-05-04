import React from "react";
import  { useState } from "react";
import { Link } from "react-router-dom";
import "./Vendorhome.css";
import Home from "../Home/Home";
import Userhome from "../User/Userhome";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function VendorHome() {

  const navigate = useNavigate();
  const [formData,setFormData]=useState({
    email:"",
    password:""
  });
 
  const {email,password} = formData
  function updateData(e,propName){
    let temp=e.target.value
    setFormData(data =>({
     ...data,[propName]:temp
    }))
    
     }
  
  async function submitted(e){
    e.preventDefault()
    // const data=new FormData(e.target)
    console.log(formData)

     
     fetch("https://event-proposal-backend-ehjs.onrender.com/login",{
      method:"POST",
      headers:{"content-type":"application/json","accept":"application/json"},
      body:JSON.stringify(formData)
      
  })
  .then((res)=>res.json())
  .then((data)=>{
     localStorage.setItem('vendorToken', data.data);
     localStorage.setItem('vendorloggedIn',true);
     localStorage.setItem('vendorName', data.vendorName);
     if (data.status == "ok")
     {
    
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: "login Successful",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      })
      navigate("/VendorProposal")
     }if (data.status === "error"){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title:`${data.error}` ,
        showConfirmButton: true,
        confirmButtonText: 'ok',
      })
    }
     
    console.log(data)})
  .catch((err)=>{
    console.log(err)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })})
   }

    return (<>
        <Home/>
        <div className="Logo">LOGO</div>
        <div className="Text">TEXT WILL<br/> BE DISPLAYED<br/> HERE</div>
        <div className="form-box">
          <div className="top">
            <p className="vendor">Vendor</p>
            <Link to="/User" style={{textDecoration:'none', marginTop:'15px'}}>User</Link>
          </div>

          <div className="heading">
            <h2>Sign in your Account</h2>
          </div>
          <div className="form">
            <form method="post"  onSubmit={submitted}>
              <div className="input">
                
                <input type="email" placeholder="Phone/Email" style={{width:'300px'}} name="email" onChange={e=>updateData(e,"email")} required/>
              </div>
              <div className="input">
              
                <input type="password" placeholder="Password" style={{width:'300px'}} name="password"  onChange={e=>updateData(e,"password")} required />
              </div>
              <div className="forget">
                
                 Forget Password
              </div>

              <div className="footer">
                <div className="create">
                  
                  <Link to="/createvendoraccount" style={{textDecoration:'none'}}>Create Account</Link>
                </div>
                {/* <Link to='/VendorProposal'> */}
                <button className="button" type="submit">
                  SIGN IN
                </button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
    </>
  );
}

export default VendorHome;
