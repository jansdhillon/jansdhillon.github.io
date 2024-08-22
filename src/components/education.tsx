import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { CardDescription } from "./ui/card";

export const Education = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 " id="education">
      <div className="container mx-auto px-7 md:px-4">
        <div className="flex flex-col items-center  justify-center space-y-8 text-center">
          <div>
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2  bg-indigo-500 text-white rounded-full px-4 py-2 text-sm"
            >
              <div>🎓</div> <p>Education</p>
            </Badge>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
            My Academic Journey
          </h2>
          <div className="max-w-3xl">
            <div className="flex items-center justify-center space-x-5 mb-6">
              <Image src="/ubc.svg" alt="UBC" width={30} height={30} />
              <h3 className="text-lg md:text-xl font-semibold">
                The University of British Columbia
              </h3>
            </div>
            <div className="text-sm md:text-base space-y-2 mb-8">
              <p className="text-muted-foreground">Sept 2020 - April 2024</p>
              <p>Bachelor of Science, Major in Computer Science</p>
              <p className="font-medium">
                <span className=" font-bold">Cumulative GPA: </span>
                87% (High Distinction, Dean&apos;s List 2023-2024)
              </p>
            </div>
            <div className="text-sm md:text-base space-y-6 text-left">
              <p>
                I graduated from UBC with distinction this spring and received
                my Bachelor of Science degree with a major in Computer Science.
                I learned a lot through my studies and I am excited to apply
                this foundation to my career!
              </p>
              <div>
                <h4 className="font-bold text-lg mb-2">Key Courses:</h4>
                <ul className="grid grid-cols-2 gap-2 list-disc list-inside ml-4">
                  <li>Software Engineering</li>
                  <li>Algorithm Analysis</li>
                  <li>Data Structures</li>
                  <li>Human Computer Interaction</li>
                  <li>Data Analysis</li>
                  <li>Databases</li>
                  <li>Directed Studies in Software Development</li>
                  <li>Capstone Software Engineering Degree Course</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Acknowledgements:</h4>
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>
                    Recognized by the UBC Cloud Innovation Centre, a
                    collaboration between AWS and UBC, as having the best
                    project in our hackathon-style Capstone Software Engineering
                    degree course.
                  </li>
                  <li>
                    Recipient of the Southern Interior Trust Development
                    Scholarship and the Alexander Rutherford Scholarship.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
