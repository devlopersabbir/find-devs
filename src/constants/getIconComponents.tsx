import React from "react";
import { Facebook, Github, Linkedin } from "lucide-react";
import { TNet } from "@/types";

export const getIconComponent = (network: TNet) => {
  switch (network) {
    case "Facebook":
      return (
        <Facebook
          size={25}
          className="group-hover:scale-125 group-hover:text-rose-600 group-hover:rotate-[360deg] duration-300 ease-out"
        />
      );
    case "GitHub":
      return (
        <Github
          size={25}
          className="group-hover:scale-125 group-hover:text-rose-600 group-hover:rotate-[360deg] duration-300 ease-out"
        />
      );
    case "LinkedIn":
      return (
        <Linkedin
          size={25}
          className="group-hover:scale-125 group-hover:text-rose-600 group-hover:rotate-[360deg] duration-300 ease-out"
        />
      );
  }
};
