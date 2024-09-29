import { socialLinks } from "@/lib/data";
import { SocialLink } from "./social-link";
import { SocialLinkProps } from "@/lib/types";

export const Socials = () => (

    <div className="flex text-left gap-4 justify-start  font-sm pl-4 md:pl-0">
      {socialLinks.map((link: SocialLinkProps, index: number) => (
        <SocialLink key={index} {...link} />
      ))}
    </div>
  );
