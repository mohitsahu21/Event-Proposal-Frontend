import React from "react";
import "./Userprop.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import dpicon from '../../../images/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg'

function UserNav() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userloggedIn");
    localStorage.removeItem("selectedproposal");
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: "logout Successful",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    })
    navigate("/User");
  };
  return (
    <div className="nav">
      <div className="venlogo">
        <b>LOGO</b>
      </div>
      <div className="name">
        <b>{localStorage.getItem("userName")}</b>
      </div>
      <div class="dropdown">
        <div className="imgven">
          <img src={dpicon} alt="img" style={{width:'100%'}}/>
        </div>
        <div class="dropdown-content">
          <Link onClick={logout} to="/User">Log Out</Link>
        </div>
      </div>
    </div>
  );
}

export default UserNav;