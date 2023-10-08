import './Hero.css';
import { Typewriter } from 'react-simple-typewriter';
import handcoding from '../../Assets/images/hand1.gif';

import SocialIcon from '../SocialIcon';

const Hero = () => {
  return (
    <div>
        <div className='container con1'>

<div className="row">

<div className="col-lg-6">

<div className="div-1">

<span className="p1">Hi <p className="wave">👋</p></span>

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
  <div className='div-hand'><img className="img3 img-fluid" src={handcoding} alt="handcoding" /></div>
</div>
</div>
</div>
 </div>
  )
}

export default Hero