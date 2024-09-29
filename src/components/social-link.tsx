import { SocialLinkProps } from "@/lib/types";
import Link from "next/link";
import { Button } from "./ui/button";

export const SocialLink = ({ icon, username, link }: SocialLinkProps) => (
  <Button variant={"ghost"} className="hover:bg-accent">
    <Link href={link} className="flex flex-row items-center gap-4 text-sm font-medium">
      <div >{icon}</div>
      <div className="lg:hidden">{username}</div>
    </Link>
  </Button>
);
