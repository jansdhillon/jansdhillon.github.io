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
    <div className="flex flex-col min-h-[100dvh] pt-24">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-6">
            <div className="flex flex-col items-center md:space-y-6 text-center">
              <div className="text-3xl md:text-5xl min-w-full font-bold  min-h-[100px] leading-loose bg-gradient-to-r from-indigo-600  to-orange-400 text-transparent bg-clip-text animate-gradient bg-300%">
                <Writer text="Hey, I'm Jan!" />
              </div>
              <h2 className="text-md md:text-xl font-medium md:pb-8 pb-5">
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
          <section className="w-full py-12 md:py-24 lg:py-32 ">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="flex flex-col justify-center items-center space-y-4 w-full">
                  <Badge
                    variant="outline"
                    className="flex gap-2 justify-center w-[1/4]  rounded-full bg-accent p-4 text-xs md:text-sm"
                    id="experience"
                  >
                    <div>💼</div>
                    <div>Experience</div>
                  </Badge>
                  <div className="text-base md:text-2xl font-medium tracking-tighter pb-3">
                    Teams I&apos;ve Worked With
                  </div>
                  <Separator />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-full ">
                  <Card className="p-3">
                    <CardContent className="flex flex-col items-start justify-between gap-4 h-full">
                      <div className="p-4 flex flex-col gap-3">
                        <div className="text-sm md:text-lg font-bold flex w-full justify-center gap-3 items-center ">
                          {" "}
                          <Image
                            src="/cse.jpg"
                            alt="CSE Logo"
                            width={20}
                            height={20}
                          />{" "}
                          Software Engineer Intern
                        </div>
                        <CardDescription>
                          Communications Security Establishment (CSE)
                        </CardDescription>
                        {/* <CardDescription>
                          January 2024 - April 2024
                        </CardDescription> */}
                        <div className="text-xs md:text-sm pt-3">
                          <ul className="list-disc list-inside space-y-2 text-left">
                            <li>
                              Contributed to the enhancement and deployment of
                              internal analytical software and documentation
                            </li>
                            <li>
                              Employed a broad skillset and strong desire to
                              learn, utilizing technologies such as Azure,
                              Python, Linux, Kubernetes, and Helm
                            </li>
                            <li>
                              Actively sought out and incorporated feedback from
                              colleagues to foster personal and professional
                              growth as a software engineer
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="container flex flex-col md:flex-row w-[1/3] items-center gap-2 justify-center md:w-full">
                        <Badge variant="secondary">Azure</Badge>
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">Kubernetes</Badge>
                        <Badge variant="secondary">Docker</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="p-3">
                    <CardContent className="flex flex-col items-start justify-between gap-4 h-full">
                      <div className="p-4 flex flex-col gap-3 ">
                        <div className="text-sm md:text-lg font-bold flex w-full justify-center gap-3 items-center  ">
                          {" "}
                          <Image
                            src="/at-yellow-cropped.svg"
                            alt="Armilla Technology Logo"
                            width={20}
                            height={20}
                          />{" "}
                          Software Engineer Co-op
                        </div>
                        <CardDescription className="h-full">
                          Armilla Technology
                        </CardDescription>
                        <div className="text-xs md:text-sm pt-8">
                          <ul className="list-disc list-inside space-y-2 text-left">
                            <li>
                              Maintained and implemented features on the company
                              apps and sites
                            </li>
                            <li>
                              Designed and implemented creative and effective
                              changes to the UI/UX
                            </li>
                            <li>
                              Contributed to increased sales and adoption of the
                              product in an emerging market
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="container flex flex-col md:flex-row w-[1/3] items-center gap-2 justify-center md:w-full">
                        <Badge variant="secondary">JavaScript</Badge>
                        <Badge variant="secondary">.NET</Badge>
                        <Badge variant="secondary">Kotlin</Badge>
                        <Badge variant="secondary">HTML</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-3">
                    <CardContent className="flex flex-col items-start justify-between gap-4">
                      <div className="p-4 flex flex-col gap-3">
                        <div className="text-sm md:text-lg font-bold flex w-full justify-center gap-3 items-center">
                          {" "}
                          <Image
                            src="/ubc.svg"
                            alt="UBC Logo"
                            width={20}
                            height={20}
                          />{" "}
                          Student Support Analyst I
                        </div>
                        <CardDescription>UBC</CardDescription>
                        <div className="text-xs md:text-sm pt-8">
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
                      <div className="container flex flex-col md:flex-row w-[1/3] items-center gap-2 justify-center md:w-full">
                        <Badge variant="secondary">ServiceNow</Badge>
                        <Badge variant="secondary">PowerPoint</Badge>
                        <Badge variant="secondary">Word</Badge>
                        <Badge variant="secondary">Excel</Badge>
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
          <section className="w-full py-12 md:py-24 lg:py-32 ">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="flex flex-col justify-center items-center space-y-4 w-full">
                  <Badge
                    variant="outline"
                    className="flex gap-2 justify-center w-[1/4] bg-accent  rounded-full p-3 text-xs md:text-sm"
                    id="education"
                  >
                    <div>🎓</div>
                    <div>Education</div>
                  </Badge>
                  <div className="text-base md:text-2xl font-medium tracking-tighter pb-4">
                    My Academic Journey
                  </div>
                  <Separator />
                  <div className="mx-auto max-w-[700px] text-sm md:text-base">
                    I graduated from UBC this spring and received my Bachelor of
                    Science degree with a major in Computer Science. I learned a
                    lot through my academic career and I am excited to apply
                    these skills to my career!
                  </div>
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
