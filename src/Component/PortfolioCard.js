import React from 'react'
import './App.css'

const PortfolioCard = (props) => {
  return (
    <div className='container'>
    <div className='col-lg-4 md-4 sm-4'>
      <div className='container-fluid'>
        <img src= {props.imgcard} alt={props.altdata} className='img-props'/>
      </div>
      <a href={props.link}><p className='price'>{props.price}</p></a>
      </div>
    </div>
  );
}

export default PortfolioCard