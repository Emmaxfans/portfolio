

const Blogpost = (props) => {
  return (
        <div className="container blogpost">
            <h2>{props.Title}</h2>
            <p>{props.Date}</p>
            <p>{props.Author}</p>
            {/* <hr className="hr1"/> */}
            <section>
                {props.Article}
            </section>
            <hr/>
         </div>
  )
}

export default Blogpost