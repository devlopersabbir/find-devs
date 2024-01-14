"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Github, MapPin } from "lucide-react";
import Link from "next/link";

const ProfileCardSkeleton = () => {
  return (
    <Card className="w-full backdrop-blur-3xl shadow flex flex-col dark:bg-zinc-700 border-none">
      {/* header */}
      <CardHeader className="flex justify-between items-stretch flex-row gap-4 overflow-hidden">
        <div className="w-24 h-24">
          <Skeleton className="h-24 w-24 rounded-full" />
        </div>
        <div className="flex-start w-full overflow-hidden flex-col gap-1">
          <Skeleton className="h-7 w-[70%] rounded" />
          <div className="flex mt-0.5 justify-start items-center gap-2 w-full">
            <Skeleton className="h-5 w-5 rounded-md" />
            <Skeleton className="h-6 w-[50%] rounded" />
          </div>
          <div className="flex overflow-x-auto gap-2 mt-2.5">
            {[0, 1, 2, 3, 4].map((_, i) => (
              <Skeleton key={i} className="h-6 w-32 rounded-full" />
            ))}
          </div>
        </div>
        <div className="flex-end w-52">
          <Skeleton className="h-[70%] w-full rounded" />
        </div>
      </CardHeader>
      <CardContent className="flex gap-1.5 flex-col">
        <Skeleton className="h-6 w-full rounded" />
        <Skeleton className="h-6 w-[70%] rounded" />
        <div className="flex-start mt-3 gap-4">
          {[0, 1, 3, 4].map((_, i) => (
            <Skeleton key={i} className="h-7 w-7 rounded-md" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCardSkeleton;
