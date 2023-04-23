<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
import  { useState } from "react";
>>>>>>> asfar
import { Link } from "react-router-dom";
import "./Vendorhome.css";
import Home from "../Home/Home";
import Userhome from "../User/Userhome";
import { useNavigate } from "react-router-dom";

function VendorHome() {

<<<<<<< HEAD
 
  const [formData,setFormData]=useState({
    email:"",
    password:""
  })
 

=======
  const navigate = useNavigate();
  const [formData,setFormData]=useState({
    email:"",
    password:""
  });
 
  const {email,password} = formData
>>>>>>> asfar
  function updateData(e,propName){
    let temp=e.target.value
    setFormData(data =>({
     ...data,[propName]:temp
    }))
    
     }
  // function updateData(e,[propName]){
  //   let temp=e.target.value
  //   setFormData(data => ({
  //     ...data,[propName]: temp
  //   }))
  // }

  async function submitted(e){
    e.preventDefault()
    // const data=new FormData(e.target)
    console.log(formData)

<<<<<<< HEAD

     fetch("http://localhost:4000/user/login",{
=======
     
     fetch("/login",{
>>>>>>> asfar
      method:"POST",
      headers:{"content-type":"application/json","accept":"application/json"},
      body:JSON.stringify(formData)
      
  })
<<<<<<< HEAD
  .then((data)=>data.json())
  .then((responce)=>console.log(responce))
  .catch((error)=>console.log(error.message))
=======
  .then((res)=>res.json())
  .then((data)=>{
     localStorage.setItem('token', data.data)
     if (data.status === "ok")
     {
      alert("login Successful")
      navigate("/VendorProposal")
     }if (data.status === "error"){
      alert(`${data.error}`)
    }
     
    console.log(data)})
  .catch((err)=>{
    console.log(err)})
>>>>>>> asfar
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
<<<<<<< HEAD
            <form method="post" onSubmit={submitted}>
              <div className="input">
                {" "}
                <input type="name" name="email" placeholder="Phone/Email" 
                 onChange={e=>updateData(e,"email")} />{" "}
              </div>
              <div className="input">
                {" "}
                <input type="password" placeholder="Password" name="password"
                onChange={e=>updateData(e,"password")}  />{" "}
=======
            <form method="post"  onSubmit={submitted}>
              <div className="input">
                {" "}
                <input type="email" placeholder="Phone/Email" style={{width:'300px'}} name="email" onChange={e=>updateData(e,"email")} required/>{" "}
              </div>
              <div className="input">
                {" "}
                <input type="password" placeholder="Password" style={{width:'300px'}} name="password"  onChange={e=>updateData(e,"password")} required />{" "}
>>>>>>> asfar
              </div>
              <div className="forget">
                {" "}
                <Link to="/forgetPassword" style={{textDecoration:'none'}}>Forget Password</Link>{" "}
              </div>

              <div className="footer">
                <div className="create">
                  {" "}
                  <Link to="/createvendoraccount" style={{textDecoration:'none'}}>Create Account</Link>{" "}
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
