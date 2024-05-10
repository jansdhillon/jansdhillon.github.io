import { Project } from "@/lib/types";
import { JSX, Key } from "react";
import { ProjectCard } from "./project-card";
import { projects } from "@/lib/data";

export const Projects = () => (
  <div className="grid md:grid-cols-2 gap-4">
    {projects.map(
      (
        project: JSX.IntrinsicAttributes & Project,
        index: Key | null | undefined
      ) => (
        <ProjectCard key={index} {...project} />
      )
    )}
  </div>
);
