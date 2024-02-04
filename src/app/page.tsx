"use client";

import type { NextPage } from "next";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BellIcon, Github } from "lucide-react";
import { RxGithubLogo } from "react-icons/rx";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Writer from "./Writer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DemoNotifications } from "./cards/components/notifications";
import { DemoContainer } from "./cards/page";
import { EyeNoneIcon, PersonIcon } from "@radix-ui/react-icons";
import { CustomCard } from "@/components/custom-card";

const IndexPage: NextPage = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="container p-10 flex flex-col h-screen w-full">
      <div className="flex flex-col justify-center">
        <div className="  text-5xl font-bold bg-gradient-to-r from-orange-300  to-indigo-500 inline-block text-transparent bg-clip-text animate-gradient bg-300% text-center leading-loose min-h-[100px]">
          <Writer text="Hey, I'm Jan!" />
        </div>
        <div className="flex flex-row justify-center w-full gap-3">
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

      <div className="text-center text-lg py-7">
        Welcome to my page! I&apos;m an aspiring software engineer who enjoys
        building and learning new things.
      </div>
      <Separator className="mt-5" />

      <div className="flex flex-row  gap-2  items-center justify-center [&>div]:w-full h-full ">
        <CustomCard
          title={"Education"}
          description={"School and shit"}
          items={[
            {
              header: "University of British Columbia",
              sub: "Computer Science (BSc)",
              icon: FaXTwitter,
            },
            { header: "h", sub: "t", icon: FaXTwitter },
            { header: "h", sub: "t", icon: FaXTwitter },
          ]}
        />
        <CustomCard
          title={"Experience"}
          description={"Teams I've been a part of!"}
          items={[
            { header: "h", sub: "t", icon: FaXTwitter },
            { header: "h", sub: "t", icon: FaXTwitter },
            { header: "h", sub: "t", icon: FaXTwitter },
          ]}
        />
        <CustomCard
          title={"Projects"}
          description={"School and shit"}
          items={[
            {
              header: "obscurus",
              sub: "A cloud based face-blurring service",
              icon: FaXTwitter,
            },
            { header: "recycling", sub: "", icon: FaXTwitter },
            { header: "h", sub: "t", icon: FaXTwitter },
          ]}
        />
      </div>
    </div>
  );
};

export default IndexPage;
