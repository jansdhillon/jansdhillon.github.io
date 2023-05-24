import React from "react";
import styled from "styled-components";
import StackX from "./StackX";
import Subtitle from "./Subtitle";
import Sub5title from "./Sub5title";

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

const Container = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    flex-direction: column;
    height: 100vh;
`;


    





const Experience: React.FC = () => {

    return (
        <Container id="ee">
        <Subtitle data-aos="fade-right" data-aos-duration="700" id="eeContainer">
          Education and Experience
        </Subtitle>
        <Sub5title data-aos="fade-right" data-aos-duration="1000">I'm currently looking for a summer internship!</Sub5title>
        {ee.slice().map((eeItem, index) => (
          <StackX key={index} title={eeItem.title} subtitle={eeItem.subtitle} description={eeItem.description} period={eeItem.period}/>
        ))}
        </Container>
    );
};

export default Experience;
