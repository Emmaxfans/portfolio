import '../Assets/styles/body.css';
import { Typewriter } from 'react-simple-typewriter';

import SocialIcon from './SocialIcon';

// images
import metabnb from '../Assets/images/meta-bnb.png'
import handcoding from '../Assets/images/hand1.gif'
import foodhub from '../Assets/images/food-landing.png'
// import twitter from '../Assets/images/twitter.png'
// import guy from '../Assets/images/guy.PNG'

const Body = () => {
  return (
    <div>
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
  <SocialIcon />
</div>

</div>

<div className="col-lg-6">
  <div className='div-hand'><img className="img3 img-fluid" src={handcoding} alt={handcoding} /></div>
</div>

</div>
</div>

<div className="container div-2">
  <div className='row mb-5'>
    <div className="col-lg-8">

    
    <header className="header-A" id="about">About Me</header>
    <p className='p2'>
    I'm a self-taught Front-End Developer, Passion about UI effects and animations, building amazing web applications, creating dynamic user experiences and mobile responsive web applications .
    </p>

    <p className='skill-p'>My skill-set</p>

    <ul className='skill'>
      <div className='flex'>
      <li>
        <p>React</p>
        </li>
        <li>
          <p>Javascript</p>
        </li>
        <li>
          <p>Typescript</p>
        </li>
      </div>
    </ul>

    <ul className='skill'>
      <div className='flex'>
        <li>
          <p>HTML & CSS</p>
        </li>
        <li>
          <p>Github</p>
        </li>
        <li>
          <p>Figma</p>
        </li>
      </div>
    </ul>

    </div>
    <div className="col-lg-4">
      {/* <img src={guy} alt='Emmax-pics' className='img-fluid'/> */}
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
    </div>
  )
}

export default Body