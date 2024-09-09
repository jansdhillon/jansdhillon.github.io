import { SocialLinkProps } from "@/lib/types";
import Link from "next/link";
import { Button } from "./ui/button";

export const SocialLink = ({ icon, username, link }: SocialLinkProps) => (
  <Button variant={"ghost"} className="hover:bg-accent">
    <Link href={link} className="flex flex-row gap-1.5 place-items-center text-base font-semibold">
      {icon}
      <p>{username}</p>
    </Link>
  </Button>
);
