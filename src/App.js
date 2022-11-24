import React from 'react';
import './App.css';
// import { Link } from 'react-router-dom'
// import data from './Component/ContainerPro';
// import PortfolioCard from './Component/PortfolioCard';
import metabnb from './images/meta-bnb.png'
import logo from './images/letter-e.png'
import handcoding from './images/hand-coding.png'
import foodhub from './images/food-landing.png'
import email from './images/email.png'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import github from './images/github.png'


export default function App() {
  // const dataSet = data.map(function(items){
  //   return(
  //     <PortfolioCard 
  //     {...items}/>
  //   )
  // })

  return (
    <div className="body">
  
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
    <a className="navbar-brand text-white" href="/#">   
    <img className='img1a img-fluid' src={logo} alt='profile-logo'/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse nav-float" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item px-3">
        <a className="nav-link active fs-font nav-colors" aria-current="page" href="./#">Home</a>
      </li>
      <li className="nav-item px-3">
        <a className="nav-link active fs-font nav-colors" href="/#project">Projects</a>
      </li>
    
      <li className="nav-item px-3 signup2">
        <a className="nav-link active fs-font nav-colors" href="#about">About</a>
      </li>
    
      <li className="nav-item px-3">
        <a className="nav-link active nav-colors" href="/#contact">Contact</a>
      </li>
    
     
    </ul>
    </div>
    </div>
    </nav>
    
    
    <div className="container con1">
      <div className="row">
    
      <div className="col-lg-8">
    
      <div className="div-1">
      <p className="p1">Hi</p>
      <h2 className="h-2">I'm a Frontend <br/>Web Developer</h2>
    
      <a href="#contact"><button className='btn1'>Contact me</button></a>
      </div>
    
      </div>

      <div className="col-lg-4">
        
      {/* <img className="img3 img-fluid" src="./IMG_8588.PNG" alt="#"/> */}
      {/* <img className="img3b img-fluid" src={handcoding} alt="hand"/> */}

      <img src={handcoding} alt={handcoding} className="img3 img-fluid"/>
    
      </div>
    
      </div>
    
     
    
      <div className='row mb-5'>
        <div className="col-lg-8">
    
        
        <header className="header-A" id="about">About Me</header>
        <p className='p2'>My name is Emmanuel Adewoye, I am a certified frontend delevoper. proficient in the use of html,css,javascript and reactJs in building web Applications.</p>
        </div>
        <div className="col-lg-4">
          {/* <img src='.\Hand coding-amico.png' alt='#' className="img3 img-fluid"/> */}

          {/* <video src='.\Hand coding.mp4'/> */}

          
      </div>
      
      </div>

      {/* <div>
        <dataSet/>
      </div> */}
      
      <header className="pro-header" id="project">Projects</header>
    
      <div className="row mb-5 pro-border">
      <div className="col-lg-4 pt-3 pb-3 project-section">
      <img src={foodhub} alt="foodhub" className="img-fluid pro-img"/> 
      <a href='https://foodhub-pro.netlify.app/' target="_blank" rel='noreferrer' className='pt-2'>Visit Foodhub now</a>
      </div>
      <div className="col-lg-4 pt-3 pb-3 project-section">
      <img src={metabnb} alt="food-interface" className="img-fluid pro-img"/>
      <a href='https://meta-bnb-nft.netlify.app/' target="_blank" rel='noreferrer'>Visit Meta-bnb NFT now</a> 
    
     </div>
    <div className="col-lg-4 pt-3 pb-3 project-section">
    <img src={foodhub}  alt="foodhub" className="img-fluid pro-img"/> 
    <a href='https://foodhub-pro.netlify.app/' target="_blank" rel='noreferrer'>Visit Foodhub now</a> 
    
    </div>
    
    </div>
    
    </div>
    
    <footer className="footer1">
      <header className="header-footer" id="contact">Contact</header>

      <hr className='hr1'/>
    
      <div className="Container container-fluid">
    
      <div className="row">
       
        <div className="col-lg-4">
        <div className="p1-con">
          <p className="fs-5">Email at:</p>
          <a href='mailto:Emmaxfans@gmail.com'><img src={email} alt="email" className='img-footer'/></a>
        </div>
        </div>

        <div className="col-lg-4">
        <p className='text-center fs-5 create-footer'>&copy; Created by Emmaxfans</p>
        </div>
    
        <div className="col-lg-4">
    
          <p className="p2-con fs-5">Reach Me via</p>
        <div className="p2-con">
        <a href='https://twitter.com/_Emmaxfans' target="_blank" rel='noreferrer'><img src={twitter} alt="twitter" className="img-footer"/></a>
        <a href='https://facebook.com' target="_blank" rel='noreferrer'><img src={facebook} alt="facebook" className="img-footer"/></a>
        <a href='https://github.com/Emmaxfans' target="_blank" rel='noreferrer'><img src={github} alt="github" className="img-footer"/></a>
        <a href='mailto:Emmaxfans@gmail.com' target="_blank" rel='noreferrer'><img src={email} alt="email" className="mail-m img-footer"/></a>
        </div>
       
        </div>
    
      </div>

      <div className="col-lg-4">
        <p className='text-center create-footer2'>&copy; Created by Emmaxfans</p>
        </div>

    </div>
    
  </footer>
    
    </div>
  );
}

// export default App;
