// component export
import Nav from '../Component/Nav';
import Hero from '../Component/Hero/Hero';
import Footer from '../Component/Footer';
import Skill from '../Component/Skill/Skill';
import About from '../Component/About/About';



export default function home() {

  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Skill/>
      <Footer/>
    </div>
  );
  
  }