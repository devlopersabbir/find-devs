import { Logo } from "@/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LucideBot, LucideGithub, LucideLinkedin } from "lucide-react";
import { ModeToggle } from "../../theme/Toggle";
import ProfileAdd from "./ProfileAdd";

const Sidebar = () => {
  return (
    <div className="md:flex-between flex justify-between flex-col h-full">
      {/* header */}
      <div className="flex-start flex-col w-full">
        <div className="flex-between flex-row w-full">
          <Logo />
          <ModeToggle />
        </div>
        <p className="text-left text-base text-muted-foreground font-mono">
          Discover All Developers From The Programming World
        </p>
        <ProfileAdd />
      </div>
      {/* footer */}
      <footer className="lg:flex-center gap-3 hidden ">
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
          <LucideGithub size={30} />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/devlopersabbir">
          <LucideLinkedin size={30} />
        </Link>
        <Link href="https://discord.gg/kC7NFQDjR4" target="_blank">
          <LucideBot size={30} />
        </Link>
      </footer>
    </div>
  );
};

export default Sidebar;
