import { FaReact, FaAws, FaPython, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPostgresql } from "react-icons/si";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { BiLogoTypescript } from "react-icons/bi";


export const Skills = () => {
  return (
    <div className="p-4 ">
      <section
        className="w-full py-12 md:py-24 lg:py-32 rounded-lg"

      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex flex-col justify-center items-center space-y-4 w-full mb-5">
              <Badge
                variant="outline"
                className="flex gap-2 justify-center w-[1/4] bg-accent rounded-full p-3 text-sm"
                id="skills"
              >
                <div>🎨</div>
                <div>Skills</div>
              </Badge>
              <div className="text-2xl font-medium tracking-tighter pb-4">
                Technologies I Use
              </div>
              <Separator />
            </div>

            <div className="grid w-full max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center gap-2">
                <FaReact className="h-10 w-10" />
                <span className="text-sm font-medium">React</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiNextdotjs className="h-10 w-10" />
                <span className="text-sm font-medium">Next.js</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiTailwindcss className="h-10 w-10" />
                <span className="text-sm font-medium">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <BiLogoTypescript className="h-10 w-10" />
                <span className="text-sm font-medium">TypeScript</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiPostgresql className="h-10 w-10" />
                <span className="text-sm font-medium">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FaAws className="h-10 w-10" />
                <span className="text-sm font-medium">AWS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FaPython className="h-10 w-10" />
                <span className="text-sm font-medium">Python</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FaNodeJs className="h-10 w-10" />
                <span className="text-sm font-medium">Node.js</span>
              </div>
            </div>
          </div>
          <div className="flex pt-10 justify-center">
            ...and more! Plus I&apos;m always learning new things ✨
          </div>
        </div>
      </section>
    </div>
  );
};
