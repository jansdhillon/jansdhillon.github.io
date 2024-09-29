import { socialLinks } from "@/lib/data";
import { SocialLink } from "./social-link";
import { SocialLinkProps } from "@/lib/types";

export const Socials = () => (

    <div className="flex text-left gap-4 items-start flex-col md:flex-row font-sm">
      {socialLinks.map((link: SocialLinkProps, index: number) => (
        <SocialLink key={index} {...link} />
      ))}
    </div>
  );
