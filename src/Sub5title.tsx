import styled from "styled-components";


type Sub5titleProps = {
    children: React.ReactNode;
};

const Sub5title = styled.h5<Sub5titleProps>`
    margin-bottom: 20px;
    font-size: 1.1rem;
    font-weight: 400;
`;

export default Sub5title;

