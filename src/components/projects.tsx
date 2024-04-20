import { Project } from "@/lib/types";
import { JSX, Key } from "react";
import { ProjectCard } from "./project-card";
import { Section } from "./section";
import { projects } from "@/lib/data";

export const Projects = () => (
    <Section title="Projects" emoji="🚀" description="Things I've made">
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project: JSX.IntrinsicAttributes & Project, index: Key | null | undefined) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
