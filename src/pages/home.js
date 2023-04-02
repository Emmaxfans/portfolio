import '../Assets/styles/home.css';
import { Typewriter } from 'react-simple-typewriter';

// images
import metabnb from '../Assets/images/meta-bnb.png'
import handcoding from '../Assets/images/hand1.gif'
import foodhub from '../Assets/images/food-landing.png'

// component export
import Nav from '../Component/Nav';
import Icons from '../Component/Icons';


export default function home() {

  return (
    <div>
      {/* Nar bar */}
    <Nav/>

    {/* #####Body##### */}
    
    <div className='container con1'>

    <div className="row">
    
    <div className="col-lg-6">
  
    <div className="div-1">

    <span className="p1">Hi</span>
    <span ><p class="wave">👋</p></span>  
    <h2 className="h-2">
     {' '}
        <span>
          <Typewriter
            words={["I'm Emmanuel Adewoye"]}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /> 
        </span>
      </h2>

      <p class="title">FRONTEND SOFTWARE ENGINEER</p>

      <p className='intro'>I'm a Frontend developer specialized in building exceptional websites, applications, and making the web accessible to everyone.</p>
      <div className='btn-span'>
      <span>
        <a href="mailto:Emmaxfans@gmail.com"><button className='btn1'>Hire Me</button></a>
        <a href='#mywork'><button className='btn2'>View my Works</button></a>        
      </span>
      </div>
    </div>
  
    </div>

    <div className="col-lg-6">
      <div className='div-hand'><img className="img3 img-fluid" src={handcoding} alt={handcoding} /></div>
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

      <header className="pro-header" id="mywork">Projects I have worked On </header>
    
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

        <Icons/>
        <div className="footer1">
        <hr className='hr1'/>
        <p className='footer-text'>&copy; Build with ReactJs by Emmaxfans</p>
        </div>

  </footer>
  
  </div>
  );
  
  }