import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardDescription } from "./ui/card";
import { Separator } from "./ui/separator";

export const Education = () => {
  return (
    <section
      className="flex flex-col justify-center items-center mx-10  gap-6 py-12 md:py-24 lg:py-32 "
      id="education"
    >
       <div className="flex flex-col items-center justify-center gap-6 text-center">
        <Badge className="space-x-2 " variant={"secondary"}>
          <div>📚</div> <p>Education</p>
        </Badge>
        <h2 className="text-xl line-clamp-1 md:text-3xl font-bold mb-10 text-primary tracking-wide">
          My Academic Journey
        </h2>
      </div>
      <Card className=" md:w-2/3  mx-auto  p-10 bg-card rounded-3xl  shadow-sm">
        <div className="flex flex-col justify-center item-center gap-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center md:items-start space-x-5">
              <Image
                src="/ubc.png"
                alt="UBC"
                width={30}
                height={30}
                quality={100}
              />

              <h3 className="text-lg md:text-xl font-semibold text-center line-clamp-3">
                The University of British Columbia
              </h3>
            </div>
            <p className="line-clamp-2 text-muted-foreground font-medium text-center">
              Bachelor of Science, Major in Computer Science
            </p>
            <p className="text-muted-foreground font-medium  text-center">
              September 2020 - April 2024
            </p>
          </div>
          <Separator />
          <div className=" space-y-6 text-left pt-4 leading-loose">
            <p>
              I graduated from UBC with distinction this spring, earning my
              Bachelor of Science degree in Computer Science. Throughout my
              studies, I gained a solid foundation in software development,
              algorithms, and problem-solving, while also honing my skills
              through various projects and research opportunities. I am eager to
              apply this knowledge to my career, contributing meaningfully to
              innovative solutions and tackling real-world challenges.
            </p>
            <div className="space-y-4">
              <h4 className=" font-medium text-base mb-2">Key Courses:</h4>
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
              <ul className="space-y-2 list-disc pl-5 leading-loose font-normal">
                <li className="pl-1">
                  Recognized by the UBC Cloud Innovation Centre, a collaboration
                  between AWS and UBC, as having the best project in our
                  hackathon-style Capstone Software Engineering Degree Course.
                </li>
                <li className="pl-1">
                  Graduated with High Distinction (GPA: 87%)
                </li>
                <li className="pl-1">Dean&apos;s List 2023-2024</li>
                <li className="pl-1">
                  Recipient of the Southern Interior Trust Development
                  Scholarship and the Alexander Rutherford Scholarship.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
