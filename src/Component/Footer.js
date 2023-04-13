import Icons from "./Icons"

const Footer = () => {
  return (
    <div>
        <footer>
            <header className="header-footer" id="contact">Let's Connect & Collaborate</header>
            <p className='p-con'>Have cool project or an existing project, and think I can help you with it? Feel free to contact me!</p>
            <Icons/>
            <div>
            <hr className='hr1'/>
            <p className='footer-text'>&copy; Build with ReactJs by Emmaxfans</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer