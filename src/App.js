import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import '../src/styles/global.css'
import Branding from "./pages/branding";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brand" element={<Branding />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
