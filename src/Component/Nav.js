// styling
import '../Assets/styles/body.css';


// images

import logo from '../Assets/images/letter-e.png';

const Nav = () => {
  return (
    <div>
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
        {/* <a className="nav-link active fs-font nav-colors" aria-current="page" href="./#">Home</a> */}
        <a className="nav-link active fs-font nav-colors" href="#about">About</a>
      </li>
      <li className="nav-item px-3">
        <a className="nav-link active fs-font nav-colors" href="/#mywork">View my Works</a>
      </li>
    
      <li className="nav-item px-3 signup2">
        <a className="nav-link active fs-font nav-colors" href="#work-experience">Work Experience</a>
      </li>
    
      <li className="nav-item px-3">
        <a className="nav-link active nav-colors" href="/#contact">Contact</a>
      </li>
    
     
    </ul>
    </div>
    </div>
    </nav>
    </div>
  )
}

export default Nav