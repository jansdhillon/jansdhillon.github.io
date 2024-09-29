import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Separator } from "./ui/separator";
import { SiBookstack } from "react-icons/si";
const ProjectCard = ({
  logo,
  title,
  subtitle,
  description,
  technologies,
  githubLink,
  additionalLink,
  additionalLinkText,
}: any) => (
  <div
  >
    <Card className="h-full flex flex-col rounded-xl">
      <CardContent className="flex-grow p-6">
        <div className="flex flex-col gap-8 ">
          <div className="flex items-center justify-center space-x-3 ">
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
            <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
          </div>
          <div className=" text-base text-center line-clamp-1 font-semibold text-muted-foreground">
            {subtitle}
          </div>
          <p className="text-base text-left leading-loose">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-6 p-6">
        <div className="flex flex-wrap justify-center gap-2">
          {technologies.map((tech: any, index: any) => (
            <Badge key={index} variant={"secondary"} >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          {githubLink && (
            <Link href={githubLink}>
              <FaGithub size={25} />
            </Link>
          )}
          {additionalLink && (
            <Link href={additionalLink}>
              <Button size={"default"} className="font-semibold" >
                {additionalLinkText || "Demo"}
              </Button>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  </div>
);

export const Projects = () => {
  const projects = [
    {
      logo: "/books.png",
      title: "Kathrin's Books",
      subtitle: "Online Bookstore",
      description:
        "A serverless, full-stack e-commerce site that allows users to browse and purchase a selection of rare and unique books curated by my mom, Kathrin. The app features a responsive design and a smooth, modern e-commerce flow. The project is powered by Next.js, Supabase, Stripe, and Google Cloud.",
      technologies: ["Next.js", "PostgreSQL", "TailwindCSS", "TypeScript", "Google Cloud", "Stripe", "React", "Docker"],
      githubLink: "https://github.com/jansdhillon/prairie-books",
      additionalLink: "https://kathrinsbooks.com",
      additionalLinkText: "Live Site"
    },
    {
      logo: "/obscurus.svg",
      title: "obscurus",
      subtitle: "Capstone Software Engineering Project",
      description:
        "A serverless, full-stack web app powered by AWS and infrastructure-as-code that facilitates private online communication by allowing users to request and submit videos with automatic face-blurring applied. Using a microservices architecture and cloud technologies, the app is highly performant and scalable.",
      technologies: [
        "AWS",
        "TypeScript",
        "Next.js",
        "Python",
        "OpenCV",
        "Tailwind CSS",
        "PostgreSQL",
        "Docker",
        "React",
      ],
      githubLink:
        "https://github.com/COSC-499-W2023/year-long-project-team-9/tree/master",
      additionalLink: "https://youtu.be/4Sjj6J6F270",
      additionalLinkText: "Presentation",
    },
    {
      logo: "/recycling.png",
      title: "UBC Recycling",
      subtitle: "Directed Studies Project",
      description:
        "A cross-platform mobile app uses a custom object detection machine learning model and geolocation to classify scanned items as recyclable, returnable, compostable, or trash, and then direct the user to where they can properly dispose of it.",
      technologies: [
        "React Native",
        "Python",
        "TypeScript",
        "Flask",
        "YOLO",
        "Tailwind CSS",
        "PyTorch",
      ],
      additionalLink: "https://www.youtube.com/watch?v=crK235Yaxlc",
    },
    {
      logo: <ShieldCheck className="text-blue-500 w-8 h-8" />,
      title: "Defend Your Data",
      subtitle: "Digital Citizenship Project",
      description:
        "An open-source web app that raises awareness about fundamental cybersecurity topics. Through various tips, interactive quizzes to test understanding, and links to additional resources, users can learn how to protect themselves in today's complex digital landscape.",
      technologies: ["Next.js", "React", "TailwindCSS", "TypeScript", "Powerpoint"],
      githubLink: "https://github.com/jansdhillon/Defend-Your-Data",
      additionalLink: "https://youtu.be/v8NQ6yFvvkY?si=Bb-xsWkDyu9KaP-i",
      additionalLinkText: "Presentation",
    },

  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <div className="container mx-auto px-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div>
            <Badge
            variant={"secondary"}
              className="space-x-2 px-3 py-1"
            >
              <div className="">🚀</div> <p>Projects</p>
            </Badge>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold   mb-8 text-primary leading-loose">
            Projects I&apos;ve Contributed To
          </h2>
          <Separator />
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
