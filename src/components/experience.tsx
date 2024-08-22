import Link from "next/link";
import { Separator } from "./ui/separator";
import Image from "next/image";

import { Card, CardContent, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";

export const Experience = ({}) => {
  return (
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
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <Card
                className="p-3"
              >
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
                      Software Engineer Co-op
                    </div>
                    <CardDescription>
                    Communications Security Establishment (CSE), Government of Canada
                    </CardDescription>
                    {/* <CardDescription>
                          January 2024 - April 2024
                        </CardDescription> */}
                    <div className="text-xs md:text-sm pt-3">
                      <ul className="list-disc list-inside space-y-2 text-left">
                        <li>
                        Developed a CI/CD pipeline for a microservice deployment onto Kubernetes, enhancing reliability and efficiency.
                        </li>
                        <li>
                        Enhanced internal analytical software using Azure, Python, Linux, and SQL, leading to improved intelligence analysis.
                        </li>
                        <li>
                        Engaged in continuous feedback loops to enhance team productivity and professional development.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-x-3 space-y-3 w-full">
                    <Badge variant="secondary">Azure</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Kubernetes</Badge>
                    <Badge variant="secondary">Docker</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="p-3"
              >
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
                        Contributed to the development of an innovative sports tech product, promoting accessibility in athletics.
                        </li>
                        <li>
                        •	Overhauled the command center web app with .NET, jQuery, and CSS, improving interactivity and accessibility.
                        </li>
                        <li>
                        •	Improved Android app features with Kotlin and Java, resulting in an enriched experience for end users.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-x-3 space-y-3 w-full">
                    {" "}
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">.NET</Badge>
                    <Badge variant="secondary">Kotlin</Badge>
                    <Badge variant="secondary">CSS</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="p-3"
              >
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
                    <CardDescription>The University of British Columbia</CardDescription>
                    <div className="text-xs md:text-sm pt-8">
                      <ul className="list-disc list-inside space-y-2 text-left">
                        <li>
                        Streamlined student support by creating clear, accessible documentation, greatly reducing troubleshooting time.
                        </li>
                        <li>
                        Provided technical troubleshooting with a high satisfaction rate, resolving 70% more issues than the previous year.
                        </li>
                        <li>
                        Collaborated across teams to enhance on-campus support services, improving operational efficiency.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-x-2 space-y-3 w-full">
                    {" "}
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
  );
};
