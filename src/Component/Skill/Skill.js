import './Skill.css'
// images
import metabnb from '../../Assets/images/meta-bnb.png';
import foodhub from '../../Assets/images/food-landing.png';
import calculator from '../../Assets/images/calculator.png';
// import guy from '../Assets/images/guy.PNG'

const Skill = () => {
  return (
    <>
    <div className="container">
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
    {/* </div> */}
    </>
  )
}

export default Skill