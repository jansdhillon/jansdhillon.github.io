"use client";

import { Socials } from "./socials";
import { Footer } from "./footer";
import { Projects } from "./projects";
import { Skills } from "./skills";
import { Education } from "./education";
import { Experience } from "./experience";
import BgGlowContainer from "./bg-glow-container";
import Writer from "./writer";
import { Hero } from "./hero";

export default function Home() {
  return (
    <div className="flex-1 flex-col min-h-[100dvh] pt-24 md:pt-5 ">
      <Hero />
      <Projects />
      <Experience />

      <Education />

      <Skills />

      <Footer />
    </div>
  );
}
