import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { SearchIcon } from "lucide-react";
import React from "react";

const SearchBardSkeleton = () => {
  return (
    <div className="backdrop-blur-3xl fixed top-0 left-[20rem] right-0 z-40 bg-zinc-200 dark:bg-zinc-800">
      <div className="w-full bottom-0 my-8 px-6 flex-center h-12 relative">
        <Skeleton className="h-full w-full rounded-md bottom-0" />
        <Skeleton className="absolute w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full right-10 cursor-pointer transition-all duration-300 z-[99999999]" />
      </div>
    </div>
  );
};

export default SearchBardSkeleton;
