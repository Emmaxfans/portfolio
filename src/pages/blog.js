// styling
import '../Assets/styles/home.css';
import '../Assets/styles/blog.css';


// imported Nav component
import Nav from '../Component/Nav'
import Blogpost from '../Component/Blogpost';
import data from '../Component/Blogdata';

const blog = () => {

    const dataSet = data.map(function(items){
    return(
        <Blogpost {...items}/>
    )
    }) 


  return (
    <div className='blog'>
         <Nav/>

        <div className=''>

         <div className='blog-head'>
            <h1>Blog</h1>
         </div>
         <div>
             {dataSet}
         </div>
         </div>
    </div>
  )
}

export default blog