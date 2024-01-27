import { Network } from "@/utils";
import { FacebookIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import React from "react";

export const getIconComponent = (network: string) => {
  switch (network) {
    case Network.Facebook:
      return (
        <FacebookIcon
          size={25}
          className="group-hover:scale-125 group-hover:text-rose-600 group-hover:rotate-[360deg] duration-300 ease-out"
        />
      );
    case Network.Github:
      return (
        <GithubIcon
          size={25}
          className="group-hover:scale-125 group-hover:text-rose-600 group-hover:rotate-[360deg] duration-300 ease-out"
        />
      );
    case Network.Linkedin:
      return (
        <LinkedinIcon
          size={25}
          className="group-hover:scale-125 group-hover:text-rose-600 group-hover:rotate-[360deg] duration-300 ease-out"
        />
      );
  }
};
