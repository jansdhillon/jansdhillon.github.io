import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import Subtitle from "./Subtitle";




const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px;
    padding-top: 500px;
    color: white;
    height: 100vh;
`;

const SeeMoreButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #ffffff0f;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #0056b3;
    }
    &:active {
        background-color: #003c7e;
    }
`;

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


const Projects: React.FC = () => {
    const [seeMore, setSeeMore] = useState(false);

    const handleSeeMore = () => {
    setSeeMore(!seeMore);
    };


    return (
        <ProjectContainer id="projects" data-aos="fade-down">
            <Subtitle id="projects-anchor">Projects</Subtitle>
            <h5 data-aos="fade-right" data-aos-duration="1000">Find even more things I've done on my GitHub!</h5>
            <div className="projects-container" data-aos="flip-up">
            {projects
                .slice(0, seeMore ? projects.length : 3)
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
            <SeeMoreButton onClick={handleSeeMore}>
                {seeMore ? "See Less" : "See More"}
            </SeeMoreButton>
        </ProjectContainer>
    );
};

export default Projects;


