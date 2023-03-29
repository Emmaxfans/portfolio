// styling
import '../Assets/styles/home.css';
import '../Assets/styles/blog.css';


// imported Nav component
import Nav from '../Component/Nav'

const blog = () => {
  return (
    <div className="body">
        <Nav/>

        <div className='blog-head'>
            <h1>Blog</h1>
        </div>
    </div>
  )
}

export default blog