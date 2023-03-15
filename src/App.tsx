import { useState, useRef, useEffect, useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import autoAnimate from "@formkit/auto-animate";
import "./App.css";
import Sound, { ReactSoundProps } from "react-sound";
import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "animate.css/animate.min.css";
import AOS from "aos";
import React from "react";
import Writer from "./Writer";


function App() {
  useLayoutEffect(() => {
    AOS.init({
      duration: 200,
    });
  }, []);

  return (
    <div className="App">
      <Navbar expand="lg" fixed="top">
        <Container fluid="md">
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
            <Button
              as="a"
              variant="success"
              href="https://github.com/jansdhillon"
              target="_blank"
              id="github"
            >
              GitHub
            </Button>
            <Button
              as="a"
              variant="primary"
              href="https://www.linkedin.com/in/jan-yaeger-dhillon-572674239/"
              target="_blank"
              id="linkedin"
            >
              LinkedIn
            </Button>
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
        <p className="center" data-aos="fade-down" data-aos-duration="2000">
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
        <p className="center" data-aos="fade-down" data-aos-duration="2000">
          I have experience programming with Python, JAVA, and JavaScript, and I'm currently learning more about web development technologies like React.
        </p>
      </Container>
      <Container id="projects" className="section">
        <h2
          data-aos="fade-down"
          data-aos-duration="700"
          data-aos-anchor="#projects"
        >
          Projects
        </h2>
        <p className="center" data-aos="fade-down" data-aos-duration="2000">
          This portfolio is the main project I'm working on right now, but you
          can find more things I've done over at my GitHub!
        </p>
      </Container>
      <Container id="ee" className="section">
        <h2 data-aos="fade-down" data-aos-duration="700" data-aos-anchor="#ee">
          Education and Experience
        </h2>
        <p className="center" data-aos="fade-down" data-aos-duration="2000">
          I'm currently in my fourth-year of my computer science degree at UBC
          Okanagan. I also work as the Student Support Analyst for UBCIT.
        </p>
      </Container>
    </div>
  );
}

export default App;
