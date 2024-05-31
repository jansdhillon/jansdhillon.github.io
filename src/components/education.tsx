import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import Image from "next/image";

export const Education = () => {
  return (
    <div
      className="p-4"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="750"
    >
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex flex-col justify-center items-center space-y-4 w-full ">
              <Badge
                variant="outline"
                className="flex gap-2 justify-center w-[1/4] bg-accent  rounded-full p-3 text-xs md:text-sm"
                id="education"
              >
                <div>🎓</div>
                <div>Education</div>
              </Badge>
              <div className="text-base md:text-2xl font-medium tracking-tighter pb-4">
                My Academic Journey
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-stretch justify-center text-sm md:text-lg font-bold gap-4 pt-4 pb-1 md:pb-4">
                    <Image src="/ubc.svg" alt="UBC" width={20} height={20} />{" "}
                    <div>University of British Columbia</div>
                  </CardTitle>
                  <div className="text-xs md:text-sm space-y-4 ">
                    <CardDescription>
                      Bachelor of Science, Major in Computer Science
                    </CardDescription>
                    <CardDescription>Sept 2020 - April 2024</CardDescription>
                    <CardDescription>
                      <span className="font-bold">CGPA:</span> 87%
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="mx-auto max-w-[800px] text-sm md:text-base pt-4 text-left space-y-4">
                  <div>
                    I graduated from UBC with distinction this spring and
                    received my Bachelor of Science degree with a major in
                    Computer Science. I learned a lot through my studies and I
                    am excited to apply this foundation to my career!
                  </div>
                  <ul className=" space-y-4 text-left">
                    <li>
                      <p className="font-bold my-4">Key Courses:</p>
                      <ul className="list-disc list-inside space-y-2 text-left ml-4">
                        <li>Capstone Software Engineering Project (A+)</li>
                        <li>Directed Studies (A+) </li>
                        <li>Algorithm Analysis (A+) </li>
                        <li>Intro to Databases (A+) </li>
                      </ul>
                    </li>
                    <li>
                      <p className="font-bold my-4 ">Acknowledgements:</p>
                      <ul className="list-disc list-inside space-y-2 text-left ml-4">
                        <li>
                          Graduated on the Dean&apos;s List, with distinction (average &gt; 85%), and with Co-op Designation
                        </li>
                        <li>
                          Part of the team recognized as having the best project
                          in our Capstone option (AWS)
                        </li>
                        <li>
                          Recipient of the Southern Interior Development Trust
                          scholarship
                        </li>
                      </ul>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
