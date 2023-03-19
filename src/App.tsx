import { useState, useRef, useEffect, useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import autoAnimate from "@formkit/auto-animate";
import "./App.css";
import Sound, { ReactSoundProps } from "react-sound";
import {
  Button,
  Stack,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Card,
} from "react-bootstrap";
import "animate.css/animate.min.css";
import AOS from "aos";
import React from "react";
import Writer from "./Writer";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import python from "./assets/python.png";
import java from "./assets/java.png";
import javascript from "./assets/js.png";
import react from "./assets/react.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import ts from "./assets/ts.png";
import sql from "./assets/sql.png";


function App() {
  useLayoutEffect(() => {
    AOS.init({
      duration: 200,
    });
  }, []);


  const skills = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "React",
      icon: react,
    },
    {
      name: "TypeScript",
      icon: ts,
    },
    {
      name: "SQL",
      icon: sql,
    }
  ];

  return (
    <div className="App">
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand className="tab" href="#intro">
            Jan-Yaeger Dhillon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="tab" href="#about-me">
                About Me
              </Nav.Link>
              <Nav.Link className="tab" href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link className="tab" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className="tab" href="#ee">
                Education and Experience
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <span>
            <a href="https://www.github.com/jansdhillon">
              <img
                src={github}
                className="icon"
                alt="GitHub"
                width="50"
                height="50"
              />
            </a>
            <a href="https://www.linkedin.com/in/jan-yaeger-dhillon-572674239/">
              <img
                src={linkedin}
                className="icon"
                alt="LinkedIn"
                width="50"
                height="50"
              />
            </a>
          </span>
        </Container>
      </Navbar>
      <div id="intro" className="section">
        <Writer />
      </div>
      <div id="about-me" className="section">
        <h2
          data-aos="fade-down"
          data-aos-duration="700"
          data-aos-anchor="#about-me"
        >
          About Me
        </h2>
        <p className="center" data-aos="fade-right" data-aos-duration="1000">
          Welcome to my personal page! I'll be updating this regularily as my
          web development skills advance.
        </p>
      </div>
      <Container id="skills" className="section">
          <h2
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-anchor="#skills"
          >
            Skills
          </h2>
          <div className="d-flex flex-wrap justify-content-center">
            {skills.map((skill) => (
              <div
                className="skill-card"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  style={{ width: "50%", paddingBottom: "10px" }}
                />
                <h5>{skill.name}</h5>
              </div>
            ))}
          </div>
      </Container>
      <Container id="projects" className="section">
        <h2
          data-aos="fade-down"
          data-aos-duration="700"
          data-aos-anchor="#projects"
        >
          Projects
        </h2>
        <Card className="center" data-aos="fade-right" data-aos-duration="1000">
          <Card.Body>
            This portfolio is the main project I'm working on right now, but you
            can find more things I've done over at my GitHub!
          </Card.Body>
        </Card>
      </Container>
      <Container id="ee" className="section">
        <h2 data-aos="fade-down" data-aos-duration="700" data-aos-anchor="#ee">
          Education and Experience
        </h2>
        <Card className="center" data-aos="fade-right" data-aos-duration="1000">
          <Card.Body>
            I'm currently in my fourth-year of my computer science degree at
            UBC Okanagan. I also work as the Student Support Analyst for
            UBCIT.
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;