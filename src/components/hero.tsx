import BgGlowContainer from "./bg-glow-container";
import { Socials } from "./socials";
import Writer from "./writer";
import {Handjet} from 'next/font/google'


export const Hero = () => {

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 md:h-screen ">
      <div className="container mx-auto px-6 ">
        <div className=" flex flex-col justify-center items-center space-y-6 md:space-y-8 text-center">
          <div className="flex  items-center  gap-1  ml-[255px] md:ml-6 text-green-500 w-[500px] font-black md:min-h-[80px]  text-4xl md:text-7xl ">
            <div>&gt;</div>
            <Writer className={`tracking-tighter`} text="Hey, I'm Jan!" />
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
