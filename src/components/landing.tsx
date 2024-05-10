import { ArrowBigRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import Link from "next/link";
import { Separator } from "./ui/separator";

export const Landing = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-12  items-center gap-3">
      <Link href="/projects">
        <Card className="w-[400px] h-[200px] hover:bg-gradient-to-br  from-indigo-600  to-orange-400  hover:ring-orange-300 ">
          <CardHeader>
            <CardTitle className="flex gap-4">
              <div>🚀</div>
              <div>Projects</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">See things I&apos;ve made</CardContent>
          <CardFooter className="w-full flex justify-end p-4">
            <ArrowBigRight className="fill-white" />
          </CardFooter>
        </Card>
      </Link>
      <Link href="/experience">
        <Card className="w-[400px] h-[200px] hover:bg-gradient-to-br   from-indigo-600  to-orange-400  hover:ring-orange-300 ">
          <CardHeader>
            <CardTitle className="flex gap-4">
              <div>💼</div>
              <div>Experience</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">Teams I&apos;ve worked with</CardContent>
          <CardFooter className="w-full flex justify-end p-4">
            <ArrowBigRight className="fill-white" />
          </CardFooter>
        </Card>
      </Link>
      <Link href="/education">
        <Card className="w-[400px] h-[200px] hover:bg-gradient-to-br  from-indigo-600  to-orange-400  hover:ring-orange-300 ">
          <CardHeader>
            <CardTitle className="flex gap-4">
              <div>🎓</div>
              <div>Education</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">My academic journey</CardContent>
          <CardFooter className="w-full flex justify-end p-4">
            <ArrowBigRight className="fill-white" />
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};
