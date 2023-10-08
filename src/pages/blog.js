// styling
import '../Assets/styles/Hero.css';
import '../Assets/styles/blog.css';


// imported component
import Nav from '../Component/Nav'
import Article1 from '../Component/Blogpost/Article1';
import Article2 from '../Component/Blogpost/Article2';
import Article3 from '../Component/Blogpost/Article3';
import Article4 from '../Component/Blogpost/Article4';

const blog = () => {
  return (
    <div className='blog'>
         <Nav/>

         <div className='container blog-head'>
            <h1>Blog</h1>
         </div>
         <div>
             <Article1 date = "27/03/2023" author = "Emmaxfans" />
         </div>
         <div>
         <Article2 date = "28/03/2023" author = "Emmaxfans" />
         </div>
         <div>
             <Article3 date = "28/03/2023" author = "Emmaxfans" />
         </div>
         <div>
           <Article4 date = "20/04/2023" author = "Emmaxfans" />
         </div>
    </div>
  )
}

export default blog