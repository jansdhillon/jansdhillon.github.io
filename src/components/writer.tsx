import Typewriter from "typewriter-effect";
import React from "react";

const Writer = ({ text }: { text: string }) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(text).pauseFor(200).changeDelay(25).start();
      }}
    />
  );
};

export default Writer;
