import "../Assets/styles/icons.css"

const SocialIcon = () => {
  return (
    <div className="social-icons" style={{marginLeft: "-40px", marginTop: "50px"}}>
        <ul>
            <li>
                <a href='https://twitter.com/_Emmaxfans' target="_blank" rel='noreferrer'><i class="fab fa-twitter glow"/></a>
            </li>
            <li>
                <a href='https://github.com/Emmaxfans' target="_blank" rel='noreferrer'><i class="fab fa-github glow"/></a>
            </li>
            <li>
                <a href='/#' target="_blank" rel='noreferrer'><i class="fab fa-linkedin-in glow"/></a>
            </li>
            <li>
                <a href='/#' target="_blank" rel='noreferrer'><i class="fab fa-instagram glow1"/></a>
            </li>
        </ul>
      
    </div>
  )
}

export default SocialIcon