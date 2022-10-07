import './App.css';

function App() {
  return (
    <div className="body">
  
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
    <a className="navbar-brand text-white" href="/#">   
    <img className='img1a img-fluid' src='.\letter-e.png' alt='###'/>
    {/* <h5 className='foodhub'>Emmaxfans</h5> */}
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
      <img className="img3b img-fluid" src="./IMG_8589 (1).PNG" alt="#"/>

      <img src='.\Hand coding-amico.png' alt='#' className="img3 img-fluid"/>
    
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
    
      <div className="row mb-5">
      <header className="pro-header" id="project">Projects</header>
      <div className="col-lg-4 pt-3 pb-3">
      <img src="./food-landing.png" alt="food-interface" className="img-fluid pro-img"/> 
    
      </div>
      <div className="col-lg-4 pt-3 pb-3">
      <img src="./food-landing.png" alt="food-interface" className="img-fluid pro-img"/> 
    
     </div>
    <div className="col-lg-4 pt-3 pb-3">
    <img src="./food-landing.png" alt="food-interface" className="img-fluid pro-img"/> 
    
    </div>
    
    </div>
    
    </div>
    
    <footer className="footer1">
      <header className="header-footer" id="contact">Contact</header>

      <hr className='hr1'/>
    
      <div className="Container container-fluid">
    
      <div className="row">
       
        <div className="col-lg-6">
        <div className="p1-con">
          <p className="">Email at</p>
          <a href='mailto:Emmaxfans@gmail.com'><img src="./email (1).png" alt="twitter" className='img-footer'/></a>
        </div>
        </div>
    
        <div className="col-lg-6">
    
          <p className="p2-con">Reach Me via</p>
          <div className="p2-con">
        <a href='https://twitter.com/_Emmaxfans'><img src="./twitter (1).png" alt="twitter" className="img-footer"/></a>
        <a href='https://facebook.com'><img src="./facebook (2).png" alt="twitter" className="img-footer"/></a>
        <a href='https://github.com/Emmaxfans'><img src="./github (1).png" alt="twitter" className="img-footer"/></a>
        <a href='mailto:Emmaxfans@gmail.com'><img src="./email (1).png" alt="twitter" className="mail-m img-footer"/></a>
        </div>
       
        </div>
    
      </div>
      </div>

      <p className='text-center mt-4 fs-5'>&copy; Created by Emmaxfans</p>
    
    </footer>
    
    </div>
  );
}

export default App;
