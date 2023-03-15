import Typewriter from "typewriter-effect";
import React from 'react';
import "/Users/imigh/Coding/Jan's Portfolio/jan-portfolio/src/Writer.css";

class Writer extends React.Component {

  render() {
    return (
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hey, I'm Jan :)")
            .pauseFor(1000).changeDelay(25)
            .start();
        }}
      />
    );
  }
};

export default Writer;