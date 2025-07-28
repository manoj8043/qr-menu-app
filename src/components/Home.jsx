import Nav from "./Navbar";
import Hero from "./Hero";
import Menu from "./Menu";
import About from "./About";
import Support from "./Support";
import Footer from "./Footer";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    console.log("Home component mounted");
  }, []);
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

export default Home;
