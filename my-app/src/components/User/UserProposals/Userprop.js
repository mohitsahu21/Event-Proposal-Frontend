import React, { useEffect } from 'react';
import UserNav from './UserNav';
import Proposal from './Proposal';
import { useNavigate } from "react-router-dom";



function Userprop() {
    const navigate = useNavigate();
    const proposal=[
        {
            image:'../../../images/party-people-enjoy-concert-at-festival-summer-DHDMPWH.jpg',
            vendorname:'Vendor Name',
            budget:'23000',
            location:'Banglore'
        },
        {
            image:'../../../images/party-people-enjoy-concert-at-festival-summer-DHDMPWH.jpg',
            vendorname:'Vendor Name',
            budget:'23000',
            location:'Patna'
        },
        {
            image:'../../../images/party-people-enjoy-concert-at-festival-summer-DHDMPWH.jpg',
            vendorname:'Vendor Name',
            budget:'23000',
            location:'Delhi'
        },{
            image:'../../../images/party-people-enjoy-concert-at-festival-summer-DHDMPWH.jpg',
            vendorname:'Vendor Name',
            budget:'23000',
            location:'Banglore'
        },
        {
            image:'../../../images/party-people-enjoy-concert-at-festival-summer-DHDMPWH.jpg',
            vendorname:'Vendor Name',
            budget:'23000',
            location:'Banglore'
        },
        {
            image:'../../../images/party-people-enjoy-concert-at-festival-summer-DHDMPWH.jpg',
            vendorname:'Vendor Name',
            budget:'23000',
            location:'Banglore'
        }
    ]
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate('/User')
          }
    },[])
    


  return (
    <div>
      <UserNav/>
      <div className='userimg'></div>
      <div className='proposalcontainer'>
        {
            proposal.map((item,i)=>{
                return <Proposal data={item}/>
            })
        }
        
      </div>
    </div>
  )
}

export default Userprop
