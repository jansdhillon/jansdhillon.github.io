import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import autoAnimate from "@formkit/auto-animate";
import "./App.css";
import Sound, { ReactSoundProps } from "react-sound";
import LayerCake from "/bg.mp3";
import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import HelloMessage from "./HelloMessage";

function App() {
  const [status, setStatus] =
    useState<ReactSoundProps["playStatus"]>("PLAYING");

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Jan-Yaeger Dhillon</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about-me">About Me</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
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
      <div>
        <h2 className="center">Hey, I'm Jan!</h2>
      </div>
      <Container id="about-me">
          <h2>About Me</h2>
          <p className="center">
            Welcome to my personal page! I'll be updating this regularily as my
            web development skills advance. I'm a fourth year at UBC Okanagan
            pursuing a degree in computer science. I like to learn new things
            and love to use coding as an outlet for creativity. I've really been
            enjoying Python but I'm also trying to learn web development (like
            this!) as I'd love to be able to be creative with web design.
          </p>
      </Container>
      <Container id="projects">
        <h2>Projects</h2>
        <p className="center">
          This portfolio is the main project I'm working on right now, but you
          can find more things I've done over at my GitHub!
        </p>
      </Container>
     <Container id="interests">
        <h2>Interests</h2>
        <p className="center">
          I love learning new things and finding ways to be creative. I love
          music, video games and anime.
        </p>
      </Container>
    </div>
  );
}

export default App;
