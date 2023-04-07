import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import '../src/styles/global.css'
import Branding from "./pages/branding";
import Home from "./pages/home";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Branding />} />
      </Routes>
    </Router>
  )
}

export default App
