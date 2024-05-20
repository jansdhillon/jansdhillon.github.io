import Link from "next/link";
import { Separator } from "./ui/separator";
import Image from "next/image";

export const Experience = ({}) => {
  return (
    <>
      <div>
        <div>
          <div className="flex flex-row w-full justify-between space-x-3 ">
            Communications Security Establishment (CSE)
            <Link href="https://www.cse-cst.gc.ca/">
              <Image src="/cse.jpg" width={40} height={40} alt="cse" />
            </Link>
          </div>
          <Separator />
          <div>Software Developer Intern</div>
          <div>January 2024 - April 2024</div>
        </div>
        <div>
          <ul className="list-disc list-inside">
            <li>
              Contributes to the enhancement and deployment of internal
              analytical software and documentation.
            </li>
            <li>
              Employs a broad skillset and strong desire to learn, utilizing
              technologies such as Azure, Python, Linux, Kubernetes, and Helm.
            </li>
            <li>
              Actively seeks and incorporates feedback from colleagues to foster
              personal and professional growth as a developer.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[1/3] ">
        <div>
          <div className="flex flex-row w-full justify-between space-x-3 leading-loose">
            Armilla Technology
            <Link href="https://armillatech.com">
              <Image
                src="/at-yellow-cropped.svg"
                width={25}
                height={25}
                alt="armilla"
              />
            </Link>
          </div>

          <Separator />
          <div>Software Engineer Intern</div>
          <div>May 2023 - September 2023</div>
        </div>
        <div>
          <ul className="list-disc list-inside">
            <li>
              Contributed to increased sales and adoption of the product in an
              emerging market
            </li>
            <li>
              Designed and implemented creative and effective changes to the
              UI/UX
            </li>
            <li>
              Effectively collaborated with colleagues to maintain and improve
              company websites and app
            </li>
            <li>
              Played a key role within a growing organization by elevating
              customer experiences
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[1/3]">
        <div>
          <div className="flex flex-row w-full justify-between space-x-3 leading-loose">
            UBC
            <Link href="https://ubc.ca">
              <Image src="/ubc.svg" width={20} height={20} alt="ubc" />
             </Link>
          </div>
          <Separator />
          <div className="text-xs md:text-lg">Student Support Analyst I</div>
          <div>August 2022 - April 2023</div>
        </div>
        <div>
          <ul className="list-disc list-inside">
            <li>
              Resolved an increased number of incidents compared to the previous
              academic year
            </li>
            <li>
              Improved efficiency by creating effective documentation that is
              easy to understand and access
            </li>
            <li>
              Provided comprehensive support for students experiencing various
              tech issues
            </li>
            <li>
              Collaborated with other teams at UBC to lead Student Support on
              the Okanagan campus
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
