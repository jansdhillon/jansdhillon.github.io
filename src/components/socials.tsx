import { socialLinks } from "@/lib/data";
import { SocialLink } from "./social-link";
import { SocialLinkProps } from "@/lib/types";

export const Socials = () => (

    <div className="flex items-center justify-start text-left gap-4 max-w-3xl    flex-col md:flex-row  font-medium">
      {socialLinks.map((link: SocialLinkProps, index: number) => (
        <SocialLink key={index} {...link} />
      ))}
    </div>
  );
