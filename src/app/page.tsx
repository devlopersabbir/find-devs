import ProfileCard from "@/components/contents/ProfileCard";
import ProfileGrid from "@/components/contents/ProfileGrid";
import Paginations from "@/components/pagination/Paginations";
import Search from "@/components/search/Search";
import Sidebar from "@/components/sidebar/Sidebar";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React, { Suspense } from "react";

type PageProps = {
  searchParams: {
    page: string;
  };
};

export default async function Home({
  searchParams: { page = "1" },
}: PageProps) {
  return (
    <div className="w-full">
      <Sidebar />
      {/* search bar */}
      <Search />
      {/* scrolling content */}
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
              <Card
                className="rounded-lg overflow-hidden col-span-2 md:col-span-1 relative h-fit shadow-xl border-none"
                key={i}
              >
                <Skeleton className="w-full h-80" />
                <CardHeader className="space-y-4">
                  <Skeleton className="h-5 w-1/2" />
                  <Skeleton className="h-5 w-12" />

                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Skeleton className="h-4 w-14" />
                  <Skeleton className="h-8 w-24" />
                </CardFooter>
              </Card>
            ))}
          </div>
        }
      >
        <ProfileGrid page={page} />
      </Suspense>
    </div>
  );
}
