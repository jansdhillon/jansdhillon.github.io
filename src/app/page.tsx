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
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Writer from "./Writer";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Page = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="grid grid-rows-[40%__40%__20%] space-y-5 py-4">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <Avatar className="w-20 h-20">
            <AvatarImage src="https://avatars.githubusercontent.com/u/77344313?v=4"/>
            <AvatarFallback>Jan</AvatarFallback>
          </Avatar>
        </div>
        <div className="  text-5xl min-w-full font-bold justify-self-end text-center leading-loose min-h-[100px] bg-gradient-to-r from-orange-300  to-indigo-500 text-transparent bg-clip-text animate-gradient bg-300%">
          <Writer text="Hey, I'm Jan!" />
        </div>

        <div className=" flex flex-row justify-center space-x-2 ">
          <a href="https://www.github.com/jansdhillon">
            <div className="flex flex-row gap-2 place-items-center">
              <RxGithubLogo className="h-5 w-5 font-semibold" />
              <p>jansdhillon</p>
            </div>
          </a>
          <a href="https://www.x.com/JanDhillon">
            <div className="flex flex-row gap-2 place-items-center">
              <FaXTwitter className="h-5 w-5 font-semibold" /> <p>jandhillon</p>
            </div>
          </a>
          <a href="https://www.instagram.com/jandhillon">
            <div className="flex flex-row gap-2 place-items-center">
              <FaInstagram className="h-5 w-5 font-semibold" />{" "}
              <p>jandhillon</p>
            </div>
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly items-center h-full space-x-4 p-10 w-full">
        <Card className="bg-card w-1/3  h-80 overflow-y-scroll">
          <CardHeader>
            <CardTitle className="flex flex-row space-x-4">
              <div>🎓</div>
              <div>Education</div>
            </CardTitle>
            <Separator />
            <CardDescription>
              Bachelor of Science in Computer Science
            </CardDescription>
          </CardHeader>

          <CardContent>
            Graduating from UBC Okanagan this spring, my journey in computer
            science has been marked by academic excellence and a strong
            commitment to learning. I've taken courses ranging from software
            engineering to artificial intelligence, equipping myself with a
            broad skill set.
          </CardContent>
        </Card>
        <Card className="bg-card w-1/3  h-80 overflow-y-scroll">
          <CardHeader>
            <CardTitle className="flex flex-row space-x-4">
              <div>💼</div>
              <div>Experience</div>
            </CardTitle>
            <Separator />
            <CardDescription>My Professional Journey</CardDescription>
          </CardHeader>
          <CardContent>
            I've had the privilege of working with several teams, contributing
            to a variety of projects that span from web development to mobile
            app creation. Highlights of my career include an internship at a
            leading tech company and a leadership role in a startup, where I led
            the development of an innovative application.
          </CardContent>
        </Card>
        <Card className="bg-card w-1/3 h-80 overflow-y-scroll">
          <ScrollArea className="h-full">
            <CardHeader>
              <CardTitle className="flex flex-row space-x-4">
                <div>🚀</div>
                <div>Projects</div>
              </CardTitle>
              <Separator />
              <CardDescription>Highlight Projects</CardDescription>
            </CardHeader>
            <CardContent>
              My project portfolio showcases my versatility and commitment to
              solving real-world problems. From developing a machine learning
              model to predict stock market trends to creating a
              community-driven app for environmental awareness, each project
              reflects my passion for technology and impact.
            </CardContent>
            <CardFooter>Explore more on my GitHub</CardFooter>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
};

export default Page;
