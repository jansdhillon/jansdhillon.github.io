import React, {useLayoutEffect} from 'react';
import styled from "styled-components";
import AOS from "aos";


type StackProps = {
  title: string;
  subtitle: string;
  description: string;
  period: string;
};


const TitleText = styled.div`
align-items: center;
text-align: center;
font-size: 2rem;
`;

const SubtitleText = styled.div`
align-items: center;
text-align: center;
font-size: 1.5rem;
`;

const DescriptionText = styled.div`
align-items: center;
text-align: center;
font-size: 1.1rem;
padding-bottom: 10px;
`;

const PeriodText = styled.p`
align-items: center;
text-align: center;
font-size: 1.3rem;

`;

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;


const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 300px;
  background-color: #ffffff0f;;
  padding: 20px;
  transition: all 0.3s ease;
  margin-bottom: 20px;
`;

const StackX: React.FC<StackProps> = ({title, subtitle, description, period}) => {
    useLayoutEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);

    return (
        <Container>
            <Box data-aos="fade-right">
                <TitleText>{title}</TitleText>
                    <SubtitleText>{subtitle}</SubtitleText>
                    <PeriodText>{period}</PeriodText>
                    <DescriptionText>{description}</DescriptionText>
                    
            </Box>
        </Container>
    );
};

export default StackX;