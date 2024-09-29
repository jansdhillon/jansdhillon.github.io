"use client";;
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Socials } from "./socials";

const NavLink = ({ href, children, onClick = () => {} }: any) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm font-medium lg:font-semibold hover:text-primary  transition-colors ${
        isActive ? "text-primary" : "text-muted-foreground"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },

    { href: "#skills", label: "Skills" },
  ];

  return (
    <header
      className="bg-accent/30 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b "
      // initial={{ y: -100 }}
      // animate={{ y: 0 }}
      // transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className=" mx-auto py-6 px-14 flex items-center justify-between space-x-3">
        <nav className="hidden w-full lg:flex lg:pl-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="text-primary text-lg font-bold tracking-wide hover:text-muted-foreground"
          >
            Jan-Yaeger Dhillon
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div>
            <Socials />
          </div>

        </nav>

        <nav className="flex items-center lg:hidden justify-between w-full">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <Link
              href="/"
              className="text-primary text-md font-bold tracking-wide hover:text-muted-foreground"
            >
              Jan-Yaeger Dhillon
            </Link>

            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <RxHamburgerMenu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-6 mt-8 ">
                <div className="pl-4 space-y-4">
                  {navItems.map((item, index) => (
                    <div key={index} className="space-y-4">
                      <NavLink
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </NavLink>

                      <Separator className="m-0 p-0" />
                    </div>
                  ))}
                </div>
                <Socials />
              </div>
            </SheetContent>
          </Sheet>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
