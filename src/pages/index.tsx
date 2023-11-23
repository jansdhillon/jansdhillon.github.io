import type { NextPage } from "next";
import Layout from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github } from 'lucide-react';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <div className="container grid grid-cols-1 h-screen items-center gap-2  px-36 py-20 md:grid-cols-2 ">
        <div className="grid grid-rows-3 h-full  gap-2">
          <Card className=" rounded-xl grid items-center row-span-2 bg-opacity-60 bg-black">
            <CardHeader>
              <CardTitle className="text-3xl">Jan-Yaeger Dhillon</CardTitle>
              <CardDescription className="text-md text-secondary-foreground">Welcome to my portfolio!</CardDescription>
            </CardHeader>
            <CardContent>
              I'm in my last year of my Computer Science degree at UBC Okanagan.
              I've been having a great time learning and have had the
              opoortunity to be part of some cool projects. I'm in my last year of my Computer Science degree at UBC Okanagan.
              I've been having a great time learning and have had the
              opoortunity to be part of some cool projects. I'm in my last year of my Computer Science degree at UBC Okanagan.
              I've been having a great time learning and have had the
              opoortunity to be part of some cool projects. I'm in my last year of my Computer Science degree at UBC Okanagan.
              I've been having a great time learning and have had the
              opoortunity to be part of some cool projects. I'm in my last year of my Computer Science degree at UBC Okanagan.
              I've been having a great time learning and have had the
              opoortunity to be part of some cool projects.
            </CardContent>
          </Card>
          <Card className="bg-opacity-60 bg-black">
            <CardHeader>
              <CardTitle className="text-2xl">Education</CardTitle>
              <CardDescription>
                Bachelor of Science, Computer Science, 2023
              </CardDescription>
            </CardHeader>
            <CardContent>
              I'm in my last year of my Computer Science degree at UBC Okanagan.
              I've been having a great time learning and have had the
              opoortunity to be part of some cool projects.
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-rows-3 h-full gap-2">
          <Card className=" bg-opacity-60 bg-black" >
            <CardHeader>
              <CardTitle className="text-2xl">Project</CardTitle>
              <CardDescription>
                Bachelor of Science, Computer Science, 2023
              </CardDescription>
            </CardHeader>
            <CardContent>
              I'm in my last year of my Computer Science degree at UBC Okanagan.
              I've been having a great time learning and have had the
              opoortunity to be part of some cool projects.
            </CardContent>
          </Card>
          <Card className=" bg-opacity-60 bg-black">
            <CardHeader>
              <CardTitle className="text-2xl">Project</CardTitle>
              <CardDescription>
                Bachelor of Science, Computer Science, 2023
              </CardDescription>
              <Github />
            </CardHeader>
            <CardContent>
              I'm in my last year of my Computer Science degree at UBC Okanagan.
              I've been having a great time learning and have had the
              opoortunity to be part of some cool projects.
            </CardContent>
          </Card>
          <Card className=" bg-opacity-60 bg-black">
            <CardHeader>
              <CardTitle className="text-2xl">Project</CardTitle>
              <CardDescription>
                Bachelor of Science, Computer Science, 2023
              </CardDescription>
            </CardHeader>
            <CardContent>
              I'm in my last year of my Computer Science degree at UBC Okanagan.
              I've been having a great time learning and have had the
              opoortunity to be part of some cool projects.
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
