import { Circle } from "lucide-react";
import BgGlowContainer from "./bg-glow-container";
import { Socials } from "./socials";
import { Separator } from "./ui/separator";
import Writer from "./writer";
import { Handjet } from "next/font/google";

export const Hero = () => {
  return (
    <section className="w-full py-8 md:py-20 lg:py-24 xl:py-36 ">
      <div className="container mx-auto px-6 ">
        <div className=" flex flex-col justify-center items-center space-y-6 md:space-y-8 text-center ">
          <div className=" bg-card rounded-xl  border-2 border-muted-foreground/50 flex flex-col  md:min-h-[80px] w-[350px] md:w-[600px] text-3xl md:text-6xl tracking-widest font-black leading-loose ">
            <div className="p-4 rounded-lg bg-secondary flex gap-3">
              <Circle className="h-3 w-3 md:h-4 md:w-4 text-red-500 fill-red-500" />
              <Circle className="h-3 w-3 md:h-4 md:w-4 text-yellow-500 fill-yellow-500" />
              <Circle className="h-3 w-3 md:h-4 md:w-4 text-green-500 fill-green-500" />
            </div>



            <div className="flex items-center  gap-2 px-7 md:px-5 pb-5 pt-3 md:pt-6 md:pb-8">
              <div className="font-light text-green-500 ml-2">&gt;</div>
              <Writer text="Hey, I'm Jan!" />
            </div>
          </div>
          <h2 className="text-lg md:text-2xl font-semibold   md:pb-2">
            Software Engineer
          </h2>
          <Separator className="max-w-[280px] md:max-w-[600px]" />
          <Socials />
        </div>
      </div>
    </section>
  );
};
