import BgGlowContainer from "./bg-glow-container";
import { Socials } from "./socials";
import Writer from "./writer";

export const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 md:h-screen ">
      <div className="container px-6 ">
        <div className=" w-full flex flex-col justify-center items-center space-y-6 md:space-y-8 text-center">
          {/* <BgGlowContainer className=" "> */}
            <Writer
              className="font-black md:min-h-[80px]  text-4xl md:text-7xl  tracking-tighter  bg-clip-text "
              text="Hey, I'm Jan!"
            />
            <h2 className="text-md md:text-2xl font-bold md:pb-2">Software Engineer</h2>
          {/* </BgGlowContainer> */}

          <Socials />
        </div>
      </div>
    </section>
  );
};
