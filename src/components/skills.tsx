import { motion } from "framer-motion";
import { FaReact, FaAws, FaPython, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiLinux,
  SiGit,
  SiFlask,
  SiKubernetes,
  SiPhp,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { Badge } from "@/components/ui/badge";
import { FaDocker, FaFlask, FaJava, FaLinux } from "react-icons/fa6";
import { Separator } from "./ui/separator";
import { IconType } from "react-icons/lib";

const SkillIcon = ({
  Icon,
  name,
  invert,
}: {
  Icon: IconType;
  name: string;
  invert?: boolean;
}) => (
  <div className="flex flex-col items-center gap-3">
    <Icon className={`h-10 w-10 ${invert ? "" : "text-primary"}`} />
    <span className="text-sm font-medium">{name}</span>
  </div>
);

export const Skills = () => {
  const skills = [
    { Icon: FaReact, name: "React" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: FaDocker, name: "Docker" },
    { Icon: BiLogoTypescript, name: "TypeScript" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
    { Icon: FaAws, name: "AWS" },
    { Icon: FaPython, name: "Python" },
    { Icon: FaNodeJs, name: "Node.js" },
    { Icon: SiTailwindcss, name: "Tailwind CSS" },
    { Icon: FaJava, name: "Java" },
    { Icon: FaLinux, name: "Linux", invert: true },
    { Icon: SiGit, name: "Git" },
  ];

  return (
    <section className="py-12 md:py-24 lg:py-32 " id="skills">
      <div className="container mx-auto px-10">
        <div className="flex   flex-col items-center justify-center gap-6">
          <Badge variant="secondary" className="space-x-2">
            <div>🎨</div> <p>Skills</p>
          </Badge>
          <h2 className="text-xl line-clamp-1 md:text-3xl font-bold text-primary leading-loose mb-10">
            Technologies I Use
          </h2>

          <div className="grid w-2/3  grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <SkillIcon key={index} {...skill} />
            ))}
          </div>
          <p className="text-base text-center text-muted-foreground mt-8">
            ...and more! Plus I&apos;m always learning new things ✨
          </p>
        </div>
      </div>
    </section>
  );
};
