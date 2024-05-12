/**
 */
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  CardContent,
  CardFooter,
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Writer from "./writer";
import { Header } from "./header";
import { FaAws, FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FigmaIcon, GitBranchIcon } from "lucide-react";
import { Socials } from "./socials";
import Image from "next/image";
import { Separator } from "./ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <Header />
              <h2 className="text-xl font-medium pb-3">
                Full-Stack Software Engineer
              </h2>
              <Socials />
              {/* <div className="space-x-4">
                <Link
                  href="/projects"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                >
                  View Projects
                </Link>
              </div> */}
            </div>
          </div>
        </section>
        <div className="p-4">
          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-neutral-100 dark:bg-neutral-900 rounded-lg"
            id="projects"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-4">
                  <div className="inline-block  rounded-lg bg-background px-3 py-1 text-sm">
                    🚀 {"           "}Projects
                  </div>
                  <div className="text-3xl font-bold tracking-tighter pb-3">
                    Things I&apos;ve made
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <Card className="p-3">
                    <CardContent className="flex flex-col items-start justify-between gap-4">
                      <div className="p-4 flex flex-col gap-3">
                        <div className="text-lg font-bold flex w-full justify-center gap-3">
                          {" "}
                          <Image
                            src="/obscurus.svg"
                            alt="obscurus"
                            width={30}
                            height={50}
                          />{" "}
                          obscurus
                        </div>
                        <p className="text-sm pt-3 ">
                          A a serverless web app powered by AWS that facilitates
                          private online communication by allowing users to
                          request and submit videos with face-blurring applied
                        </p>
                      </div>
                      <div className="flex gap-2 justify-center w-full pb-4">
                        <Badge variant="secondary">AWS</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">FastAPI</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex w-full justify-center">
                      <Link href="https://youtu.be/bWNTSBAlCgQ">
                        <Button variant={"default"}>Demo</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="p-3">
                    <CardContent className="flex flex-col items-start justify-between gap-4">
                      <div className="p-4 flex flex-col gap-3">
                        <div className="text-lg font-bold flex w-full justify-center gap-3 items-center">
                          {" "}
                          <Image
                            src="/recycling.png"
                            alt="UBC Recycling App"
                            width={30}
                            height={50}
                            className="rounded-md"
                          />{" "}
                          UBC Recycling
                        </div>
                        <p className="text-sm pt-3">
                          A cross-platform mobile app that uses a custom object
                          detection machine learning model and geolocation to
                          classify scanned items as recyclable, returnable,
                          compostable, or trash, and then direct the user to
                          where they can properly dispose of it.
                        </p>
                      </div>
                      <div className="flex gap-2 justify-center w-full">
                        <Badge variant="secondary">React Native</Badge>
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">Flask</Badge>
                        <Badge variant="secondary">YOLO/Pytorch</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex w-full justify-center">
                      <Link href="https://www.youtube.com/watch?v=crK235Yaxlc">
                        <Button variant={"default"}>Demo</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="p-4 ">
          <section
            className="w-full py-12 md:py-24 lg:py-32 rounded-lg"
            id="skills"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm ">
                    Skills
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    My Expertise
                  </h2>
                  <p className="mx-auto max-w-[700px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Here are some of the technologies and tools I&apos;m
                    proficient with.
                  </p>
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
                    <SiTypescript className="h-10 w-10" />
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
            </div>
          </section>
        </div>
        <div className="p-4">
          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-neutral-100 dark:bg-neutral-900 rounded-lg"
            id="projects"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-4">
                  <div className="inline-block  rounded-lg bg-background px-3 py-1 text-sm">
                    💼 {"           "}Experience
                  </div>
                  <div className="text-3xl font-bold tracking-tighter pb-3">
                    Teams I&apos;ve worked with
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  <Card className="p-3">
                    <CardContent className="flex flex-col items-start justify-between gap-4">
                      <div className="p-4 flex flex-col gap-3">
                        <div className="text-lg font-bold flex w-full justify-center gap-3">
                          {" "}
                          <Image
                            src="/obscurus.svg"
                            alt="obscurus"
                            width={30}
                            height={50}
                          />{" "}
                          obscurus
                        </div>
                        <p className="text-sm pt-3 ">
                          A a serverless web app powered by AWS that facilitates
                          private online communication by allowing users to
                          request and submit videos with face-blurring applied
                        </p>
                      </div>
                      <div className="flex gap-2 justify-center w-full pb-4">
                        <Badge variant="secondary">AWS</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">FastAPI</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="p-3">
                    <CardContent className="flex flex-col items-start justify-between gap-4">
                      <div className="p-4 flex flex-col gap-3">
                        <div className="text-lg font-bold flex w-full justify-center gap-3 items-center">
                          {" "}
                          <Image
                            src="/recycling.png"
                            alt="UBC Recycling App"
                            width={30}
                            height={50}
                            className="rounded-md"
                          />{" "}
                          UBC Recycling
                        </div>
                        <p className="text-sm pt-3">
                          A cross-platform mobile app that uses a custom object
                          detection machine learning model and geolocation to
                          classify scanned items as recyclable, returnable,
                          compostable, or trash, and then direct the user to
                          where they can properly dispose of it.
                        </p>
                      </div>
                      <div className="flex gap-2 justify-center w-full">
                        <Badge variant="secondary">React Native</Badge>
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">Flask</Badge>
                        <Badge variant="secondary">YOLO/Pytorch</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-3">
                    <CardContent className="flex flex-col items-start justify-between gap-4">
                      <div className="p-4 flex flex-col gap-3">
                        <div className="text-lg font-bold flex w-full justify-center gap-3 items-center">
                          {" "}
                          <Image
                            src="/ubc.svg"
                            alt="UBC Logo"
                            width={30}
                            height={50}
                            className="rounded-md"
                          />{" "}
                          <CardTitle>Student Support Analyst I</CardTitle>
                        </div>
                        <p className="text-sm pt-3">
                          <ul className="list-disc list-inside space-y-2 text-left">
                            <li>
                              Resolved an increased number of incidents compared
                              to the previous academic year
                            </li>
                            <li>
                              Improved efficiency by creating effective
                              documentation that is easy to understand and
                              access
                            </li>
                            <li>
                              Provided comprehensive support for students
                              experiencing various tech issues
                            </li>
                            <li>
                              Collaborated with other teams at UBC to lead
                              Student Support on the Okanagan campus
                            </li>
                          </ul>
                        </p>
                      </div>
                      <div className="flex gap-2 justify-center w-full">
                        <Badge variant="secondary">React Native</Badge>
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">Flask</Badge>
                        <Badge variant="secondary">YOLO/Pytorch</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="p-4">
          <section
            className="w-full py-12 md:py-24 lg:py-32 rounded-lg"
            id="education"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm">
                    Education
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    My Academic Journey
                  </h2>
                  <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Graduating with a Bachelor of Science in Computer Science
                    from UBC, specializing in Software Engineering.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row justify-center py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground font-bold">
          2024 Jan-Yaeger Dhillon
        </p>
      </footer>
    </div>
  );
}
