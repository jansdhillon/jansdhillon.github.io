import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardDescription } from "./ui/card";
import { Separator } from "./ui/separator";

export const Education = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 " id="education">
      <div className="flex flex-col items-center  justify-center space-y-8 text-center mx-auto px-10">
        <Badge className="space-x-2 " variant={"secondary"}>
          <div>📚</div> <p>Education</p>
        </Badge>

        <h2 className="text-xl line-clamp-1 md:text-3xl font-bold my-3  text-primary tracking-wide">
          My Academic Journey
        </h2>

        <Separator className="max-w-3xl" />
        <div className="max-w-3xl p-8 rounded-xl space-y-6">
          <div className="flex items-center md:items-start justify-center space-x-6 mb-3">
            <Image
              src="/ubc.png"
              alt="UBC"
              width={30}
              height={30}
              quality={100}
            />
            <h3 className="text-lg md:text-xl font-semibold ">
              The University of British Columbia
            </h3>
          </div>

          <div className="text-center font-medium text-base space-y-4 mb-8 leading-relaxed ">
            <p className=" text-muted-foreground">
              September 2020 - April 2024
            </p>
            <p className="line-clamp-2">
              Bachelor of Science, Major in Computer Science
            </p>
            <p>
              <span className="">Cumulative GPA: </span>
              87% (High Distinction, Dean&apos;s List 2023-2024)
            </p>
          </div>

          <div className=" space-y-6 text-left pt-4 leading-loose">
            <p>
              I graduated from UBC with distinction this spring and received my
              Bachelor of Science degree with a major in Computer Science. I
              learned a lot through my studies and I am excited to apply this
              foundation to my career!
            </p>
            <div className="space-y-4">
              <h4 className=" font-medium text-base mb-2">Key Courses:</h4>
              <Separator  />
              <ul className="grid grid-cols-2 gap-2 list-disc pl-5">
                <li className="pl-1 pr-4">Software Engineering</li>
                <li className="pl-1">Algorithm Analysis</li>
                <li className="pl-1">Data Structures</li>
                <li className="pl-1">Human Computer Interaction</li>
                <li className="pl-1 pr-3">Data Analysis</li>
                <li className="pl-1">Databases</li>
                <li className="pl-1 pr-6">
                  Directed Studies in Software Development
                </li>
                <li className="pl-1">
                  Capstone Software Engineering Degree Course
                </li>
              </ul>
            </div>

            <div  className="space-y-4">
              <h4 className=" font-medium text-base mb-2">Acknowledgements:</h4>
              <Separator  />
              <ul className="space-y-2 list-disc pl-5 leading-loose">
                <li className="pl-1">
                  Recognized by the UBC Cloud Innovation Centre, a collaboration
                  between AWS and UBC, as having the best project in our
                  hackathon-style Capstone Software Engineering Degree Course.
                </li>
                <li className="pl-1">
                  Recipient of the Southern Interior Trust Development Scholarship
                  and the Alexander Rutherford Scholarship.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
