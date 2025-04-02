import React, { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CV from "./components/CV";
import "./App.css";
import BlobBackground from "./components/BlobBackground";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header toggleTheme={() => setDarkMode(!darkMode)} />
      <div className="content">
      <BlobBackground />
      <br /><br /><div id="profile"><Profile /></div> <br /><br />
        <div id="education"><Education /></div><br /><br />
        <div id="skills"><Skills /></div><br /><br />
        <div id="experience"><Experience /></div><br /><br />
        <div id="projects"><Projects /></div><br /><br />
        <div id="cv"><CV /></div><br /><br /><br /><br /><br /><br />
      </div>
    </div>
  );
}

export default App;
