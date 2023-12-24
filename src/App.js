import React, {useEffect} from "react";

import ParticlesEffect from "./views/ParticlesEffect";
import Navigation from "./views/Navigation";
import Profile from "./views/Profile";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Career from "./views/Career";
import Education from "./views/Education";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import Credits from "./views/Credits";


import {Scrollbar} from "./components/Scrollbar";


// Context
import {useDate} from "./components/DateContext";


// CSS
import "./App.css";


function App() {
  const {isNewYear, isSummer, isHalloween, isChristmas} = useDate();

  useEffect(() => {
    Scrollbar({isNewYear, isSummer, isHalloween, isChristmas});
  }, [isNewYear, isSummer, isHalloween, isChristmas]);

  return (
    <>
      <ParticlesEffect />
      <Navigation />
      <Profile />
      <Skills />
      <Projects />
      <Career />
      <Education />
      <Contact />
      <Credits />
      <Footer />
    </>
  );
}

export default App;
