import BgGlowContainer from "./bg-glow-container";
import { Socials } from "./socials";
import Writer from "./writer";
import {Handjet} from 'next/font/google'


export const Hero = () => {

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 ">
      <div className="container mx-auto px-6 ">
        <div className=" flex flex-col justify-center items-center space-y-6 md:space-y-8 text-center ">
          <div className="flex  items-center  gap-2  ml-[300px] md:ml-[100px] text-green-500 w-[600px] font-mono md:min-h-[80px]  text-4xl md:text-6xl tracking-tighter ">
            <div className="font-black">&gt;</div>
            <Writer  text="Hey, I'm Jan!" />
          </div>

          <h2 className="text-lg md:text-2xl font-bold md:pb-2">
            Software Engineer
          </h2>

          <Socials />
        </div>
      </div>
    </section>
  );
};
