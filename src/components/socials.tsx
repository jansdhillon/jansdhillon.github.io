import { socialLinks } from "@/lib/data";
import { SocialLink } from "./social-link";
import { SocialLinkProps } from "@/lib/types";
import { Separator } from "./ui/separator";

export const Socials = () => (
  <div className="flex flex-col md:flex-row text-left items-start md:items-center font-sm space-y-4 md:space-y-0">
    {socialLinks.map((link: SocialLinkProps, index: number) => (
      <div  className="p-0 m-0" key={index}>
        <SocialLink {...link}  />
        {index !== socialLinks.length - 1 && <Separator className="md:hidden p-0 m-0"  />}
      </div>
    ))}
  </div>
);
