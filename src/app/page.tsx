"use client";
import { Projects } from "@/components/projects";
import { Socials } from "@/components/socials";
import { Header } from "@/components/header";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";

const Page = () => (
  <div className="pb-16">
    <Header />
    <Socials />
    <div className="flex flex-col space-y-4 border-card py-4">
      <div className="flex flex-col space-y-4">
        <Projects />
        <Experience />
        <Education />
      </div>
    </div>
  </div>
);

export default Page;
