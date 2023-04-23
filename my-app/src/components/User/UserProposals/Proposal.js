import React from 'react'
import './Proposal.css'
import { Link } from 'react-router-dom'

function Proposal(props) {
  return (
    <div className='userproposal'>
        <div className='prop-img'>
            <img src={props.data.image} alt='img.jpg'/>
        </div>
        <Link to='/Proposaldetail' style={{textDecoration:'none'}}>
        <div className='venname'>{props.data.vendorname}</div>
        <div className='budge'>{props.data.budget}</div>
        <div className='locatin'>{props.data.location}</div>      
        </Link>
    </div>
  )
}

export default Proposal
