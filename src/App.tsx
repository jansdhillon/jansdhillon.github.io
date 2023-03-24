import { useState, useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  Container,
  Nav,
  Navbar,
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
import ProjectCard from "./ProjectCard";
import StackX from "./StackX";

function App() {
  useLayoutEffect(() => {
    AOS.init({
      duration: 200,
    });
  }, []);

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

  const projects = [
    {
      title: "NOVA Emotional Support ChatBot",
      description: "A chatbot designed in a group software engineering project.",
      details: "This was the class project for my Software Engineering class. My team and I used JAVA to create a chatbot that detected their emotions and acted as a sort of emotional support. We coded it mainly in JAVA, utilized several REST APIs and tested it with JUnit to achieve our goal. Looking back at this project now, I have honestly grown so much as a developer; however, it was a good starting point and gave me great hands-on experience developing software as a group and implementing software development life cycle processes. I've even considered going back and cleaning it up but in all honesty that would be kind of a waste considering non-AI chatbots are completely obsolete now. I mean, just take a look at my Dreamer project!",
      link: "https://github.com/COSC-310-Group-8/Assignment_3",
    },
    {
      title: "Dreamer",
      description: "A Python program to create any Python program.",
      details: "I'm amazed by the capabilities of AI and have been actively finding ways to implement. This program asks the user what they want the programt odo and then uses the OpenAI GPT-3.5 Turbo Engine to create it in Python and then gives them the option to run it. I mainly made this for personal usage and have alrady found a lot of use for it. It's super handy to automatically create and run Python scripts and can actaully make some pretty complex stuff that easily serves as a starting point. I've even experimenting with having it create and call the OpenAI API itself, which I pretty cool. I'm currently working on making this program easily accessible from anytwhere on my system. I named it Dreamer because I'm hoping to get it to the point where it can instantly actualize any Python program I dreaam of. I plan on adding a debug layer that uses AI to automatically debug it and check for errors in the original generation to hopefully yield better results for scripts I want to use instantly. I'm eager to get my hands on the GPT-4 API as that greatly improve the functionality and increase the scope of what the program could create.",
      link: "https://github.com/jansdhillon/Dreamer",
    },
    {
      title: "Faster Google Search",
      description: "A Chrome extension to speed up Google searches.",
      details: "Originally, I was going to make a macOS app that uses the Force Click trackpad function to do a Google Search for it but I realized that Chrome can't actually access Force Click so I just made a Chrome extension that allows me to press Option (or Alt) and click on the selected text to do a Google search for it. Of course, you can already select the text, right-click, and then click 'Search Google for...' but this saves a click. And for a big keyboard shortcut guy like me, I love it. It's pretty simple so I'm not sure if I'll ever release it but it was a fun project to work on and actually useful for me. I love making things that help me learn while also creating a tool that I can use to learn more quicker.",
      link: "https://github.com/jansdhillon/Faster-Google-Search",
    },
    {
      title: "Quick Export",
      description: "Automatically export files to OneDrive after being used to avoid sync wait issues.",
      details: "This is a Python script I wrote because I was getting annoyed with the way OneDrive uploads were working. Sometimes I am creating a lot of documents (ex. exporting Word documents to pdf) and want to use them instantly but they get stuck in the OneDrive upload queue for whatever reason. This way, I can access them instantly after I create them and then automatically move them all to the OneDrive folder to sync with the cloud. Currently it's an app that I activate in my Quick Export folder but I have plans to make it watch the folder and do it automatically after they're used.",
      link: "https://github.com/jansdhillon/Quick-Export",
    
    },
    
    
  ];

  const ee = [
    {
      title: "UBC Bachelor of Science",
      subtitle: "Major: Computer Science",
      period: "2018 - Present",
      description: "I'm currently in my 4th year of my Computer Science degree at UBC Okanagan."
    },
    {
      title: "Student Support Analyst I",
      subtitle: "UBC IT",
      period: "2022 - Present",
      description: "I'm currently working as a Student Support Analyst I at UBC IT. I'm responsible for providing technical support to students on the UBC Okanagan campus."
    },
  ];

  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

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
              <Nav.Link className="tab" href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link className="tab" href="#projects-anchor">
                Projects
              </Nav.Link>
              <Nav.Link className="tab" href="#eeContainer">
                Education and Experience
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <span>
            <a href="https://www.github.com/jansdhillon" target={"_blank"}>
              <img
                src={github}
                className="icon"
                alt="GitHub"
                width="50"
                height="50"
              />
            </a>
            <a href="https://www.linkedin.com/in/jan-yaeger-dhillon-572674239/" target={"_blank"}>
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
        <Writer text="Hey, I'm Jan :)" />
      </div>
      <Container id="skills" className="section">
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
                style={{ width: "50px", paddingBottom: "10px" }}
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
            </div>
          ))}
        </div>
      </Container>
      <Container id="projects" className="section" data-aos="fade-down" style={{paddingTop: "500px"}}>
        <h2 id="projects-anchor">Projects</h2>
        <h5 className="center" data-aos="fade-right" data-aos-duration="1000">Find even more things I've done on my GitHub!</h5>
        <div className="projects-container" data-aos="flip-up">
          {projects
            .slice(0, showMore ? projects.length : 3)
            .map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                details={project.details}
                link={project.link}
              />
            ))}
        </div>
        <button className="see-more-button" onClick={handleShowMore}>
          {showMore ? "See Less" : "See More"}
        </button>
      </Container>
      <Container id="ee" className="section">
        <h2 data-aos="fade-down" data-aos-duration="700" data-aos-anchor="#ee" id="eeContainer">
          Education and Experience
        </h2>
        {ee.slice().map((eeItem, index) => (
          <StackX key={index} title={eeItem.title} subtitle={eeItem.subtitle} description={eeItem.description} period={eeItem.period}/>
        ))}
        {/* <button className="see-more-button" onClick={handleShowMore}>
          {showMore ? "See Less" : "See More"}
        </button> */}
      </Container>
    </div>
  );
}

export default App;
