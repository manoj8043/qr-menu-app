import React from "react";
import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Support from "./components/Support";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Nav />
      <br />
      <Hero />
      <br />
      <Menu />
      <br />
      <About />
      <br />
      <Support />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
