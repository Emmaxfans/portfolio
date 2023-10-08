import './About.css'

const About = () => {
  return (
    <>
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
  </div>
    </>
  )
}

export default About