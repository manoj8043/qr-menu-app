import About from "./components/About";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Sign from "./components/Sign.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Sign />} />
        <Route path="/Login" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
