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
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Writer from "./Writer";

const IndexPage: NextPage = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="grid grid-cols-1 justify-items-center items-center h-screen">
      <h1 className="text-5xl font-bold pt-10 px-10 text-center leading-loose">
        
        <Writer text="Hey, I'm Jan!"/>
        </h1>
      <div className="flex flex-col gap-2 p-10 md:flex-row">
        <Card>
          <CardHeader className="justify-items-center">
            <CardTitle>Projects</CardTitle>
            <CardDescription className=" font-semibold py-5">
              Welcome to my portfolio!
            </CardDescription>
          </CardHeader>
          <CardContent className=" font-regular">
            Hey, I&apos;m Jan! I&apos;m an aspiring software engineer who enjoys
            building and learning new things.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
            <CardDescription className=" font-semibold py-5">
              Welcome to my portfolio!
            </CardDescription>
          </CardHeader>
          <CardContent className=" font-regular">
            Hey, I&apos;m Jan! I&apos;m an aspiring software engineer who enjoys
            building and learning new things.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
            <CardDescription className=" font-semibold py-5">
              Welcome to my portfolio!
            </CardDescription>
          </CardHeader>
          <CardContent className=" font-regular">
            Hey, I&apos;m Jan! I&apos;m an aspiring software engineer who enjoys
            building and learning new things.
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IndexPage;
