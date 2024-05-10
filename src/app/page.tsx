"use client";
import { Projects } from "@/components/projects";
import { Socials } from "@/components/socials";
import { Header } from "@/components/header";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Landing } from "@/components/landing";

const Page = () => (
  <div className="flex flex-col justify-center h-full">
    <Header />
    <Socials />
    <Separator className="my-2 bg-accent mx-auto" />
    <div className="flex flex-col  gap-4 justify-center items-center ">
      <Landing />
    </div>
  </div>
);

export default Page;
