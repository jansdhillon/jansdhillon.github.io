import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ArrowDownLeftSquare, Sun, Moon, Bold } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"; // Assuming you have these components
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import useScroll from "@/components/hooks/scroll";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AppleLogin from "react-apple-login";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const scroll = useScroll();

  return (
    <div className="sticky top-0 bg-gradient-to-b from-secondary to-background z-50 flex flex-column justify-between min-w-full opacity-0 animate-fadeIn delay-2500 transition-opacity">
      <div className="p-5">
        <NavigationMenu>
          <NavigationMenuList>
            <Link href="/">
              <NavigationMenuItem>
                <span className="font-bold text-xl p-5 hover:cursor-pointer">
                  Jan-Yaeger Dhillon
                </span>
              </NavigationMenuItem>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="grid grid-flow-col gap-2 justify-end items-center pr-5 ">
        <div className="flex justify-end space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" data-testid="theme-toggle">
                <Sun size={25} className="stroke-primary fill-primary" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => setTheme("light")}
                data-testid="light"
              >
                Light
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("dark")}
                data-testid="dark"
              >
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("system")}
                data-testid="system"
              >
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
