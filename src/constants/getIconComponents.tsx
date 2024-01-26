import { Network } from "@/utils";
import { FacebookIcon, GithubIcon, LinkedinIcon } from "lucide-react";

export const getIconComponent = (network: string | undefined) => {
  switch (network) {
    case Network.Facebook:
      return (
        <FacebookIcon className="group-hover:scale-125 group-hover:text-rose-600 group-hover:rotate-[360deg] duration-300 ease-out" />
      );
    case Network.Github:
      return (
        <GithubIcon className="group-hover:scale-125 group-hover:text-rose-600 group-hover:rotate-[360deg] duration-300 ease-out" />
      );
    case Network.Linkedin:
      return (
        <LinkedinIcon className="group-hover:scale-125 group-hover:text-rose-600 group-hover:rotate-[360deg] duration-300 ease-out" />
      );
    default:
      return null;
  }
};
