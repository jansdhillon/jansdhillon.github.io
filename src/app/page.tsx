import type { NextPage } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github } from "lucide-react";
import { RxGithubLogo } from "react-icons/rx";

const IndexPage: NextPage = () => {
  return (
    <div className="grid grid-cols-1 min-h-screen items-center gap-4 lg:grid-cols-2 lg:px-36 lg:py-20 p-10">
      <div className="grid grid-rows-3 h-full  gap-4">
        <Card className=" rounded-xl grid items-center row-span-2 bg-card border-2 border-primary bg-opacity-30 drop-shadow-md">
          <CardHeader>
            <CardTitle className="text-5xl font-bold bg-gradient-to-r from-orange-300  to-indigo-500 inline-block text-transparent bg-clip-text">
              Jan-Yaeger Dhillon
            </CardTitle>
            <CardDescription className="text-2xl font-bold py-5">

            </CardDescription>
          </CardHeader>
          <CardContent className=" text-xl font-semibold">
ffffffffffffffffff
          </CardContent>
        </Card>
        <Card className="bg-opacity-60 bg-card border-primary border-2 drop-shadow-md ">
          <CardHeader className="grid grid-cols-2 w-full">
            <CardTitle className="text-3xl font-bold">Education</CardTitle>
            <RxGithubLogo className="h-10 w-10 justify-self-end" />
            <CardDescription className="font-bold text-xl">
              Bachelor of Science, Computer Science, 2023
            </CardDescription>
          </CardHeader>
          <CardContent className="text-lg" >
            I'm in my last year of my Computer Science degree at UBC Okanagan.
            I've been having a great time learning and have had the opoortunity
            to be part of some cool projects.
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-rows-3 h-full gap-4 ">
        <Card className="bg-opacity-60 bg-card border-primary border-2 drop-shadow-md ">
          <CardHeader className="grid grid-cols-2 w-full">
            <CardTitle className="text-3xl ">Recycling</CardTitle>
            <RxGithubLogo className="h-10 w-10 justify-self-end" />

            <CardDescription className="text-xl">
              Directed Studies Project
            </CardDescription>
          </CardHeader>
          <CardContent className="text-lg" >
            I'm in my last year of my Computer Science degree at UBC Okanagan.
            I've been having a great time learning and have had the opoortunity
            to be part of some cool projects.
          </CardContent>
        </Card>
        <Card className="bg-opacity-60 bg-card border-primary border-2 drop-shadow-md">
          <CardHeader className="grid grid-cols-2 w-full">
            <CardTitle className="text-2xl">obscurus</CardTitle>
            <RxGithubLogo className="h-10 w-10 justify-self-end"/>
            <CardDescription className="text-xl">
              Capstone Software Engineering Project
            </CardDescription>
          </CardHeader>
          <CardContent className="text-lg" >
            I'm in my last year of my Computer Science degree at UBC Okanagan.
            I've been having a great time learning and have had the opoortunity
            to be part of some cool projects.
          </CardContent>
        </Card>
        <Card className="bg-opacity-60 bg-card border-primary border-2 drop-shadow-md ">
          <CardHeader className="grid grid-cols-2 w-full">
            <CardTitle className="text-2xl">Project</CardTitle>
            <RxGithubLogo className="h-10 w-10 justify-self-end"/>
            <CardDescription>
              
            </CardDescription>
          </CardHeader>
          <CardContent className="text-lg " >
            I'm in my last year of my Computer Science degree at UBC Okanagan.
            I've been having a great time learning and have had the opoortunity
            to be part of some cool projects.
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IndexPage;
