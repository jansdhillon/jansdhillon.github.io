import { socialLinks } from "@/lib/data";
import { SocialLink } from "./social-link";
import { SocialLinkProps } from "@/lib/types";

export const Socials = () => (

    <div className="flex items-center justify-start text-left gap-3 py-4 md:text-sm text-xs flex-col md:flex-row">
      {socialLinks.map((link: SocialLinkProps, index: number) => (
        <SocialLink key={index} {...link} />
      ))}
    </div>
  );
