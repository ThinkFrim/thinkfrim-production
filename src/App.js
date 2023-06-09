import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import '../src/styles/global.css'
import Branding from "./pages/branding";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Nav from "./components/nav";
import Footer from "./components/footer";
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brand" element={<Branding />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
