const Blogpost = (props) => {
  return (
        <div className="container blogpost">
            <h2>{props.Title}</h2>
            <p>{props.Date}</p>
            <p>{props.Author}</p>
            {/* <hr className="hr1"/> */}
            <p>easy ways to learning and earning a living off tech in 2023</p>
            <hr/>
         </div>
  )
}

export default Blogpost