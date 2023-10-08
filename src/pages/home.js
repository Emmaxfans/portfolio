// component export
import Nav from '../Component/Nav';
import Hero from '../Component/Hero/Hero';
import Footer from '../Component/Footer';
import Skill from '../Component/Skill/Skill';



export default function home() {

  return (
    <div>
      <Nav/>
      <Hero/>
      <Skill/>
      <Footer/>
    </div>
  );
  
  }