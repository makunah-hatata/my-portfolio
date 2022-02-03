import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import { useState } from 'react';
import Menu from "./components/menu/Menu";
import "./app.scss"

function App() {

  // Using a hook to control the menu bar and its hamburger animation.
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
      
    </div>
  );
}

export default App;
