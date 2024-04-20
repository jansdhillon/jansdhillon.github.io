import { SocialLinkProps } from "@/lib/types";

export const SocialLink = ({ icon, username, link }: SocialLinkProps) => (
    <a href={link} className="flex flex-row gap-2 place-items-center">
      {icon}
      <p>{username}</p>
    </a>
  );
