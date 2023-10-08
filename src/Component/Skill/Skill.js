import './Skill.css'
// images
import metabnb from '../../Assets/images/meta-bnb.png';
import foodhub from '../../Assets/images/food-landing.png';
import calculator from '../../Assets/images/calculator.png';
// import guy from '../Assets/images/guy.PNG'

const Skill = () => {
  return (
    <>
    <div>
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
   <img src={calculator}  alt="foodhub" className="img-fluid pro-img"/> 
   <a href='https://voice-calculator.netlify.app/' target="_blank" rel='noreferrer'>Visit voice calculator now</a> 

</div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Skill