"use client";
import { Badge } from "@/components/ui/badge";
import Writer from "./writer";
import { Socials } from "./socials";
import { Footer } from "./footer";
import { Projects } from "./projects";
import { Skills } from "./skills";
import { Education } from "./education";
import { Experience } from "./experience";
import { LocationBadge } from "./location-badge";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { JobStatusBadge } from "./job-status-badge";
import { Contact } from "./contact";
import { Button } from "./ui/button";
import BgGlowContainer from "./bg-glow-container";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] pt-24">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 ">
          <div className="container px-6 ">
            <div className="flex flex-col items-center space-y-6 md:space-y-10 text-center">
              <div className=" ">
                <BgGlowContainer opacity={0.08}>
                  <Writer
                    text="Hey, I'm Jan!"
                    className="min-w-full font-bold min-h-[60px] md:min-h-[80px] text-4xl  md:text-5xl lg:text-7xl font-outline-1 bg-gradient-to-l from-indigo-400 via-fuchsia-300 to-orange-400  tracking-tight text-transparent bg-clip-text animate-gradient bg-300%"
                  />
                </BgGlowContainer>
              </div>
              <h2 className="pb-4 text-lg md:text-3xl font-medium">
                Software Engineer
              </h2>

              <Socials />
              <div className="pt-5 flex gap-4 flex-col md:flex-row  items-center justify-center">
                {/* <BgGlowContainer opacity={0.2}> */}
                <LocationBadge />
                {/* </BgGlowContainer> */}

                {/* <BgGlowContainer opacity={0.2}> */}
                <JobStatusBadge />
                {/* </BgGlowContainer> */}
              </div>
            </div>
          </div>
        </section>

        <Experience />
        <Projects />
        <Education />
        <Skills />

        {/* <Contact/> */}
      </main>
      <Footer />
    </div>
  );
}
