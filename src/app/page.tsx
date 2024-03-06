"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RxGithubLogo } from "react-icons/rx";
import {
  FaCss3,
  FaJs,
  FaLinkedin,
  FaLinkedinIn,
  FaReact,
  FaXTwitter,
} from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Writer from "./Writer";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="flex items-center justify-start text-left items-tart place-items-start  space-x-2 py-4  mr-auto px-4 md:pl-6 md:text-base text-xs">
      <a href="https://www.github.com/jansdhillon">
        <div className="flex flex-row gap-2 place-items-center">
          <RxGithubLogo className="h-4 w-4 font-semibold" />
          <p>jansdhillon</p>
        </div>
      </a>
      <a href="https://www.x.com/JanDhillon">
        <div className="flex flex-row gap-2 place-items-center">
          <FaXTwitter className="h-4 w-4 font-semibold" /> <p>jandhillon</p>
        </div>
      </a>
      <a href="https://www.instagram.com/jandhillon">
        <div className="flex flex-row gap-2 place-items-center">
          <FaInstagram className="h-4 w-4 font-semibold" /> <p>jandhillon</p>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/jan-yaeger-dhillon-572674239/">
        <div className="flex flex-row gap-2 place-items-center">
          <FaLinkedinIn className="h-4 w-4 font-semibold" />{" "}
          <p className="text-xs md:text-base">Jan-Yaeger Dhillon</p>
        </div>
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <div className="flex flex-row space-x-4 text-2xl font-semibold">
        <div>🚀</div>
        <div className="">Projects</div>
      </div>
      <Separator />
      <div className="flex space-x-4">
        <Card className="">
          <CardHeader>
            <CardTitle className="flex flex-row w-full justify-between space-x-3 ">
              obscurus
              <Image src="/logo.svg" width={30} height={50} alt="obscurus" />
            </CardTitle>
            <Separator />
            <CardDescription>Highlight Projects</CardDescription>
          </CardHeader>
          <CardContent>
            My project portfolio showcases my versatility and commitment to
            solving real-world problems. From developing a machine learning
            model to predict stock market trends to creating a community-driven
            app for environmental awareness, each project reflects my passion
            for technology and impact.
          </CardContent>
          <CardFooter>Explore more on my GitHub</CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle className="flex flex-row w-full justify-between space-x-3 ">
              UBC Recycling
              <Image src="/icon.svg" width={30} height={50} alt="ubc recycling" />
            </CardTitle>
            <Separator />
            <CardDescription>Highlight Projects</CardDescription>
          </CardHeader>
          <CardContent>
            My project portfolio showcases my versatility and commitment to
            solving real-world problems. From developing a machine learning
            model to predict stock market trends to creating a community-driven
            app for environmental awareness, each project reflects my passion
            for technology and impact.
          </CardContent>
          <CardFooter>Explore more on my GitHub</CardFooter>
        </Card>
      </div>
    </>
  );
};

const Education = () => {
  return (
    <>
      <div className="flex flex-row space-x-4 text-2xl font-semibold">
        <div>🎓</div>
        <div>Education</div>
      </div>
      <Separator />
      <div className="flex space-x-4">
        <Card className="">
          {" "}
          <CardHeader>
            <CardTitle>Hello</CardTitle>
            <CardDescription>
              Bachelor of Science in Computer Science
            </CardDescription>
          </CardHeader>
          <CardContent>
            Graduating from UBC Okanagan this spring, my journey in computer
            science has been marked by academic excellence and a strong
            commitment to learning. I&aposve taken courses ranging from software
            engineering to artificial intelligence, equipping myself with a
            broad skill set.
          </CardContent>
        </Card>
        <Card className="">
          {" "}
          <CardHeader>
            <CardTitle className="flex flex-row space-x-3 ">world</CardTitle>
            <CardDescription>
              Bachelor of Science in Computer Science
            </CardDescription>
          </CardHeader>
          <CardContent>
            Graduating from UBC Okanagan this spring, my journey in computer
            science has been marked by academic excellence and a strong
            commitment to learning. I&aposve taken courses ranging from software
            engineering to artificial intelligence, equipping myself with a
            broad skill set.
          </CardContent>
        </Card>
      </div>
    </>
  );
};

const Experience = () => {
  return (
    <>
      <div className="flex flex-row space-x-4 text-2xl font-semibold">
        <div>💼</div>
        <div>Experience</div>
      </div>
      <Separator />
      <div className="flex space-x-4">
        <Card className="">
          <CardHeader>
            <CardTitle className="flex flex-row w-full justify-between space-x-3 ">
              CSE
              <Image src="/cse.jpg" width={30} height={50} alt="cse" />
            </CardTitle>
            <Separator />
            <CardDescription>My Professional Journey</CardDescription>
          </CardHeader>
          <CardContent>
            I&aposve had the privilege of working with several teams, contributing
            to a variety of projects that span from web development to mobile
            app creation. Highlights of my career include an internship at a
            leading tech company and a leadership role in a startup, where I led
            the development of an innovative application.
          </CardContent>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle className="flex flex-row w-full justify-between space-x-3 ">
              Armilla
              <Image
                src="/at-yellow-cropped.svg"
                width={30}
                height={50}
                alt="armilla"
              />
            </CardTitle>
            <Separator />
            <CardDescription>My Professional Journey</CardDescription>
          </CardHeader>
          <CardContent>
            I&aposve had the privilege of working with several teams, contributing
            to a variety of projects that span from web development to mobile
            app creation. Highlights of my career include an internship at a
            leading tech company and a leadership role in a startup, where I led
            the development of an innovative application.
          </CardContent>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle className="flex flex-row w-full justify-between space-x-3 ">
              UBC
              <Image src="/ubc.svg" width={30} height={50} alt="ubc" />
            </CardTitle>
            <Separator />
            <CardDescription>My Professional Journey</CardDescription>
          </CardHeader>
          <CardContent>
            I&aposve had the privilege of working with several teams, contributing
            to a variety of projects that span from web development to mobile
            app creation. Highlights of my career include an internship at a
            leading tech company and a leadership role in a startup, where I led
            the development of an innovative application.
          </CardContent>
        </Card>
      </div>
    </>
  );
};

const Cards = () => {
  return (
    <div className="flex flex-col space-y-4 border-card p-4">
      <div className="flex flex-col space-y-4">
        <Projects />
        <Experience />
        <Education />
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="flex flex-col mx-auto container   h-[100dvh] md:p-10 p-10">
      <div className="mr-auto pl-5 justify-start text-4xl min-w-full font-bold  text-left min-h-[78px] leading-loose bg-gradient-to-r from-orange-300  to-indigo-500 text-transparent bg-clip-text animate-gradient bg-300%">
        <Writer text="Hey, I&aposm Jan!" />
      </div>
      <Separator className="bg-accent " />
      <Socials />
      <Cards />
    </div>
  );
};

export default Page;
