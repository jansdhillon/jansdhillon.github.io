/**
 */
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Writer from "./writer";
import { Header } from "./header";
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FigmaIcon, GitBranchIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Header/>
                <h2 className="text-xl font-medium text-gray-500 dark:text-gray-400">
                  Software Engineer
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  I'm a passionate frontend developer with a focus on building
                  beautiful and user-friendly web applications.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Projects
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="p-4">
          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-accent rounded-lg"
            id="projects"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm">
                    Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    My Recent Work
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foregorund md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                    Check out some of the projects I've worked on recently.
                  </p>
                </div>
                <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="flex flex-col items-start justify-between gap-4">
                      <div className="p-4">
                        <h3 className="text-lg font-bold">Acme Inc. Website</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          A modern and responsive website for a leading technology
                          company.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">Tailwind CSS</Badge>
                        <Badge variant="secondary">Next.js</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="#"
                      >
                        View Project
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold">Todo App</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          A simple and intuitive todo app built with React and
                          Tailwind CSS.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">Tailwind CSS</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="#"
                      >
                        View Project
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold">E-commerce Website</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          A feature-rich e-commerce website built with Next.js and
                          Stripe.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">Tailwind CSS</Badge>
                        <Badge variant="secondary">Stripe</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="#"
                      >
                        View Project
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="p-4 ">
          <section className="w-full py-12 md:py-24 lg:py-32 rounded-lg" id="skills">
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
                    Here are some of the technologies and tools I'm proficient
                    with.
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
                    <FaJs className="h-10 w-10" />
                    <span className="text-sm font-medium">JavaScript</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <SiTypescript className="h-10 w-10" />
                    <span className="text-sm font-medium">TypeScript</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <GitBranchIcon className="h-10 w-10" />
                    <span className="text-sm font-medium">Git</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <FigmaIcon className="h-10 w-10" />
                    <span className="text-sm font-medium">Figma</span>
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

        <div className=" p-4">
          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-accent rounded-lg"
            id="contact"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm">
                    Contact
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Get in Touch
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Feel free to reach out if you have any questions or would like
                    to collaborate.
                  </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                  <form className="flex flex-col gap-4">
                    <Input placeholder="Name" type="text" />
                    <Input placeholder="Email" type="email" />
                    <Textarea placeholder="Message" />
                    <Button type="submit">Submit</Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          2024 Jan-Yaeger Dhillon
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
}
