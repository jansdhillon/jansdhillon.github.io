import AOS from "aos";
import React from "react";
import "./App.css";
import Experience from "./Experience";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Writer from "./Writer";
import css from "./assets/css.png";
import github from "./assets/github.png";
import html from "./assets/html.png";
import java from "./assets/java.png";
import javascript from "./assets/js.png";
import linkedin from "./assets/linkedin.png";
import python from "./assets/python.png";
import react from "./assets/react.png";
import sql from "./assets/sql.png";
import ts from "./assets/ts.png";


function App() {
    AOS.init();

  const skills = [
    {
      icon: python,
    },
    {
      icon: javascript,
    },
    {
      icon: html,
    },
    {
      icon: css,
    },
    {
      icon: sql,
    },
    {
      icon: java,
    },
    {
      icon: ts,
    },
    {
      icon: react,
    },
    
  ];






  return (
    <div className="App">
      <Navbar links={[{name:"Skills", href:"#skills"}, 
      {name:"Projects", href:"#projects-anchor"},
      {name:"Education and Experience", href:"#eeContainer"}
      ]} brand={{name:"Jan-Yaeger Dhillon", href:"#intro"}} icons={[{name: "GitHub", href:"https://github.com/jansdhillon", src:github}, {name:"LinkedIn", href: "https://www.linkedin.com/in/jan-yaeger-dhillon-572674239/", src: linkedin}]}/>
      <div id="intro" className="section">
        <Writer text="Hey, I'm Jan :)" />
      </div>
      <div id="skills" className="section">
        <h2
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-anchor="#skills"
        >
          Skills
        </h2>
        <h5 data-aos="zoom-in" data-aos-duration="1000">What I use. I'm constantly learning more too!</h5>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-card">
              <img
                key={index}
                src={skill.icon}
                style={{ width: "50px", marginBottom: "7px", alignContent: "center" }}
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              />
            </div>
          ))}
        </div>
      </div>
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
