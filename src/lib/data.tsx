import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { RxGithubLogo } from "react-icons/rx";
import { SocialLinkProps } from "./types";

export const socialLinks: SocialLinkProps[] = [
  {
    icon: <RxGithubLogo className="h-5 w-5 font-semibold" />,
    username: "jansdhillon",
    link: "https://www.github.com/jansdhillon",
  },
  {
    icon: <FaXTwitter className="h-5 w-5 font-semibold" />,
    username: "jandhillon",
    link: "https://www.x.com/JanDhillon",
  },
  {
    icon: <FaInstagram className="h-5 w-5 font-semibold" />,
    username: "jandhillon",
    link: "https://www.instagram.com/jandhillon",
  },
  {
    icon: <FaLinkedinIn className="h-5 w-5 font-semibold" />,
    username: "Jan-Yaeger Dhillon",
    link: "https://www.linkedin.com/in/jan-yaeger-dhillon-572674239/",
  },
];
