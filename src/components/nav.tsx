"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";

export const Nav = () => {
  const path = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-background text-lg md:text-4xl font-bold flex items-start text-left w-full flex-col p-6 shadow-sm border-accent border-2">
      <div className="flex items-center gap-3 justify-between w-full p-2">
        <div className="text-primary text-lg font-bold">Jan-Yaeger Dhillon</div>

        <nav className="ml-auto flex  gap-4 justify-center items-center">
          <div>
            <button
              onClick={handleClick}
              className="flex flex-col justify-center items-center sm:visible md:invisible"
            >
              <span
                className={`bg-primary block transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
              ></span>
              <span
                className={`bg-primary block transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
              ></span>
              <span
                className={`bg-primary block transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
              ></span>
            </button>
          </div>
          <div className="flex gap-3">
              <Link
                className={`text-sm font-medium hover:underline underline-offset-4`}
                href="#"
              >
                <div className="hidden md:flex">
                    Projects
                </div>
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
               <div className=" hidden md:flex">
                    Skills
                </div>
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                <div className=" hidden md:flex">
                    Experience
                </div>
              </Link>
          </div>
          <ThemeSwitcher />
        </nav>
      </div>
      {path !== "/" ? (
        <Link href="/">
          <Button
            variant={"ghost"}
            className="flex items-center gap-2 font-bold mt-3"
          >
            <ArrowLeft className="size-4" />
            Back
          </Button>
        </Link>
      ) : null}
    </div>
  );
};
