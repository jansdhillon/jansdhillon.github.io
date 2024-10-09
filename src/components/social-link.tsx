import { SocialLinkProps } from "@/lib/types";
import Link from "next/link";
import { Button } from "./ui/button";

export const SocialLink = ({ icon, username, link }: SocialLinkProps) => (
  <Link
    href={link}
    className="flex w-full p-4 flex-row items-center  text-sm font-medium text-muted-foreground hover:text-primary active:text-primary  "
  >
    <div>{icon}</div>
    <div className="lg:hidden">{username}</div>
  </Link>
);
