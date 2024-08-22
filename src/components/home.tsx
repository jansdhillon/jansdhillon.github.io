"use client";
import { Badge } from "@/components/ui/badge";
import  Writer  from "./writer";
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

export default function Home() {

  return (
    <div className="flex flex-col min-h-[100dvh] pt-24">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-6">
            <div className="flex flex-col items-center space-y-6 md:space-y-10 text-center">
              <div className="min-w-full font-bold min-h-[60px] bg-gradient-to-l from-indigo-400 via-fuchsia-300 to-orange-400 tracking-tighter text-transparent bg-clip-text animate-gradient bg-300%">
                <Writer text="Hey, I'm Jan!" className="text-4xl md:text-6xl tracking-tighter" />
              </div>
              <h2 className="text-md md:text-2xl font-medium">
                Software Engineer
              </h2>
              <div className="flex gap-3 items-center justify-center">
                <LocationBadge />
                <JobStatusBadge/>
              </div>
              <Socials />
            </div>
          </div>
        </section>

        <Experience />
        <Projects />
        <Education />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
