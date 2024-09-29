import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardDescription } from "./ui/card";
import { Separator } from "./ui/separator";

export const Education = () => {
  return (
    <section
      className="px-16 mx-auto flex flex-col items-center w-full space-y-6 py-12 md:py-24 lg:py-32 "
      id="education"
    >
      <Badge className="space-x-2 " variant={"secondary"}>
        <div>📚</div> <p>Education</p>
      </Badge>

      {/* <h2 className="text-xl line-clamp-1 md:text-3xl font-bold my-3  text-primary tracking-wide">
        My Academic Journey
      </h2>

      <Separator  /> */}
      <div className=" rounded-xl space-y-6">
        <div className="flex items-center md:items-start  justify-center space-x-6 ">
          <Image
            src="/ubc.png"
            alt="UBC"
            width={30}
            height={30}
            quality={100}
          />
          <h2 className="text-xl line-clamp-2 text-center md:text-3xl font-bold  text-primary tracking-wide">
            The University of British Columbia
          </h2>
        </div>

        <div className="text-center text-muted-foreground font-medium md:font-semibold text-lg space-y-4 mb-8 leading-relaxed ">
          <p className="line-clamp-2">
            Bachelor of Science, Major in Computer Science
          </p>
          <p>September 2020 - April 2024</p>
        </div>

        <Separator />

        <div className=" space-y-6 text-left pt-4 leading-loose">
          <p>
            I graduated from UBC with distinction this spring, earning my
            Bachelor of Science degree in Computer Science. Throughout my
            studies, I gained a solid foundation in software development,
            algorithms, and problem-solving, while also honing my skills through
            various projects and research opportunities. I am eager to apply
            this knowledge to my career, contributing meaningfully to innovative
            solutions and tackling real-world challenges.
          </p>
          <div className="space-y-4">
            <h4 className=" font-medium text-base mb-2">Key Courses:</h4>
            <Separator />
            <ul className="grid grid-cols-2 gap-2 list-disc pl-5 font-normal">
              <li className="pl-1 pr-4">Software Engineering</li>
              <li className="pl-1">Algorithm Analysis</li>
              <li className="pl-1">Data Structures</li>
              <li className="pl-1">Human Computer Interaction</li>
              <li className="pl-1 pr-6">Data Analysis</li>
              <li className="pl-1">Databases</li>
              <li className="pl-1 pr-6">
                Directed Studies in Software Development
              </li>
              <li className="pl-1">
                Capstone Software Engineering Degree Course
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className=" font-medium text-base mb-2">Acknowledgements:</h4>
            <Separator />
            <ul className="space-y-2 list-disc pl-5 leading-loose font-normal">
              <li className="pl-1">
                Recognized by the UBC Cloud Innovation Centre, a collaboration
                between AWS and UBC, as having the best project in our
                hackathon-style Capstone Software Engineering Degree Course.
              </li>
              <li className="pl-1">Graduated with High Distinction (GPA: 87%)</li>
              <li className="pl-1">Dean&apos;s List 2023-2024</li>
              <li className="pl-1">
                Recipient of the Southern Interior Trust Development Scholarship
                and the Alexander Rutherford Scholarship.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
