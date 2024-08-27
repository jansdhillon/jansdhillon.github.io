import React, { ReactNode } from "react";

const BgGlowContainer = ({
  children,
  opacity = 0.1,
  className,
}: {
  children: ReactNode | ReactNode[];
  opacity?: number;
  className?: string;
}) => {
  return (
    <div className="relative max-w-7xl mx-auto">
      <div
        className={`absolute -inset-1 bg-gradient-to-r from-indigo-400 via-fuchsia-300 to-orange-400 rounded-lg blur`}
        style={{ opacity }}
      ></div>
      <div>{children}</div>
    </div>
  );
};

export default BgGlowContainer;
