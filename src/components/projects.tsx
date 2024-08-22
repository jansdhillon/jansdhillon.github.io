import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
  Key,
} from "react";

const ProjectCard = ({
  logo,
  title,
  description,
  technologies,
  githubLink,
  demoLink,
}: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="h-full flex flex-col">
      <CardContent className="flex-grow p-6">
        <div className="flex flex-col gap-6 ">
          <div className="flex items-center justify-center space-x-3">
            {typeof logo === "string" ? (
              <Image
                src={logo}
                alt={title}
                width={30}
                height={30}
                className="rounded-md"
              />
            ) : (
              logo
            )}
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            {description}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-6 p-6">
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map(
            (
              tech:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | PromiseLikeOfReactNode
                | null
                | undefined,
              index: Key | null | undefined
            ) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            )
          )}
        </div>
        <div className="flex gap-4 items-center">
          {githubLink && (
            <Link href={githubLink}>
              <FaGithub size={20} />
            </Link>
          )}
          {demoLink && (
            <Link href={demoLink}>
              <Button variant="default" size="sm">
                Demo
              </Button>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  </motion.div>
);

export const Projects = () => {
  const projects = [
    {
      logo: "/obscurus.svg",
      title: "obscurus",
      description:
        "A open-source, serverless web app powered by AWS that facilitates private online communication by allowing users to request and submit videos with face-blurring applied",
      technologies: [
        "AWS",
        "TypeScript",
        "Next.js",
        "Python",
        "OpenCV",
        "Tailwind CSS",
        "PostgreSQL",
      ],
      githubLink:
        "https://github.com/COSC-499-W2023/year-long-project-team-9/tree/master",
      demoLink: "https://youtu.be/4Sjj6J6F270",
    },
    {
      logo: "/recycling.png",
      title: "UBC Recycling",
      description:
        "A cross-platform app uses a custom object detection machine learning model and geolocation to classify scanned items as recyclable, returnable, compostable, or trash, and then direct the user to where they can properly dispose of it.",
      technologies: [
        "React Native",
        "Python",
        "TypeScript",
        "Flask",
        "YOLO",
        "Tailwind CSS",
        "PyTorch"
      ],
      demoLink: "https://www.youtube.com/watch?v=crK235Yaxlc",
    },
    {
      logo: <ShieldCheck className="text-blue-500 w-8 h-8" />,
      title: "Defend Your Data",
      description:
        "An open-source web app that raises awareness about fundamental cybersecurity topics. Through various tips, interactive quizzes to test understanding, and links to additional resources, users can learn how to protect themselves in today's complex digital landscape.",
      technologies: ["Next.js", "React", "TailwindCSS", "TypeScript"],
      githubLink: "https://github.com/jansdhillon/Defend-Your-Data",
      demoLink: "https://youtu.be/v8NQ6yFvvkY?si=Bb-xsWkDyu9KaP-i",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <div className="container mx-auto px-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div>
            <Badge
              variant="outline"
              className="inline-flex items-center gap-3 bg-indigo-500 text-white rounded-full px-4 py-2 text-sm"
            >
              <div className="text-lg">🚀</div> <p>Projects</p>
            </Badge>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-8">
            Projects I&apos;ve Contributed To
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
