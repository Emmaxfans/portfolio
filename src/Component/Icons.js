import '../Assets/styles/home.css'

import email from '../Assets/images/email.png'
import facebook from '../Assets/images/facebook.png'
import twitter from '../Assets/images/twitter.png'
import github from '../Assets/images/github.png'

const Icons = () => {
  return (
    <div className="footer-icons">
        <a href='https://twitter.com/_Emmaxfans' target="_blank" rel='noreferrer'><img src={twitter} alt="twitter" className="img-footer"/></a>
        <a href='https://facebook.com' target="_blank" rel='noreferrer'><img src={facebook} alt="facebook" className="img-footer"/></a>
        <a href='https://github.com/Emmaxfans' target="_blank" rel='noreferrer'><img src={github} alt="github" className="img-footer"/></a>
        <a href='mailto:Emmaxfans@gmail.com' target="_blank" rel='noreferrer'><img src={email} alt="email" className="img-footer"/></a>
    </div>
  )
}

export default Icons