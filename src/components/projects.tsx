import { Project } from "@/lib/types";
import { JSX, Key } from "react";
import { ProjectCard } from "./project-card";
import { projects } from "@/lib/data";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import Image from "next/image";
import Link from "next/link";

export const Projects = () => (
  <div className="p-4">
    <section
      className="w-full py-12 md:py-24 lg:py-32 rounded-lg"
      id="projects"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex flex-col justify-center items-center space-y-4 w-full">
            <Badge
              variant="outline"
              className="flex gap-2 justify-center w-[1/4] bg-card  rounded-lg p-4 text-sm"
            >
              <div>🚀</div>
              <div>Projects</div>
            </Badge>
            <div className="text-2xl font-medium tracking-tighter pb-3">
              Projects I&apos;ve Contributed To
            </div>
            <Separator />
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
                  <p className="text-sm pt-3 pb-5">
                    A open-source, serverless web app powered by AWS that
                    facilitates private online communication by allowing users
                    to request and submit videos with face-blurring applied
                  </p>
                </div>
                <div className="container flex flex-col md:flex-row w-[1/3] items-center gap-2 justify-center md:w-full">
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">FastAPI</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex w-full justify-center gap-4">
                <Link href="https://github.com/COSC-499-W2023/year-long-project-team-9/tree/master">
                  <FaGithub size={20} />
                </Link>
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
                    detection machine learning model and geolocation to classify
                    scanned items as recyclable, returnable, compostable, or
                    trash, and then direct the user to where they can properly
                    dispose of it.
                  </p>
                </div>
                <div className="container flex flex-col md:flex-row w-[1/3] items-center gap-2 justify-center md:w-full">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Flask</Badge>
                  <Badge variant="secondary">YOLO/Pytorch</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex w-full justify-center">
                {/* <Link href="https://github.com/COSC-499-W2023/year-long-project-team-9/tree/master">
                        <FaGithub size={20} />
                      </Link> */}
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
);
