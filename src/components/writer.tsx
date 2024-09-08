import Typewriter from "typewriter-effect";
import React from "react";

const Writer = ({ text, className }: { text: string, className?: string }) => {
  return (
    <div className={className}>

      <Typewriter
      options={
        {
          cursor: "_",
          delay: 50,
          cursorClassName: "text-green-500 font-black Typewriter__cursor",



        }
      }
        onInit={(typewriter) => {
          typewriter.pauseFor(1000).typeString(text).start();
        }}
      />
    </div>
  );
};

export default Writer;
