"use client";

import type { NextPage } from "next";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github } from "lucide-react";
import { RxGithubLogo } from "react-icons/rx";
import { useState } from "react";
import { motion } from "framer-motion";

const IndexPage: NextPage = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0}}
      className="grid grid-cols-1 place-items-center place-content-center gap-4 lg:grid-cols-2 mx-auto  p-5 lg:h-screen "
    >
      <div className="grid grid-rows-3 gap-4 h-full">
        <Card className=" rounded-xl grid items-center row-span-2 bg-card border-2  border-accent bg-opacity-30 drop-shadow-md">
          <CardHeader>
            <CardTitle className="text-5xl font-bold bg-gradient-to-r from-orange-300  to-indigo-500 inline-block text-transparent bg-clip-text animate-gradient bg-300%">
              Jan-Yaeger Dhillon
            </CardTitle>
            <CardDescription className="text-2xl font-bold py-5">
              Welcome to my portfolio!
            </CardDescription>
          </CardHeader>
          <CardContent className=" text-xl font-semibold">
            ffffffffffffffffff
          </CardContent>
        </Card>
        <Card className="bg-opacity-60 bg-card  border-accent border-2 drop-shadow-md ">
          <CardHeader className="grid grid-cols-2 w-full">
            <CardTitle className="text-2xl font-bold">
              Bachelor of Science
            </CardTitle>
            <Image
              src="/ubc.svg"
              alt="ubc"
              width={10}
              height={10}
              className="h-10 w-10 justify-self-end"
            />
            <CardDescription className="font text-lg">
              Major: Computer Science, 2024
            </CardDescription>
          </CardHeader>
          <CardContent className="text-lg">
            I&apos;m in my last year of my Computer Science degree at UBC
            Okanagan. I&apos;ve been having a great time learning and have had
            the opoortunity to be part of some cool projects.
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-rows-3 gap-4 ">
        <Card className="bg-opacity-60 bg-card  border-accent border-2 drop-shadow-md ">
          <CardHeader className="grid grid-cols-2 w-full items-center">
            <CardTitle className="text-2xl ">UBC Recycling App</CardTitle>
            <div className="flex flex-row gap-5 place-items-center place-content-center justify-self-end">
              <Image
                src="/icon.svg"
                alt="Recycling"
                width={50}
                height={50}
                className="rounded-md"
              />
              {/* <RxGithubLogo className="h-5 w-5" /> */}
            </div>

            <CardDescription className="text-lg">
              Directed Studies Project
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            A React Native app I created that uses my custom YOLOV8 computer
            vision model to scan items for disposal and tells them whether they
            can
          </CardContent>
        </Card>
        <Card className="bg-opacity-60 bg-card  border-accent border-2 drop-shadow-md">
          <CardHeader className="grid grid-cols-2 w-full">
            <CardTitle className="text-3xl">obscurus</CardTitle>
            <Image
              src="/logo.svg"
              alt="Recycling"
              width={50}
              height={50}
              className="justify-self-end"
            />
            <CardDescription className="text-xl">
              Capstone Software Engineering Project
            </CardDescription>
          </CardHeader>
          <CardContent className="text-lg">
            I&apos;m in my last year of my Computer Science degree at UBC
            Okanagan. I&apos;ve been having a great time learning and have had
            the opoortunity to be part of some cool projects.
          </CardContent>
        </Card>
        <Card className="bg-opacity-60 bg-card  border-accent border-2 drop-shadow-md ">
          <CardHeader className="grid grid-cols-2 w-full">
            <CardTitle className="text-2xl">Project</CardTitle>
            <RxGithubLogo className="h-10 w-10 justify-self-end" />
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="text-lg ">
            I&apos;m in my last year of my Computer Science degree at UBC
            Okanagan. I&apos;ve been having a great time learning and have had
            the opoortunity to be part of some cool projects.
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default IndexPage;
