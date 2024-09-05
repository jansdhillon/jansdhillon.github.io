import Typewriter from "typewriter-effect";
import React from "react";

const Writer = ({ text, className }: { text: string, className?: string }) => {
  return (
    <div className={className}>
      <Typewriter
      options={{
        cursorClassName: className + " opacity-0",
        cursor: "",
        delay: 75,
      }}
        onInit={(typewriter) => {
          typewriter.typeString(text).start();
        }}
      />
    </div>
  );
};

export default Writer;
