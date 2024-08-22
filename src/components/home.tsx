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

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh] pt-24">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="min-w-full font-bold min-h-[100px] bg-gradient-to-r from-indigo-500 to-orange-400 tracking-tighter text-transparent bg-clip-text animate-gradient bg-300%">
                <Writer text="Hey, I'm Jan!" className="text-4xl md:text-6xl tracking-tighter" />
              </div>
              <h2 className="text-md md:text-2xl font-medium">
                Software Engineer
              </h2>
              <LocationBadge />
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
