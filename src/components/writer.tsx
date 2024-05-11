import Typewriter from "typewriter-effect";
import React from "react";

const Writer = ({ text }: { text: string }) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(text).pauseFor(100).changeDelay(100).start();
      }}
    />
  );
};

export default Writer;
