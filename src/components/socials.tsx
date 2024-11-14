import { socialLinks } from "@/lib/data";
import { SocialLink } from "./social-link";
import { SocialLinkProps } from "@/lib/types";
import { Separator } from "./ui/separator";

export const Socials = () => (
  <div className="flex flex-col lg:flex-row text-left items-start space-y-6 lg:items-center font-sm lg:space-y-0">
    {socialLinks.map((link: SocialLinkProps, index: number) => (
      <div  className="p-0 m-0 space-y-1 w-full " key={index}>
        <SocialLink {...link}  />
      </div>
    ))}
  </div>
);
