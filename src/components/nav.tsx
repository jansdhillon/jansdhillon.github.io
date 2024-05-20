"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "./ui/separator";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTheme } from "next-themes";

export const Nav = () => {
  const path = usePathname();



  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="bg-background text-lg md:text-4xl font-bold flex items-start text-left w-full flex-col p-6 shadow-sm fixed z-50">
      <div className="flex items-center gap-3 justify-between w-full p-2">
        <div className="text-primary text-sm md:text-lg font-bold">Jan-Yaeger Dhillon</div>

        <nav className="flex  gap-4 justify-center items-center">
          <Sheet>
            <SheetTrigger asChild>
              <RxHamburgerMenu className="h-4 w-4 flex md:hidden" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-3">
                <Link
                  className={`text-sm font-medium hover:underline underline-offset-4`}
                  href="#projects"
                >
                  <SheetClose asChild>
                    <div>Projects</div>
                  </SheetClose>
                </Link>
                <Separator />
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#experience"
                >
                  <SheetClose asChild>
                    <div>Experience</div>
                  </SheetClose>
                </Link>
                <Separator />
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#skills"
                >
                  <SheetClose asChild>
                    <div>Skills</div>
                  </SheetClose>
                </Link>
                {/* <Separator /> */}

                {/* <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#education"
                >
                  <SheetClose asChild>
                    <div>Education</div>
                  </SheetClose>
                </Link> */}
              </div>
            </SheetContent>
          </Sheet>

          <div className="gap-3 hidden md:flex">
            <Link
              className={`text-sm font-semibold hover:underline underline-offset-4`}
              href="#projects"
            >
              <div className="">Projects</div>
            </Link>
            <Link
              className="text-sm font-semibold hover:underline underline-offset-4"
              href="#experience"
            >
              <div className=" hidden md:flex">Experience</div>
            </Link>
            <Link
              className="text-sm font-semibold hover:underline underline-offset-4"
              href="#skills"
            >
              <div className=" hidden md:flex">Skills</div>
            </Link>

          </div>
          <ThemeSwitcher />
        </nav>
      </div>
    </div>
  );
};
