import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const SearchBardSkeleton = () => {
  return (
    <div className="backdrop-blur-3xl lg:fixed lg:top-0 lg:left-[20rem] lg:right-0 z-40 bg-zinc-200 dark:bg-zinc-800 static">
      <div className="w-full bottom-0 my-8 px-6 flex-center h-12 relative">
        <Skeleton className="h-full w-full rounded-md bottom-0" />
        <Skeleton className="absolute w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full right-10 cursor-pointer transition-all duration-300 z-[99999999]" />
      </div>
    </div>
  );
};
