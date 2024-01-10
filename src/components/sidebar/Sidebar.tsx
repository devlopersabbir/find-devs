import Logo from "@/constants/Logo";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, LinkedinIcon, LucideLinkedin } from "lucide-react";
import { ModeToggle } from "../theme/Toggle";

const Sidebar = () => {
  return (
    <div className="w-[20rem] fixed left-0 top-0 my-8 px-8 border-r-2 border-gray-200 h-[90vh] z-20">
      <div className="flex-between flex-col h-full">
        {/* header */}
        <div className="flex-start flex-col gap-4">
          <div className="flex-between flex-row w-full">
            <Logo />
            <ModeToggle />
          </div>
          <p className="text-left text-base text-muted-foreground font-mono">
            Discover All Developers From The Programming World
          </p>
          <Button variant="default" className="font-semibold mt-5">
            Add My Profile
          </Button>
        </div>
        {/* footer */}
        <footer className="flex-center gap-3">
          <Link
            className="cursor-pointer"
            href="https://www.buymeacoffee.com/devlopersabbir"
            target="_blank"
          >
            <Image
              src="/buymeacoffee.png"
              alt="donate button"
              width={130}
              height={80}
            />
          </Link>
          <Link
            href="https://github.com/devlopersabbir/find-devs"
            target="_blank"
          >
            <Github size={30} />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/devlopersabbir"
          >
            <LucideLinkedin size={30} />
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Sidebar;
