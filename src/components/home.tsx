"use client";
import { Badge } from "@/components/ui/badge";
import { CardContent, Card, CardDescription } from "@/components/ui/card";
import Writer from "./writer";
import { Socials } from "./socials";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Footer } from "./footer";
import { Projects } from "./projects";
import { Skills } from "./skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Education } from "./education";
import { Experience } from "./experience";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  });
  return (
    <div className="flex flex-col min-h-[100dvh] pt-24">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-6">
            <div className="flex flex-col items-center md:space-y-6 text-center">
              <div className="pl-4 text-3xl md:text-5xl min-w-full font-bold  min-h-[100px] bg-gradient-to-r from-indigo-600  to-orange-400 text-transparent bg-clip-text animate-gradient bg-300%">
                <Writer text="Hey, I'm Jan!" />
              </div>
              <h2 className="text-md md:text-xl font-medium pb-9">
                Full-Stack Software Engineer
              </h2>
              <Socials />
            </div>
          </div>
        </section>

        <Projects />

        <Experience />

        <Education />

        <Skills />
      </main>
      <Footer />
    </div>
  );
}
