import "../Assets/styles/icons.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXTwitter } from "@fortawesome/free-brands-svg-icons"

const SocialIcon = () => {
  return (
    <div className="social-icons" style={{marginLeft: "-40px", marginTop: "50px"}}>
        <ul>
            <li>
                <a href='https://twitter.com/_Emmaxfans' target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faXTwitter} className="x-icon" /></a>
            </li>
            <li>
                <a href='https://github.com/Emmaxfans' target="_blank" rel='noreferrer'><i class="fab fa-github glow"/></a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/emmaxfans' target="_blank" rel='noreferrer'><i class="fab fa-linkedin-in glow"/></a>
            </li>
            <li>
            <a href='https://malito:emmaxfans@gmail.com' target="_blank" rel='noreferrer'><i class="fa-regular fa-envelope glow1"/></a>
            </li>
        </ul>
      
    </div>
  )
}

export default SocialIcon