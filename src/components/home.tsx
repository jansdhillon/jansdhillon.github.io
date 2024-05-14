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
import { Button } from "@/components/ui/button";
import Writer from "./writer";
import {
  FaAws,
  FaGithub,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Socials } from "./socials";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Footer } from "./footer";
import { Projects } from "./projects";
import { Skills } from "./skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] pt-10">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="text-3xl md:text-5xl min-w-full font-bold  min-h-[100px] leading-loose bg-gradient-to-r from-indigo-600  to-orange-400 text-transparent bg-clip-text animate-gradient bg-300%">
                <Writer text="Hey, I'm Jan!" />
              </div>
              <h2 className="text-xl font-medium pb-8">
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

        <Projects />

        {/*experience*/}
        <div className="p-4">
          <section
            className="w-full py-12 md:py-24 lg:py-32 rounded-lg"
            id="experience"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="flex flex-col justify-center items-center space-y-4 w-full">
                  <Badge
                    variant="outline"
                    className="flex gap-2 justify-center w-[1/4]  rounded-lg bg-background p-4 text-sm"
                  >
                    <div>💼</div>
                    <div>Experience</div>
                  </Badge>
                  <div className="text-2xl font-medium tracking-tighter pb-3">
                    Teams I&apos;ve Worked With
                  </div>
                  <Separator/>
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
                        <div className="text-sm pt-3">
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
                        </div>
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

        <Skills />

        <div className="p-4">
          <section
            className="w-full py-12 md:py-24 lg:py-32 rounded-lg"
            id="education"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="flex flex-col justify-center items-center space-y-4 w-full">
                  <Badge
                    variant="outline"
                    className="flex gap-2 justify-center w-[1/4]  rounded-lg p-3 text-sm"
                  >
                    <div>🎓</div>
                    <div>Education</div>
                  </Badge>
                  <div className="text-2xl font-medium tracking-tighter pb-4">
                    My Academic Journey
                  </div>
                  <Separator/>
                  <p className="mx-auto max-w-[700px]">
                    Graduating with a Bachelor of Science in Computer Science
                    from UBC, specializing in Software Engineering.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
