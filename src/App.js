import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
// import Blog from "./pages/blog"

const App = () => {
  return (
    <div className="body">
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/blog' element={<Blog />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App