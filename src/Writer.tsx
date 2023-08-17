import Typewriter from "typewriter-effect";
import React from 'react';
import "./Writer.css";

type IWriterProps = {
  text: string;
}



const Writer: React.FC<IWriterProps> = ({text}) => {
  return (
    <>
    <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(text)
            .pauseFor(1000).changeDelay(25)
            .start();
        }}
      />
    </>
  );
};



export default Writer;