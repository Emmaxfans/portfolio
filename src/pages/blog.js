// styling
import '../Assets/styles/home.css';
import '../Assets/styles/blog.css';


// imported Nav component
import Nav from '../Component/Nav'
// import Blogpost from '../Component/Blogpost';
// import data from '../Component/Blogdata';
import Article1 from '../Component/Article1';
import Article2 from '../Component/Article2';
import Article3 from '../Component/Article3';

const blog = () => {

    // const dataSet = data.map(function(items){
    // return(
    //     <Blogpost {...items}/>
    // )
    // }) 


  return (
    <div className='blog'>
         <Nav/>

         <div className='container blog-head'>
            <h1>Blog</h1>
         </div>
         <div>
             <Article1/>
             {/* {dataSet} */}
         </div>
         <div>
         <Article2/>
         </div>
         <div>
             <Article3/>
         </div>
    </div>
  )
}

export default blog