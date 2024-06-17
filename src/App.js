import Navbar from "./components/Navbar";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import WhyAns from "./components/WhyAns";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" element={<Home/>}></Route>
          <Route path = "/features" element={<Features/>}></Route>
          <Route path = "/about" element={<About/>}></Route>
          <Route path = "/whyans" element={<WhyAns/>}></Route>
          <Route path = "/blog" element={<Blog/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
