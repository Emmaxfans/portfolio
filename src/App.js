import React from 'react';
import './App.css';
import { Typewriter } from 'react-simple-typewriter';
import metabnb from './images/meta-bnb.png'
import logo from './images/letter-e.png'
import handcoding from './images/hand-coding.png'
import foodhub from './images/food-landing.png'
import email from './images/email.png'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import github from './images/github.png'


export default function App() {

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

    {/* #####Body##### */}
    
    <div className='container con1'>

    <div className="row">
    
    <div className="col-lg-6">
  
    <div className="div-1">

    <p className="p1">Hi</p>

    <h2 className="h-2">
    I'm a {' '}
        <span>
          <Typewriter
            words={['Frontend Developer']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>
  
    <a href="#contact"><button className='btn1'>Contact me</button></a>
    </div>
  {/* #####Sidebar social icons#### */}

    <span className='top-icons'>
      <a href='https://twitter.com/_Emmaxfans' target="_blank" rel='noreferrer'><img src={twitter} alt="twitter" className=""/></a>
      <a href='https://facebook.com' target="_blank" rel='noreferrer'><img src={facebook} alt="facebook" className=""/></a>
      <a href='https://github.com/Emmaxfans' target="_blank" rel='noreferrer'><img src={github} alt="github" className=""/></a>
      <a href='mailto:Emmaxfans@gmail.com' target="_blank" rel='noreferrer'><img src={email} alt="email" className=""/></a>
      </span>
  
    </div>

    <div className="col-lg-5">
    <img src={handcoding} alt={handcoding} className="img3 img-fluid"/>
    </div>

    <div className="col-lg-1 tp-icons ">
      <div className='top-icons1 position-fixed'>
      <a href='https://twitter.com/_Emmaxfans' target="_blank" rel='noreferrer'><img src={twitter} alt="twitter" className=""/></a>
      <a href='https://facebook.com' target="_blank" rel='noreferrer'><img src={facebook} alt="facebook" className=""/></a>
      <a href='https://github.com/Emmaxfans' target="_blank" rel='noreferrer'><img src={github} alt="github" className=""/></a>
      <a href='mailto:Emmaxfans@gmail.com' target="_blank" rel='noreferrer'><img src={email} alt="email" className=""/></a>
      </div> 
      </div>
    </div>
    </div>
    
    <div className="container">
      <div className='row mb-5'>
        <div className="col-lg-8">
    
        
        <header className="header-A" id="about">About Me</header>
        <p className='p2'>My name is Emmanuel Adewoye, I am a certified frontend delevoper. proficient in the use of html,css,javascript and reactJs in building web Applications.</p>
        </div>
        <div className="col-lg-4">

          
      </div>
      
      </div>

      {/* <div>
        <h3 className='fs-1'>Technologies I have worked with</h3>
      </div> */}

      <header className="pro-header" id="project">Projects I have worked On </header>
    
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


    {/* ####Footer##### */}
    
    <footer>

      <header className="header-footer" id="contact">Let's Connect & Collaborate</header>
      <p className='p-con'>Have cool project or an existing project, and think I can help you with it? Feel free to contact me!</p>
    
      <div className="footer-icons"> 
        <a href='https://twitter.com/_Emmaxfans' target="_blank" rel='noreferrer'><img src={twitter} alt="twitter" className="img-footer"/></a>
        <a href='https://facebook.com' target="_blank" rel='noreferrer'><img src={facebook} alt="facebook" className="img-footer"/></a>
        <a href='https://github.com/Emmaxfans' target="_blank" rel='noreferrer'><img src={github} alt="github" className="img-footer"/></a>
        <a href='mailto:Emmaxfans@gmail.com' target="_blank" rel='noreferrer'><img src={email} alt="email" className="img-footer"/></a>
        </div>

        

        <div className="footer1">
        <hr className='hr1'/>
        <p className='footer-text'>&copy; Build with ReactJs by Emmaxfans</p>
        </div>

  </footer>
  
  </div>
  );
  
  }