import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { RxGithubLogo } from "react-icons/rx";
import { Project, SocialLinkProps } from "./types";
import Link from "next/link";

export const socialLinks: SocialLinkProps[] = [
  {
    icon: <RxGithubLogo className="h-4 w-4 font-semibold" />,
    username: "jansdhillon",
    link: "https://www.github.com/jansdhillon",
  },
  {
    icon: <FaXTwitter className="h-4 w-4 font-semibold" />,
    username: "jandhillon",
    link: "https://www.x.com/JanDhillon",
  },
  {
    icon: <FaInstagram className="h-4 w-4 font-semibold" />,
    username: "jandhillon",
    link: "https://www.instagram.com/jandhillon",
  },
  {
    icon: <FaLinkedinIn className="h-4 w-4 font-semibold" />,
    username: "Jan-Yaeger Dhillon",
    link: "https://www.linkedin.com/in/jan-yaeger-dhillon-572674239/",
  },
];

export const projects: Project[] = [
  {
    title: "obscurus",
    imgSrc: "/logo.svg",
    imgAlt: "Obscurus Logo",
    description: "Communicate Privately, Share Confidently.",
    content: (
      <>
        A serverless platform that uses AWS services, Next.js, and TailwindCSS
        to facilitate seamless face blurring and fully confidential video
        sharing. My degree/Capstone project, it's still a work-in-progress, but
        you can check our design submission{" "}
        <Link href="https://youtu.be/bWNTSBAlCgQ" className="text-blue-400">
          here!
        </Link>
      </>
    ),
  },
  {
    title: "UBC Recycling",
    imgSrc: "/icon.png",
    imgAlt: "UBC Recycling Logo",
    description: "Machine learning enabled recycling",
    content: (
      <>
        A cross-platform mobile app that uses a custom object detection machine
        learning model and geolocation to classify scanned items as recyclable,
        returnable, compostable, or trash, and then direct the user to where
        they can properly dispose of it. Check out the demo{" "}
        <Link
          href="https://www.youtube.com/shorts/crK235Yaxlc"
          className="text-blue-400"
        >
          here!
        </Link>
      </>
    ),
  },
];
