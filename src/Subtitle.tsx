import styled from "styled-components";

type SubtitleProps = {
    children: React.ReactNode;
};

const Subtitle = styled.h2<SubtitleProps>`
    padding-bottom: 5px;
    font-size: 3rem;
    margin-bottom: 1rem;
    justify-content: center;
    align-items: center;
`;

export default Subtitle;